module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo.258df9ce.svg");}),
"[project]/app/src/components/Header/public/Logo.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 159,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Search.ed3bd6e8.svg");}),
"[project]/app/src/components/Header/public/Search.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 15,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteById",
    ()=>getRouteById,
    "getRouteByLabel",
    ()=>getRouteByLabel,
    "getRouteByPath",
    ()=>getRouteByPath,
    "getRoutesByCategory",
    ()=>getRoutesByCategory,
    "getRoutesBySubcategory",
    ()=>getRoutesBySubcategory,
    "routes",
    ()=>routes
]);
const routes = [
    {
        id: 'home',
        path: '/home',
        label: 'home',
        category: '',
        subcategory: '',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/default_page/Default_page.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'photoshop',
        path: '/photoshop',
        label: 'Photoshop',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/courses/design/photoshop/PhotoshopContent.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'after-effect',
        path: '/after-effect',
        label: 'After Effect',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'illustrator',
        path: '/illustrator',
        label: 'Ilustrator',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'figma',
        path: '/Figma',
        label: 'Figma',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'javaScript',
        path: '/JavaScript',
        label: 'JavaScript',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'react/Next.js',
        path: '/React/Next.js',
        label: 'React/Next.js',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'python',
        path: '/Python',
        label: 'Python',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'node.js',
        path: '/Node.js',
        label: 'Node.js',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Базы данных',
        path: '/Базы данных',
        label: 'Базы данных',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Excel',
        path: '/Excel',
        label: 'Excel',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Google Analytics',
        path: '/Google Analytics',
        label: 'Google Analytics',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SQL для аналитиков',
        path: '/SQL для аналитиков',
        label: 'SQL для аналитиков',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Tableau',
        path: '/Tableau',
        label: 'Tableau',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SEO',
        path: '/SEO',
        label: 'SEO',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SMM',
        path: '/SMM',
        label: 'SMM',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Копирайтинг',
        path: '/Копирайтинг',
        label: 'Копирайтинг',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Контекстная реклама',
        path: '/Контекстная реклама',
        label: 'Контекстная реклама',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
    }
];
function getRouteById(id) {
    return routes.find((route)=>route.id === id);
}
function getRouteByPath(path) {
    return routes.find((route)=>route.path === path);
}
function getRouteByLabel(label) {
    return routes.find((route)=>route.label === label);
}
function getRoutesByCategory(category) {
    return routes.filter((route)=>route.category === category);
}
function getRoutesBySubcategory(category, subcategory) {
    return routes.filter((route)=>route.category === category && route.subcategory === subcategory);
}
}),
"[project]/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content_keys",
    ()=>Content_keys,
    "useAccordion",
    ()=>useAccordion,
    "useAccordionChild",
    ()=>useAccordionChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const Content_keys = {
    coures: {
        design: {
            photoshop: 'photoshop'
        }
    }
};
const useAccordionChild = (initialOpen = null, behavior = 'exclusive')=>{
    const [openSectionsChild, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        design: initialOpen === 'design',
        development: initialOpen === 'development',
        analytics: initialOpen === 'analytics',
        marketing: initialOpen === 'marketing',
        cloud_storage: initialOpen === 'cloud_storage',
        communication: initialOpen === 'communication',
        data_analytics: initialOpen === 'data_analytics',
        soft_skills: initialOpen === 'soft_skills',
        business_and_startups: initialOpen === 'business_and_startups',
        subrcriptions_and_licenses: initialOpen === 'subrcriptions_and_licenses',
        mersch_and_branding: initialOpen === 'mersch_and_branding'
    });
    const toggleSectionChild = (sectionName)=>{
        setOpenSections((prev)=>{
            if (behavior === 'exclusive') {
                const newState = {
                    design: false,
                    development: false,
                    analytics: false,
                    marketing: false,
                    cloud_storage: false,
                    communication: false,
                    data_analytics: false,
                    soft_skills: false,
                    business_and_startups: false,
                    subrcriptions_and_licenses: false,
                    mersch_and_branding: false
                };
                newState[sectionName] = !prev[sectionName];
                return newState;
            }
            return {
                ...prev,
                [sectionName]: !prev[sectionName]
            };
        });
    };
    return {
        openSectionsChild,
        toggleSectionChild
    };
};
const useAccordion = (initialOpen = null, behavior = 'exclusive')=>{
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        courses: initialOpen === 'courses',
        services: initialOpen === 'services',
        Books: initialOpen === 'Books',
        Goods: initialOpen === 'Goods'
    });
    const toggleSection = (sectionName)=>{
        setOpenSections((prev)=>{
            if (behavior === 'exclusive') {
                const newState = {
                    courses: false,
                    services: false,
                    Books: false,
                    Goods: false
                };
                newState[sectionName] = !prev[sectionName];
                return newState;
            }
            return {
                ...prev,
                [sectionName]: !prev[sectionName]
            };
        });
    };
    return {
        openSections,
        toggleSection
    };
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/courses_are_not_active.d6235eb6.svg");}),
"[project]/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_courses.a530fbe9.svg");}),
"[project]/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_are_not_active.39c844ed.svg");}),
"[project]/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_active.eeb22089.svg");}),
"[project]/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Products_are_not_active.763784f1.svg");}),
"[project]/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_products.b7407d53.svg");}),
"[project]/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_are_not_active.2ba9f92b.svg");}),
"[project]/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_active.44ec9241.svg");}),
"[project]/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconConfig",
    ()=>iconConfig,
    "useIconHover",
    ()=>useIconHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
const iconConfig = {
    courses: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    services: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Books: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Goods: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }
};
const useIconHover = (initialStates = {
    courses: false,
    services: false,
    Books: false,
    Goods: false
})=>{
    const [hoverStates, setHoverStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStates);
    const handleMouseEnter = (blockName)=>{
        setHoverStates((prev)=>({
                ...prev,
                [blockName]: true
            }));
    };
    const handleMouseLeave = (blockName)=>{
        setHoverStates((prev)=>({
                ...prev,
                [blockName]: false
            }));
    };
    return {
        hoverStates,
        handleMouseEnter,
        handleMouseLeave
    };
};
}),
"[project]/app/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiRequest",
    ()=>apiRequest
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
async function apiRequest(endpint, options = {}) {
    const url = `${API_BASE_URL}${endpint}`;
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };
    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    };
    const response = await fetch(url, config);
    if (!response.ok) {
        const errorData = await response.json().catch(()=>({}));
        throw new Error(errorData.message || `Ошибка запроса: ${response.status} ${response.statusText}`);
    }
    return response.json();
}
}),
"[project]/app/src/components/Header/scripts/menu-connection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "couresAPI",
    ()=>couresAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/client.ts [app-ssr] (ecmascript)");
;
const couresAPI = {
    getMenu: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/courses/menu');
    }
};
}),
"[project]/app/src/components/Header/MenuContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$menu$2d$connection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/scripts/menu-connection.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MenuContent({ isMobile, currentRouteId, onCourseClick }) {
    const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const designCourses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'design');
    const developmentCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'development');
    const analyticsCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'analytics');
    const marketingCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'marketing');
    const containerClass = isMobile ? 'mobile-accordions' : 'list-of-services';
    const accordionClass = isMobile ? 'mobile-accordion-item' : '';
    const contentClass = isMobile ? 'mobile-content' : 'accordion-content-coures';
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMenu = async ()=>{
            try {
                setLoading(true);
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$menu$2d$connection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["couresAPI"].getMenu();
                setMenu(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
                console.error('Ошибка загрузки меню курсов:', err);
            } finally{
                setLoading(false);
            }
        };
        fetchMenu();
    }, []); // Пустой массив = выполнить один раз при монтировании
    const handlecourseClick = (courseId)=>{
        console.log('Переключаемся на курс:', courseId);
        const params = new URLSearchParams(searchParams.toString());
        params.set('content', courseId);
        router.replace(`/?${params.toString()}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list-of-services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `coures ${openSections.courses ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('courses'),
                onMouseLeave: ()=>handleMouseLeave('courses'),
                onClick: ()=>toggleSection('courses'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : hoverStates.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.default
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Курсы"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.courses ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.design ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('design'),
                                children: "ДИЗАЙН"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.design ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: designCourses.length > 0 ? designCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 98,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 107,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 94,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.development ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('development'),
                                children: "РАЗРАБОТКА"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 114,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.development ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: developmentCoures.length > 0 ? developmentCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 124,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 133,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('analytics'),
                                children: "АНАЛИТИКА"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: analyticsCoures.length > 0 ? analyticsCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 149,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 158,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 145,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.marketing ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('marketing'),
                                children: "МАРКЕТИНГ"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.marketing ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: marketingCoures.length > 0 ? marketingCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 175,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 184,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 171,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `services ${openSections.services ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('services'),
                onMouseLeave: ()=>handleMouseLeave('services'),
                onClick: ()=>toggleSection('services'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.services ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : hoverStates.services ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.default
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Сервисы"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.services ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.cloud_storage ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('cloud_storage'),
                                children: "ОБЛАЧНЫЕ ХРАНИЛИЩА"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 208,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.cloud_storage ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Drive"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 215,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Dropbox"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 216,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Яндекс.Диск"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 217,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 214,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.communication ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('communication'),
                                children: "КОММУНИКАЦИЯ"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 222,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Slack для команд"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 229,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Zoom Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 230,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Notion"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 231,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 228,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 227,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 226,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('data_analytics'),
                                children: "АНАЛИТИКА ДАННЫХ"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Data Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 243,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Mixpanel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 244,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Hotjar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 245,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 242,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 241,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 240,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Books ${openSections.Books ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Books'),
                onMouseLeave: ()=>handleMouseLeave('Books'),
                onClick: ()=>toggleSection('Books'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : hoverStates.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.default
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Книги"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Books ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "accord-spis-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `spis-item ${openSectionsChild.soft_skills ? 'active' : ''}`,
                                    onClick: ()=>toggleSectionChild('soft_skills'),
                                    children: "СОФТ СКИЛЛЫ"
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 268,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `accordion-content-in-spis ${openSectionsChild.soft_skills ? 'open' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accordion-content-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "accord-spis-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"7 навыков высокоэффективных людей"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"Как работать 4 часа в неделю"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"Атомные привычки"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 272,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`,
                                    onClick: ()=>toggleSectionChild('business_and_startups'),
                                    children: "БИЗНЕС И СТАРТАПЫ"
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 282,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accordion-content-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "accord-spis-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"Стартап за $100"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"Бизнес с нуля"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: '"Метод бережливого стартапа"'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 288,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 287,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 286,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "accord-spis-2"
                        }, void 0, false, {
                            fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                            lineNumber: 297,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 266,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Goods ${openSections.Goods ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Goods'),
                onMouseLeave: ()=>handleMouseLeave('Goods'),
                onClick: ()=>toggleSection('Goods'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : hoverStates.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.default
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Товары"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Goods ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.subrcriptions_and_licenses ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('subrcriptions_and_licenses'),
                                children: "ПОДПИСКИ И ЛИЦЕНЗИИ"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 316,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Годовые лицензии ПО"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 323,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Подписка на сервисы"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 324,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Доступ к библиотекам"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 325,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 322,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 321,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 320,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('mersch_and_branding'),
                                children: "МЕРЧ И БРЕНДИНГ"
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 330,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Футболки с логотипом"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 337,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Кружки для программистов"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 338,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Стикеры с мемами про код"
                                            }, void 0, false, {
                                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 339,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 336,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 334,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 315,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/MenuContent.tsx",
                lineNumber: 313,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/src/components/Header/MenuContent.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/src/components/Header/public/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close.702dc2c8.svg");}),
"[project]/app/src/components/Header/public/close.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/close.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/close.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu.018e57d4.svg");}),
"[project]/app/src/components/Header/public/menu.svg.mjs { IMAGE => \"[project]/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/app/src/components/Header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Logo.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/Search.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/MenuContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/close.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/close.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/src/components/Header/public/menu.svg.mjs { IMAGE => "[project]/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Header() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentRouteId = searchParams.get('content') || 'home';
    const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            setIsMobileView(window.innerWidth < 941);
            if (window.innerWidth >= 941) {
                setIsMobileMenuOpen(false);
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return ()=>window.removeEventListener('resize', checkScreenSize);
    }, []);
    const handlecourseClick = (courseId)=>{
        console.log('Переключаемся на курс:', courseId);
        const params = new URLSearchParams(searchParams.toString());
        params.set('content', courseId);
        router.replace(`/?${params.toString()}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                }, void 0, false, {
                    fileName: "[project]/app/src/components/Header/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/Header.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-conteiner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            maxLength: 50,
                            className: "search",
                            id: "site_search",
                            placeholder: "Поиск..."
                        }, void 0, false, {
                            fileName: "[project]/app/src/components/Header/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "search-button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "Icon-Search",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                            }, void 0, false, {
                                fileName: "[project]/app/src/components/Header/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/src/components/Header/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/src/components/Header/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/Header.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu-toggle",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    onClick: ()=>setIsMobileMenuOpen(true),
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                    alt: "Меню"
                }, void 0, false, {
                    fileName: "[project]/app/src/components/Header/Header.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/Header.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-modal ${isMobileMenuOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isMobile: true,
                        currentRouteId: currentRouteId,
                        onCourseClick: handlecourseClick
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        onClick: ()=>setIsMobileMenuOpen(false),
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Header/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Header/Header.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isMobile: false,
                currentRouteId: currentRouteId,
                onCourseClick: handlecourseClick
            }, void 0, false, {
                fileName: "[project]/app/src/components/Header/Header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/src/components/Header/Header.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/src/components/Footer/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "OwlTop © 2020 - 2021 Все права защищены"
            }, void 0, false, {
                fileName: "[project]/app/src/components/Footer/Footer.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-bloc",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Пользовательское соглашение"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Footer/Footer.tsx",
                        lineNumber: 7,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Политика конфиденциальности"
                    }, void 0, false, {
                        fileName: "[project]/app/src/components/Footer/Footer.tsx",
                        lineNumber: 8,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/src/components/Footer/Footer.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/src/components/Footer/Footer.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Header/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/src/components/Footer/Footer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ru",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "OWL top"
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a49cca82._.js.map