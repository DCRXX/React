export interface RouteConfig {
    id: string;
    path: string;
    label: string;
    category: string;
    subcategory?: string;
    component: () => Promise<React.ComponentType>;
}

export const routes: RouteConfig[] = [
    {
        id: 'home',
        path: '/home',
        label: 'home',
        category: '',
        subcategory: '',
        component: () => import('./default_page/Default_page').then(mod => mod.default)
    },
    {
        id: 'photoshop',
        path: '/photoshop',
        label: 'Photoshop',
        category: 'courses',
        subcategory: 'design',
        component: () => import('./courses/design/photoshop/PhotoshopContent').then(mod => mod.default),
    },
    {
        id: 'after-effect',
        path: '/after-effect',
        label: 'After Effect',
        category: 'courses',
        subcategory: 'design',
        component: () => import('./courses/design/AfterEffect/AfterEffectContent').then(mod => mod.default),
    },
    {
        id: 'illustrator',
        path: '/illustrator',
        label: 'Ilustrator',
        category: 'courses',
        subcategory: 'design',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'figma',
        path: '/Figma',
        label: 'Figma',
        category: 'courses',
        subcategory: 'design',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'javaScript',
        path: '/JavaScript',
        label: 'JavaScript',
        category: 'courses',
        subcategory: 'development',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'react/Next.js',
        path: '/React/Next.js',
        label: 'React/Next.js',
        category: 'courses',
        subcategory: 'development',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'python',
        path: '/Python',
        label: 'Python',
        category: 'courses',
        subcategory: 'development',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'node.js',
        path: '/Node.js',
        label: 'Node.js',
        category: 'courses',
        subcategory: 'development',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Базы данных',
        path: '/Базы данных',
        label: 'Базы данных',
        category: 'courses',
        subcategory: 'development',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Excel',
        path: '/Excel',
        label: 'Excel',
        category: 'courses',
        subcategory: 'analytics',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Google Analytics',
        path: '/Google Analytics',
        label: 'Google Analytics',
        category: 'courses',
        subcategory: 'analytics',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'SQL для аналитиков',
        path: '/SQL для аналитиков',
        label: 'SQL для аналитиков',
        category: 'courses',
        subcategory: 'analytics',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Tableau',
        path: '/Tableau',
        label: 'Tableau',
        category: 'courses',
        subcategory: 'analytics',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'SEO',
        path: '/SEO',
        label: 'SEO',
        category: 'courses',
        subcategory: 'marketing',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'SMM',
        path: '/SMM',
        label: 'SMM',
        category: 'courses',
        subcategory: 'marketing',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Копирайтинг',
        path: '/Копирайтинг',
        label: 'Копирайтинг',
        category: 'courses',
        subcategory: 'marketing',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
    {
        id: 'Контекстная реклама',
        path: '/Контекстная реклама',
        label: 'Контекстная реклама',
        category: 'courses',
        subcategory: 'marketing',
        component: () => import('./stub/stub').then(mod => mod.default),
    },
];


export function getRouteById(id: string): RouteConfig | undefined {
    return routes.find(route => route.id === id);
}

export function getRouteByPath(path: string): RouteConfig | undefined {
    return routes.find(route => route.path === path);
}

export function getRoutesByCategory(category: string): RouteConfig[] {
    return routes.filter(route => route.category === category);
}

export function getRoutesBySubcategory(category: string, subcategory: string): RouteConfig[] {
    return routes.filter(route => route.category === category && route.subcategory === subcategory);
}