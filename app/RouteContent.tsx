'use client';
import { ReactElement, useEffect, useState, Suspense } from 'react';
import { getRouteById } from './src/components/index';
import { setCommentRange } from 'typescript';

interface RouteContentProps {
    routeId: string;
}

export default function RouteContent({ routeId }: RouteContentProps): ReactElement{
    const [Component, setComponent] = useState<React.ComponentType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadComponent = async () => {
            setLoading(true);
            setError(null);

            try {
                const route = getRouteById(routeId);

                if (!route) {
                    throw new Error(`Контент "${routeId}" не найден`);
                }

                const module = await route.component();
                setComponent(() => module);
            } catch (err){
                console.error('Ошибка загрузки компонента:', err);
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            } finally {
                setLoading(false);
            }
        };

        loadComponent();

        return () => {
            setComponent(null);
        };
    }, [routeId]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Загрузка контента...</p>
            </div>
        )
    }
    if (error){
        return(
            <div className="error-container">
                <h1>Ошибка загрузки</h1>
                <p>{error}</p>
            </div>
        )
    }

    if (!Component) {
        return(
            <div className="not-found-container">
                <h3>Контент не найден</h3>
            </div>
        )
    }

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Component />
        </Suspense>
    )
}