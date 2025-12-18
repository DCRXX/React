'use client'
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import './globals.css';
import { useState } from 'react';
import { useRouteState } from './src/components/hooks/useRouteState';

export default function RootLayout({ children }: {children: React.ReactElement}) {

  const { currentRouteId, setCurrentRouteId } = useRouteState();

  return (
    <html lang='ru'>
      <title>OWL top</title>
      <body>
        <Header
          currentRouteId={currentRouteId}
          setCurrentRouteId={setCurrentRouteId}
        
        ></Header>      
        <main>{children}</main>  
        <Footer />     
      </body>
    </html>
  );
}