'use client';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RouteContent from './RouteContent';

export default function HomePage(): ReactElement {
  
  const searchParams = useSearchParams();

  const routeId = searchParams.get('content') || 'home';


  console.log('page.tsx: routeId =', routeId);

  return (
    <RouteContent routeId={routeId} />
  );
}