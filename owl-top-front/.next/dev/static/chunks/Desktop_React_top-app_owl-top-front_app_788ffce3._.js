(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo.258df9ce.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Search.ed3bd6e8.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuAPI",
    ()=>menuAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/client.ts [app-client] (ecmascript)");
;
const menuAPI = {
    // Получить структуру меню для аккордеона
    getFullMenu: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/menu');
    },
    getFullMen: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('');
    },
    getRoutes: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/routes');
    },
    // Получить данные конкретного курса
    getCourse: async (slug)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/courses/${slug}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-client] (ecmascript)");
;
// Реестр компонентов
const componentRegistry = {
    home: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/default_page/Default_page.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    photoshop: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'after-effect': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    illustrator: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    figma: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    javaScript: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'react/Next.js': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    python: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'node.js': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'Базы данных': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    Excel: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'Google Analytics': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'SQL для аналитиков': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    Tableau: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    SEO: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    SMM: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    Копирайтинг: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default),
    'Контекстная реклама': ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
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
            const backendRoutes = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuAPI"].getRoutes();
            routes = backendRoutes.map((backendRoute)=>{
                const componentLoader = componentRegistry[backendRoute.id];
                if (!componentLoader) {
                    console.warn(`Компонент для роута "${backendRoute.id}" не найден в реестре`);
                }
                return {
                    ...backendRoute,
                    component: componentLoader || (()=>__turbopack_context__.A("[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default))
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content_keys",
    ()=>Content_keys,
    "useAccordion",
    ()=>useAccordion,
    "useAccordionChild",
    ()=>useAccordionChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const Content_keys = {
    coures: {
        design: {
            photoshop: 'photoshop'
        }
    }
};
const useAccordionChild = (t0, t1)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "2a053154ad2892154813a0deca822691ddb3669e31162a3f00761fbbe12c71d6") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a053154ad2892154813a0deca822691ddb3669e31162a3f00761fbbe12c71d6";
    }
    const initialOpen = t0 === undefined ? null : t0;
    const behavior = t1 === undefined ? "exclusive" : t1;
    const t2 = initialOpen === "design";
    const t3 = initialOpen === "development";
    const t4 = initialOpen === "analytics";
    const t5 = initialOpen === "marketing";
    const t6 = initialOpen === "cloud_storage";
    const t7 = initialOpen === "communication";
    const t8 = initialOpen === "data_analytics";
    const t9 = initialOpen === "soft_skills";
    const t10 = initialOpen === "business_and_startups";
    const t11 = initialOpen === "subrcriptions_and_licenses";
    const t12 = initialOpen === "mersch_and_branding";
    let t13;
    if ($[1] !== t10 || $[2] !== t11 || $[3] !== t12 || $[4] !== t2 || $[5] !== t3 || $[6] !== t4 || $[7] !== t5 || $[8] !== t6 || $[9] !== t7 || $[10] !== t8 || $[11] !== t9) {
        t13 = {
            design: t2,
            development: t3,
            analytics: t4,
            marketing: t5,
            cloud_storage: t6,
            communication: t7,
            data_analytics: t8,
            soft_skills: t9,
            business_and_startups: t10,
            subrcriptions_and_licenses: t11,
            mersch_and_branding: t12
        };
        $[1] = t10;
        $[2] = t11;
        $[3] = t12;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    const [openSectionsChild, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t13);
    let t14;
    if ($[13] !== behavior) {
        t14 = (sectionName)=>{
            setOpenSections((prev)=>{
                if (behavior === "exclusive") {
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
        $[13] = behavior;
        $[14] = t14;
    } else {
        t14 = $[14];
    }
    const toggleSectionChild = t14;
    let t15;
    if ($[15] !== openSectionsChild || $[16] !== toggleSectionChild) {
        t15 = {
            openSectionsChild,
            toggleSectionChild
        };
        $[15] = openSectionsChild;
        $[16] = toggleSectionChild;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    return t15;
};
_s(useAccordionChild, "+tL9AX6/RvExGogrj4Eb74CP7Ac=");
const useAccordion = (t0, t1)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "2a053154ad2892154813a0deca822691ddb3669e31162a3f00761fbbe12c71d6") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a053154ad2892154813a0deca822691ddb3669e31162a3f00761fbbe12c71d6";
    }
    const initialOpen = t0 === undefined ? null : t0;
    const behavior = t1 === undefined ? "exclusive" : t1;
    const t2 = initialOpen === "courses";
    const t3 = initialOpen === "services";
    const t4 = initialOpen === "Books";
    const t5 = initialOpen === "Goods";
    let t6;
    if ($[1] !== t2 || $[2] !== t3 || $[3] !== t4 || $[4] !== t5) {
        t6 = {
            courses: t2,
            services: t3,
            Books: t4,
            Goods: t5
        };
        $[1] = t2;
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    if ($[6] !== behavior) {
        t7 = (sectionName)=>{
            setOpenSections((prev)=>{
                if (behavior === "exclusive") {
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
        $[6] = behavior;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const toggleSection = t7;
    let t8;
    if ($[8] !== openSections || $[9] !== toggleSection) {
        t8 = {
            openSections,
            toggleSection
        };
        $[8] = openSections;
        $[9] = toggleSection;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
};
_s1(useAccordion, "Jc7VgNSpIZz8ffrOptVaebNOEp4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/courses_are_not_active.d6235eb6.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_courses.a530fbe9.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_are_not_active.39c844ed.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_active.eeb22089.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Products_are_not_active.763784f1.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_products.b7407d53.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_are_not_active.2ba9f92b.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_active.44ec9241.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconConfig",
    ()=>iconConfig,
    "useIconHover",
    ()=>useIconHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var _s = __turbopack_context__.k.signature();
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
const iconConfig = {
    courses: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    services: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Books: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Goods: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }
};
const useIconHover = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2a54f3b0943fb2cbe62cbca20bc347cd5ccd0346541fce30f51c7b45b395fbdd") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2a54f3b0943fb2cbe62cbca20bc347cd5ccd0346541fce30f51c7b45b395fbdd";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {
            courses: false,
            services: false,
            Books: false,
            Goods: false
        } : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const initialStates = t1;
    const [hoverStates, setHoverStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStates);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (blockName)=>{
            setHoverStates((prev)=>({
                    ...prev,
                    [blockName]: true
                }));
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleMouseEnter = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (blockName_0)=>{
            setHoverStates((prev_0)=>({
                    ...prev_0,
                    [blockName_0]: false
                }));
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleMouseLeave = t3;
    let t4;
    if ($[5] !== hoverStates) {
        t4 = {
            hoverStates,
            handleMouseEnter,
            handleMouseLeave
        };
        $[5] = hoverStates;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
};
_s(useIconHover, "7IZH+q4gWH0RnpOe2lPU97Qws3g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function MenuContent({ isMobile, currentRouteId, onCourseClick }) {
    _s();
    /*Хуки для анимаций и работы*/ const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    /*Хуки для работы смены URL*/ const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    /*Хуки для данных акардеона*/ // Курсы
    const [designCourses, setDesignCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [developmentCourses, setDevelopmentCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analyticsCourses, useAnalyticsCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [marketingCourses, setMarketingCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Сервисы
    const [storageServise, setStorageServise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [communicationServise, setCommunicationServise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analyticsServise, setAnalyticsServise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Книги
    const [skillsBooks, setSkillsBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [startupsBooks, setStartupsBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Товары
    const [subscriptionsGoods, setSubscriptionsGoods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [merchGoods, setMerchGoods] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuItem, setMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const coursesData = menuItem.find((item)=>item.type === 'courses');
    const useCategoriesObject = (categories)=>{
        return categories?.reduce((acc, cat)=>{
            acc[cat.name] = cat;
            return acc;
        }, {});
    };
    const categoriesObj = useCategoriesObject(coursesData?.categories);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuContent.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuAPI"].getFullMenu().then({
                "MenuContent.useEffect": (data)=>{
                    setMenuItem(data);
                }
            }["MenuContent.useEffect"]);
        }
    }["MenuContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuContent.useEffect": ()=>{
            var _s = __turbopack_context__.k.signature();
            const loadCourses = {
                "MenuContent.useEffect.loadCourses": async ()=>{
                    _s();
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areRoutesInitialized"])()) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForRoutes"])();
                    }
                    // Курсы
                    setDesignCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Дизайн'));
                    setDevelopmentCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Разработка'));
                    useAnalyticsCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Аналитика'));
                    setMarketingCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Маркетинг'));
                    // Сервисы
                    setStorageServise((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('services', 'ОБЛАЧНЫЕ ХРАНИЛИЩА'));
                    setCommunicationServise((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('services', 'КОММУНИКАЦИЯ'));
                    setAnalyticsServise((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('services', 'АНАЛИТИКА ДАННЫХ'));
                    // Книги
                    setSkillsBooks((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('Books', 'СОФТ СКИЛЛЫ'));
                    setStartupsBooks((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('Books', 'БИЗНЕС И СТАРТАПЫ'));
                    // Товары
                    setSubscriptionsGoods((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('Goods', 'ПОДПИСКИ И ЛИЦЕНЗИИ'));
                    setMerchGoods((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('Goods', 'МЕРЧ И БРЕНДИНГ'));
                    setLoading(false);
                }
            }["MenuContent.useEffect.loadCourses"];
            _s(loadCourses, "BY/Fw8FRHeKejGfaKG2+t3XaUYA=", false, {
                "MenuContent.useEffect": function() {
                    return [
                        useAnalyticsCourses
                    ];
                }
            }["MenuContent.useEffect"]);
            loadCourses();
        }
    }["MenuContent.useEffect"], []);
    /*Хуки для Модалки*/ const containerClass = isMobile ? 'mobile-accordions' : 'list-of-services';
    const accordionClass = isMobile ? 'mobile-accordion-item' : '';
    const contentClass = isMobile ? 'mobile-content' : 'accordion-content-courses';
    /*скрипт изменения URL*/ const handlecourseClick = (courseId)=>{
        console.log('Переключаемся на курс:', courseId);
        const params = new URLSearchParams(searchParams.toString());
        params.set('content', courseId);
        router.replace(`/?${params.toString()}`, {
            scroll: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list-of-services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `coures ${openSections.courses ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('courses'),
                onMouseLeave: ()=>handleMouseLeave('courses'),
                onClick: ()=>toggleSection('courses'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : hoverStates.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_0)=>item_0.type === 'courses')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.courses ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.design ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('design'),
                                children: categoriesObj?.['Дизайн']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.design ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: designCourses.length > 0 ? designCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 53
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 127,
                                                columnNumber: 93
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 131,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 125,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.development ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('development'),
                                children: categoriesObj?.['Разработка']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.development ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: developmentCourses.length > 0 ? developmentCourses.map((course_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_0.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_0.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_0.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_0.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 143,
                                                columnNumber: 105
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 145,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('analytics'),
                                children: categoriesObj?.['Аналитика']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: analyticsCourses.length > 0 ? analyticsCourses.map((course_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_1.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_1.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_1.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_1.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 156,
                                                columnNumber: 101
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 158,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 154,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 152,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.marketing ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('marketing'),
                                children: categoriesObj?.['Маркетинг']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.marketing ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: marketingCourses.length > 0 ? marketingCourses.map((course_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_2.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_2.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_2.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_2.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 170,
                                                columnNumber: 101
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 172,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 167,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 118,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `services ${openSections.services ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('services'),
                onMouseLeave: ()=>handleMouseLeave('services'),
                onClick: ()=>toggleSection('services'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : hoverStates.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_1)=>item_1.type === 'services')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.services ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.cloud_storage ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('cloud_storage'),
                                children: "ОБЛАЧНЫЕ ХРАНИЛИЩА"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 187,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.cloud_storage ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: storageServise.length > 0 ? storageServise.map((course_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_3.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_3.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_3.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_3.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 192,
                                                columnNumber: 97
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 195,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 191,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 190,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 189,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.communication ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('communication'),
                                children: "КОММУНИКАЦИЯ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 200,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: communicationServise.length > 0 ? communicationServise.map((course_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_4.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_4.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_4.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_4.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 205,
                                                columnNumber: 109
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 208,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 204,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('data_analytics'),
                                children: "АНАЛИТИКА ДАННЫХ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 213,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: analyticsServise.length > 0 ? analyticsServise.map((course_5)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_5.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_5.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_5.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_5.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 218,
                                                columnNumber: 101
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 221,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 217,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 216,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 215,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 186,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Books ${openSections.Books ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Books'),
                onMouseLeave: ()=>handleMouseLeave('Books'),
                onClick: ()=>toggleSection('Books'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : hoverStates.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_2)=>item_2.type === 'Books')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 231,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Books ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.soft_skills ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('soft_skills'),
                                children: "СОФТ СКИЛЛЫ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.soft_skills ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: skillsBooks.length > 0 ? skillsBooks.map((course_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_6.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_6.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_6.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_6.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 241,
                                                columnNumber: 91
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 244,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 240,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('business_and_startups'),
                                children: "БИЗНЕС И СТАРТАПЫ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 249,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: startupsBooks.length > 0 ? startupsBooks.map((course_7)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_7.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_7.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_7.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_7.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 254,
                                                columnNumber: 95
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 257,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 253,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 252,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 251,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 235,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `Goods ${openSections.Goods ? 'active' : ''}`,
                onMouseEnter: ()=>handleMouseEnter('Goods'),
                onMouseLeave: ()=>handleMouseLeave('Goods'),
                onClick: ()=>toggleSection('Goods'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: openSections.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : hoverStates.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.default
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_3)=>item_3.type === 'Goods')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 268,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `accordion-content-coures ${openSections.Goods ? 'open' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accordion-content-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "accord-spis-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.subrcriptions_and_licenses ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('subrcriptions_and_licenses'),
                                children: "ПОДПИСКИ И ЛИЦЕНЗИИ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 273,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: subscriptionsGoods.length > 0 ? subscriptionsGoods.map((course_8)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_8.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_8.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_8.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_8.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 278,
                                                columnNumber: 105
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 281,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 276,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 275,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('mersch_and_branding'),
                                children: "МЕРЧ И БРЕНДИНГ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 286,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: merchGoods.length > 0 ? merchGoods.map((course_9)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `course-item ${currentRouteId === course_9.id ? 'active-course' : ''}`,
                                                onClick: ()=>handlecourseClick(course_9.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: course_9.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 53
                                                }, this)
                                            }, course_9.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 291,
                                                columnNumber: 89
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 294,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 290,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 289,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 288,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 272,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 271,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
        lineNumber: 110,
        columnNumber: 10
    }, this);
}
_s(MenuContent, "CN6+RtskawFynXOG7vdDolz0jD8=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = MenuContent;
var _c;
__turbopack_context__.k.register(_c, "MenuContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close.702dc2c8.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu.018e57d4.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/close.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "4f9b9b2345b16f2da68e4d15afe8513307233ccc5d301d38e869212d16d1050b") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4f9b9b2345b16f2da68e4d15afe8513307233ccc5d301d38e869212d16d1050b";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("content") || "home";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const currentRouteId = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Header[useEffect()]": ()=>{
                const checkScreenSize = {
                    "Header[useEffect() > checkScreenSize]": ()=>{
                        setIsMobileView(window.innerWidth < 941);
                        if (window.innerWidth >= 941) {
                            setIsMobileMenuOpen(false);
                        }
                    }
                }["Header[useEffect() > checkScreenSize]"];
                checkScreenSize();
                window.addEventListener("resize", checkScreenSize);
                return ()=>window.removeEventListener("resize", checkScreenSize);
            }
        })["Header[useEffect()]"];
        t2 = [];
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== router || $[6] !== searchParams) {
        t3 = ({
            "Header[handlecourseClick]": (courseId)=>{
                console.log("\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441:", courseId);
                const params = new URLSearchParams(searchParams.toString());
                params.set("content", courseId);
                router.replace(`/?${params.toString()}`, {
                    scroll: false
                });
            }
        })["Header[handlecourseClick]"];
        $[5] = router;
        $[6] = searchParams;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handlecourseClick = t3;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "logo-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 85,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            required: true,
            maxLength: 50,
            className: "search",
            id: "site_search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A..."
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search-conteiner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "search-button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "Icon-Search",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                        lineNumber: 99,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 99,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== isMobileView) {
        t7 = isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mobile-menu-toggle",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                onClick: {
                    "Header[<img>.onClick]": ()=>setIsMobileMenuOpen(true)
                }["Header[<img>.onClick]"],
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                alt: "\u041C\u0435\u043D\u044E"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 106,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 106,
            columnNumber: 26
        }, this);
        $[11] = isMobileView;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = `mobile-menu-modal ${isMobileMenuOpen ? "open" : ""}`;
    let t9;
    if ($[13] !== currentRouteId || $[14] !== handlecourseClick) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isMobile: true,
            currentRouteId: currentRouteId,
            onCourseClick: handlecourseClick
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[13] = currentRouteId;
        $[14] = handlecourseClick;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            onClick: {
                "Header[<img>.onClick]": ()=>setIsMobileMenuOpen(false)
            }["Header[<img>.onClick]"],
            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t8 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[17] = t8;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== currentRouteId || $[21] !== handlecourseClick || $[22] !== isMobileView) {
        t12 = !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isMobile: false,
            currentRouteId: currentRouteId,
            onCourseClick: handlecourseClick
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 144,
            columnNumber: 28
        }, this);
        $[20] = currentRouteId;
        $[21] = handlecourseClick;
        $[22] = isMobileView;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12 || $[26] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            children: [
                t4,
                t6,
                t7,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t7;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    return t13;
}
_s(Header, "DoYCSWeEe/QQv7MEjN5BUAUdxZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/RouteInitializer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RouteInitializer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "8ba7fa1c8c6b233ad452f5861002fc0986170aebc3889c1e1195b4e4e5e87a6e") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ba7fa1c8c6b233ad452f5861002fc0986170aebc3889c1e1195b4e4e5e87a6e";
    }
    const { children } = t0;
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "RouteInitializer[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeRoutes"])().then({
                    "RouteInitializer[useEffect() > (anonymous)()]": ()=>setIsReady(true)
                }["RouteInitializer[useEffect() > (anonymous)()]"]).catch({
                    "RouteInitializer[useEffect() > (anonymous)()]": (error)=>{
                        console.error("Failed to initialize routes:", error);
                        setIsReady(true);
                    }
                }["RouteInitializer[useEffect() > (anonymous)()]"]);
            }
        })["RouteInitializer[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isReady) {
        let t3;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "downloading-the-application",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "op",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Подождите сайт загружает все данные"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteInitializer.tsx",
                            lineNumber: 44,
                            columnNumber: 77
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Это займет некоторое время"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteInitializer.tsx",
                            lineNumber: 44,
                            columnNumber: 119
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteInitializer.tsx",
                    lineNumber: 44,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteInitializer.tsx",
                lineNumber: 44,
                columnNumber: 12
            }, this);
            $[3] = t3;
        } else {
            t3 = $[3];
        }
        return t3;
    }
    let t3;
    if ($[4] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[4] = children;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(RouteInitializer, "5KP9N2szXKqzhBqfXaLUZqdM1dk=");
_c = RouteInitializer;
var _c;
__turbopack_context__.k.register(_c, "RouteInitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_React_top-app_owl-top-front_app_788ffce3._.js.map