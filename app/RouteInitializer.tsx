'use client';
import { useEffect, useState } from 'react';
import { initializeRoutes } from './src/components/index';

export default function RouteInitializer({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initializeRoutes()
      .then(() => setIsReady(true))
      .catch((error) => {
        console.error('Failed to initialize routes:', error);
        setIsReady(true); 
      });
  }, []);

  if (!isReady) {
    return <div className='downloading-the-application'>
              <div className='op'>
                <p>Подождите сайт загружает все данные</p>
                <span>Это займет некоторое время</span>
              </div>
            </div>
    ;
  }

  return <>{children}</>;
}