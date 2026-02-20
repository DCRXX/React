'use client';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import RouteContent from './RouteContent';
import DefaultPage from './src/components/default_page/Default_page';

export default function HomePage(): ReactElement {
  
  const searchParams = useSearchParams();

  const routeId = searchParams.get('content');


  console.log('page.tsx: routeId =', routeId);

  if (!routeId){
    return<DefaultPage/>
  }
  return (
    <RouteContent routeId={routeId} />
  );
}