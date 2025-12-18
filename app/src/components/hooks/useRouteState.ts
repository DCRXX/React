'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { routes, getRouteById } from '../index';

export function useRouteState() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const initialRouteId = searchParams.get('content') || 'home';
    const [currentRouteId, setCurrentRouteIdState] = useState<string>(initialRouteId);

    useEffect(() => {
        const contentId = searchParams.get('content');
        if (contentId && contentId !== currentRouteId){
            setCurrentRouteId(contentId);
        }
    }, [searchParams, currentRouteId]);

    const setCurrentRouteId = useCallback((routeId: string) => {
        const route = getRouteById(routeId);
        if (!route) {
            console.warn(`Route with id "${routeId}" not found`);
            return;
        }

        setCurrentRouteIdState(routeId);

        const params = new URLSearchParams(searchParams.toString());
        params.set('content', routeId);

        router.replace(`${pathname}?${params.toString()}`, {scroll:false});
    }, [router, pathname, searchParams]);

    const currentRoute = getRouteById(currentRouteId);

    return{
        currentRouteId,
        currentRoute,
        setCurrentRouteId,
    };
}