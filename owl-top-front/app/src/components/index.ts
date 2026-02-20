import { ComponentType } from 'react';
import { menuAPI } from '@/routes';

// Тип данных в бека
interface BackendRoute{
    id: string;
    path: string;
    label: string;
    category: string;
    subcategories: string;
}

// Тип роутеров
export interface RouteConfig {
    id: string;
    path: string;
    label: string;
    category: string;
    subcategories?: string;
    component: () => Promise<React.ComponentType>;
}

// Реестр компонентов
const componentRegistry: Record<string, () => Promise<ComponentType>> ={
    home: () => import('@/src/components/default_page/Default_page').then(mod => mod.default),
    photoshop: () => import('./courses/design/photoshop/PhotoshopContent').then(mod => mod.default),
    'after-effect': () => import('./courses/design/AfterEffect/AfterEffectContent').then(mod => mod.default),
    illustrator: () => import('./stub/stub').then(mod => mod.default),
    figma: () => import('./stub/stub').then(mod => mod.default),
    javaScript: () => import('./stub/stub').then(mod => mod.default),
    'react/Next.js': () => import('./stub/stub').then(mod => mod.default),
    python: () => import('./stub/stub').then(mod => mod.default),
    'node.js': () => import('./stub/stub').then(mod => mod.default),
    'Базы данных': () => import('./stub/stub').then(mod => mod.default),
    Excel: () => import('./stub/stub').then(mod => mod.default),
    'Google Analytics': () => import('./stub/stub').then(mod => mod.default),
    'SQL для аналитиков': () => import('./stub/stub').then(mod => mod.default),
    Tableau: () => import('./stub/stub').then(mod => mod.default),
    SEO: () => import('./stub/stub').then(mod => mod.default),
    SMM: () => import('./stub/stub').then(mod => mod.default),
    Копирайтинг: () => import('./stub/stub').then(mod => mod.default),
    'Контекстная реклама': () => import('./stub/stub').then(mod => mod.default),
}



let routes: RouteConfig[] =[];
let isInitialized = false;
let initializationPromise: Promise<void> | null = null;



export async function initializeRoutes(): Promise<void> {
  if (isInitialized) return;
  
  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = (async () => {
    try {
      const backendRoutes = await menuAPI.getRoutes();
      
      
      routes = backendRoutes.map((backendRoute) => {
        const componentLoader = componentRegistry[backendRoute.id];
        
        if (!componentLoader) {
          console.warn(`Компонент для роута "${backendRoute.id}" не найден в реестре`);
        }
        
        return {
          ...backendRoute,
          component: componentLoader || (() => import('./stub/stub').then(mod => mod.default))
        };
      });
      
      isInitialized = true;
      console.log('Routes initialized:', routes);
    } catch (error) {
      console.error('Failed to initialize routes:', error);
      routes = [];
      throw error;
    }
  })();

  return initializationPromise;
}



export function areRoutesInitialized(): boolean {
  return isInitialized;
}

export function waitForRoutes(): Promise<void> {
  if (isInitialized) return Promise.resolve();
  if (initializationPromise) return initializationPromise;
  return Promise.reject(new Error('initializeRoutes() was not called'));
}



export function getRouteById(id: string): RouteConfig | undefined {
  return routes.find(route => route.id === id);
}

export function getRouteByPath(path: string): RouteConfig | undefined {
  return routes.find(route => route.path === path);
}

export function getRouteByLabel(label: string): RouteConfig | undefined {
  return routes.find(route => route.label === label);
}

export function getRoutesByCategory(category: string): RouteConfig[] {
  return routes.filter(route => route.category === category);
}

export function getRoutesBySubcategory(category: string, subcategory: string): RouteConfig[] {
  return routes.filter(route => 
    route.category === category && route.subcategories === subcategory
  );
}

export function getAllRoutes(): RouteConfig[] {
  return routes;
}