module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo.258df9ce.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 159,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Search.ed3bd6e8.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 15,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areRoutesInitialized",
    ()=>areRoutesInitialized,
    "getAllRoutes",
    ()=>getAllRoutes,
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
    "initializeRoutes",
    ()=>initializeRoutes,
    "waitForRoutes",
    ()=>waitForRoutes
]);
// Реестр компонентов
const componentRegistry = {
    home: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/default_page/Default_page.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    photoshop: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'after-effect': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    illustrator: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    figma: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    javaScript: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'react/Next.js': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    python: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'node.js': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'Базы данных': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    Excel: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'Google Analytics': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'SQL для аналитиков': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    Tableau: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    SEO: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    SMM: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    Копирайтинг: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default),
    'Контекстная реклама': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default)
};
let routes = [];
let isInitialized = false;
let initializationPromise = null;
async function initializeRoutes() {
    if (isInitialized) return;
    if (initializationPromise) {
        return initializationPromise;
    }
    initializationPromise = (async ()=>{
        try {
            const response = await fetch('/api/routes'); // или ваш URL
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const backendRoutes = await response.json();
            routes = backendRoutes.map((backendRoute)=>{
                const componentLoader = componentRegistry[backendRoute.id];
                if (!componentLoader) {
                    console.warn(`Компонент для роута "${backendRoute.id}" не найден в реестре, используем заглушку`);
                }
                return {
                    ...backendRoute,
                    component: componentLoader || (()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-ssr] (ecmascript, async loader)").then((mod)=>mod.default))
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
function areRoutesInitialized() {
    return isInitialized;
}
function waitForRoutes() {
    if (isInitialized) return Promise.resolve();
    if (initializationPromise) return initializationPromise;
    return Promise.reject(new Error('initializeRoutes() was not called'));
}
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
    return routes.filter((route)=>route.category === category && route.subcategories === subcategory);
}
function getAllRoutes() {
    return routes;
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content_keys",
    ()=>Content_keys,
    "useAccordion",
    ()=>useAccordion,
    "useAccordionChild",
    ()=>useAccordionChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const Content_keys = {
    coures: {
        design: {
            photoshop: 'photoshop'
        }
    }
};
const useAccordionChild = (initialOpen = null, behavior = 'exclusive')=>{
    const [openSectionsChild, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/courses_are_not_active.d6235eb6.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_courses.a530fbe9.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_are_not_active.39c844ed.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_active.eeb22089.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Products_are_not_active.763784f1.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_products.b7407d53.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_are_not_active.2ba9f92b.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_active.44ec9241.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconConfig",
    ()=>iconConfig,
    "useIconHover",
    ()=>useIconHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
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
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    services: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Books: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Goods: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }
};
const useIconHover = (initialStates = {
    courses: false,
    services: false,
    Books: false,
    Goods: false
})=>{
    const [hoverStates, setHoverStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialStates);
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
"[project]/Desktop/React/top-app/owl-top-front/app/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiRequest",
    ()=>apiRequest
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
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
"[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuAPI",
    ()=>menuAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/client.ts [app-ssr] (ecmascript)");
;
const menuAPI = {
    // Получить структуру меню для аккордеона
    getFullMenu: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/menu');
    },
    getFullMen: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('');
    },
    getRoutes: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/routes');
    },
    // Получить данные конкретного курса
    getCourse: async (slug)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/courses/${slug}`);
    }
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MenuContent({ isMobile, currentRouteId, onCourseClick }) {
    /*Хуки для анимаций и работы*/ const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    /*Хуки для работы смены URL*/ const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    /*Хуки для данных акардеона*/ const designCourses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'design');
    const developmentCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'development');
    const analyticsCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'analytics');
    const marketingCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'marketing');
    const [menuItem, setMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const coursesData = menuItem.find((item)=>item.type === 'courses');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuAPI"].getFullMenu().then((data)=>{
            setMenuItem(data);
        });
    }, []);
    const useCategoriesObject = (categories)=>{
        return categories?.reduce((acc, cat)=>{
            acc[cat.name] = cat;
            return acc;
        }, {});
    };
    // Внутри компонента (после загрузки данных):
    const categoriesObj = useCategoriesObject(coursesData?.categories);
    /*Хуки для Модалки*/ const containerClass = isMobile ? 'mobile-accordions' : 'list-of-services';
    const accordionClass = isMobile ? 'mobile-accordion-item' : '';
    const contentClass = isMobile ? 'mobile-content' : 'accordion-content-coures';
    /*скрипт изменения URL*/ const handlecourseClick = (courseId)=>{
        console.log('Переключаемся на курс:', courseId);
        const params = new URLSearchParams(searchParams.toString());
        params.set('content', courseId);
        router.replace(`/?${params.toString()}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list-of-services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `coures ${openSections.courses ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('courses'),
                onMouseLeave: ()=>handleMouseLeave('courses'),
                onClick: ()=>toggleSection('courses'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : hoverStates.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].courses.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item)=>item.type === 'courses')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.courses ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.design ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('design'),
                                children: categoriesObj?.['Дизайн']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.design ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: designCourses.length > 0 ? designCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: categoriesObj?.['Дизайн']?.subcategories.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: sub.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 53
                                                    }, this))
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 102,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 113,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.development ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('development'),
                                children: categoriesObj?.['Разработка']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.development ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: developmentCoures.length > 0 ? developmentCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 130,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 139,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('analytics'),
                                children: categoriesObj?.['Аналитика']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: analyticsCoures.length > 0 ? analyticsCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 155,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 164,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 150,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.marketing ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('marketing'),
                                children: categoriesObj?.['Маркетинг']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 171,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.marketing ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: marketingCoures.length > 0 ? marketingCoures.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 49
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 181,
                                                columnNumber: 45
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 190,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `services ${openSections.services ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('services'),
                onMouseLeave: ()=>handleMouseLeave('services'),
                onClick: ()=>toggleSection('services'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : hoverStates.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].services.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item)=>item.type === 'services')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 209,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.services ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.cloud_storage ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('cloud_storage'),
                                children: "ОБЛАЧНЫЕ ХРАНИЛИЩА"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.cloud_storage ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Drive"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 221,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Dropbox"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 222,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Яндекс.Диск"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 223,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 220,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 219,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 218,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.communication ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('communication'),
                                children: "КОММУНИКАЦИЯ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Slack для команд"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 235,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Zoom Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 236,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Notion"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 234,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 233,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 232,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('data_analytics'),
                                children: "АНАЛИТИКА ДАННЫХ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Data Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 249,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Mixpanel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 250,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Hotjar"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 251,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 248,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 247,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 246,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 212,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 211,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Books ${openSections.Books ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Books'),
                onMouseLeave: ()=>handleMouseLeave('Books'),
                onClick: ()=>toggleSection('Books'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : hoverStates.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Books.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 264,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item)=>item.type === 'Books')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Books ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.soft_skills ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('soft_skills'),
                                children: "СОФТ СКИЛЛЫ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 274,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.soft_skills ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"7 навыков высокоэффективных людей"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 281,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Как работать 4 часа в неделю"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 282,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Атомные привычки"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 283,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 280,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 279,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 278,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('business_and_startups'),
                                children: "БИЗНЕС И СТАРТАПЫ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 288,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Стартап за $100"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 295,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Бизнес с нуля"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 296,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Метод бережливого стартапа"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 297,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 294,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 293,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 292,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 273,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 272,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Goods ${openSections.Goods ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Goods'),
                onMouseLeave: ()=>handleMouseLeave('Goods'),
                onClick: ()=>toggleSection('Goods'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : hoverStates.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconConfig"].Goods.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item)=>item.type === 'Goods')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 316,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Goods ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.subrcriptions_and_licenses ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('subrcriptions_and_licenses'),
                                children: "ПОДПИСКИ И ЛИЦЕНЗИИ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Годовые лицензии ПО"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 328,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Подписка на сервисы"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 329,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Доступ к библиотекам"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 330,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 327,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 326,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 325,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('mersch_and_branding'),
                                children: "МЕРЧ И БРЕНДИНГ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 335,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Футболки с логотипом"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 342,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Кружки для программистов"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 343,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Стикеры с мемами про код"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 344,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 341,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 340,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 339,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 320,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 319,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 318,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close.702dc2c8.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu.018e57d4.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentRouteId = searchParams.get('content') || 'home';
    const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-conteiner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            required: true,
                            maxLength: 50,
                            className: "search",
                            id: "site_search",
                            placeholder: "Поиск..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                            lineNumber: 52,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "search-button",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "Icon-Search",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu-toggle",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    onClick: ()=>setIsMobileMenuOpen(true),
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                    alt: "Меню"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mobile-menu-modal ${isMobileMenuOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isMobile: true,
                        currentRouteId: currentRouteId,
                        onCourseClick: handlecourseClick
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        onClick: ()=>setIsMobileMenuOpen(false),
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isMobile: false,
                currentRouteId: currentRouteId,
                onCourseClick: handlecourseClick
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37ef0b92._.js.map