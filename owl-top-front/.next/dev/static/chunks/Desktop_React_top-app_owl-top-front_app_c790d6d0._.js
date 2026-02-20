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
            const response = await fetch('/routes'); // или ваш URL
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
    /*Хуки для данных акардеона*/ const [designCourses, setDesignCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [developmentCourses, setDevelopmentCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analyticsCourses, useAnalyticsCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [marketingCourses, setMarketingCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuItem, setMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const coursesData = menuItem.find((item)=>item.type === 'courses');
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
                    // Ждем инициализации роутов
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areRoutesInitialized"])()) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForRoutes"])();
                    }
                    // Теперь получаем данные теми же функциями, что и раньше!
                    setDesignCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Дизайн'));
                    setDevelopmentCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Разработка'));
                    useAnalyticsCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Аналитика'));
                    setMarketingCourses((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])('courses', 'Маркетинг'));
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
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_0)=>item_0.type === 'courses')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 90,
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
                                lineNumber: 100,
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
                                                    lineNumber: 108,
                                                    columnNumber: 53
                                                }, this)
                                            }, course.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 106,
                                                columnNumber: 93
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 110,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 103,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.development ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('development'),
                                children: categoriesObj?.['Разработка']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 116,
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
                                                    lineNumber: 123,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_0.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 122,
                                                columnNumber: 105
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 124,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('analytics'),
                                children: categoriesObj?.['Аналитика']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 129,
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
                                                    lineNumber: 136,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_1.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 135,
                                                columnNumber: 101
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 137,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.marketing ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('marketing'),
                                children: categoriesObj?.['Маркетинг']?.name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 143,
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
                                                    lineNumber: 150,
                                                    columnNumber: 49
                                                }, this)
                                            }, course_2.id, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 149,
                                                columnNumber: 101
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Курсы пока не добавлены"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                            lineNumber: 151,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 146,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 96,
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
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_1)=>item_1.type === 'services')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 159,
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
                                lineNumber: 166,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.cloud_storage ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Drive"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 171,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Dropbox"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 172,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Яндекс.Диск"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 173,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 170,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.communication ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('communication'),
                                children: "КОММУНИКАЦИЯ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 178,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.communication ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Slack для команд"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 183,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Zoom Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 184,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Notion"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 185,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 182,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 181,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 180,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.data_analytics ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('data_analytics'),
                                children: "АНАЛИТИКА ДАННЫХ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 190,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.data_analytics ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Google Data Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 195,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Mixpanel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 196,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Hotjar"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 197,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 194,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 193,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 192,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 164,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 163,
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
                        lineNumber: 206,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_2)=>item_2.type === 'Books')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 207,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 205,
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
                                lineNumber: 212,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.soft_skills ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"7 навыков высокоэффективных людей"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 217,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Как работать 4 часа в неделю"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 218,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Атомные привычки"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 219,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 216,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.business_and_startups ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('business_and_startups'),
                                children: "БИЗНЕС И СТАРТАПЫ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 224,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.business_and_startups ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Стартап за $100"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 229,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Бизнес с нуля"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 230,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '"Метод бережливого стартапа"'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 231,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 228,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 227,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 226,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 211,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 210,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 209,
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
                        lineNumber: 241,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: menuItem.find((item_3)=>item_3.type === 'Goods')?.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 240,
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
                                lineNumber: 247,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Годовые лицензии ПО"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 252,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Подписка на сервисы"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 253,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Доступ к библиотекам"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 254,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 251,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 249,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `spis-item ${openSectionsChild.mersch_and_branding ? 'active' : ''}`,
                                onClick: ()=>toggleSectionChild('mersch_and_branding'),
                                children: "МЕРЧ И БРЕНДИНГ"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? 'open' : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "accordion-content-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accord-spis-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Футболки с логотипом"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 264,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Кружки для программистов"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Стикеры с мемами про код"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                                lineNumber: 266,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                        lineNumber: 263,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                    lineNumber: 262,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                                lineNumber: 261,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 246,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 245,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
                lineNumber: 244,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/MenuContent.tsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
_s(MenuContent, "xgtobAzNHqCsX1bGljcGa7KHNqs=", true, function() {
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
    if ($[0] !== "3e72f9905dc638ae4743690aa895704cbc248ba45379ab2fd12bd37238abf7ef") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e72f9905dc638ae4743690aa895704cbc248ba45379ab2fd12bd37238abf7ef";
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
                lineNumber: 86,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 86,
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
            lineNumber: 93,
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
                            lineNumber: 100,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                        lineNumber: 100,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
                lineNumber: 100,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 100,
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
                lineNumber: 107,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/Header/Header.tsx",
            lineNumber: 107,
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
            lineNumber: 118,
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
            lineNumber: 127,
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
            lineNumber: 136,
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
            lineNumber: 145,
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
            lineNumber: 155,
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
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Sort-active.88627e78.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Sort-default.f55159d1.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Icon-course.41698689.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 70,
    height: 70,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Status.82fb8435.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 18,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/star-def.8789df6e.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/star-active.57e09428.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/arrow.0ac5fdca.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 6,
    height: 10,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon-user.47bf1ef8.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 30,
    height: 30,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/salary-estimate.1d2018d0.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 20,
    height: 20,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/check-mark.f6e95761.svg");}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 50,
    height: 50,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoshopContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Sort-default.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Icon-course.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/Status.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-def.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/star-active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/arrow.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/icon-user.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/salary-estimate.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/public/check-mark.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
;
;
;
function PhotoshopContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(103);
    if ($[0] !== "8df264f7fa8b2d588fdc819393db240b7cb115b5e606c0dceddb9ddb76158a22") {
        for(let $i = 0; $i < 103; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8df264f7fa8b2d588fdc819393db240b7cb115b5e606c0dceddb9ddb76158a22";
    }
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ratingReview, setRatingReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoverRatingReview, setHoverRatingReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentRatingReview = hoverRatingReview || ratingReview;
    const [ratingCourseEvaluation, setRatingCourseEvaluation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoverRatingCourseEvaluation, setHoverRatingCourseEvaluation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentRatingCourseEvaluation = hoverRatingCourseEvaluation || ratingCourseEvaluation;
    const [hoverRating, setHoverRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentRating = hoverRating || rating;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reviewsOpen, setReviewsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const reviewTextareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoResizeTextarea = _PhotoshopContentAutoResizeTextarea;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "PhotoshopContent[handleTextareaInput]": (event)=>{
                autoResizeTextarea(event.target);
            }
        })["PhotoshopContent[handleTextareaInput]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleTextareaInput = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PhotoshopContent[useEffect()]": ()=>{
                if (reviewTextareaRef.current) {
                    autoResizeTextarea(reviewTextareaRef.current);
                }
            }
        })["PhotoshopContent[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы по, Photoshop"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Name-block",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "number",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 112,
                        columnNumber: 66
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 112,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "PhotoshopContent[<div>.onMouseEnter]": ()=>setIsHovered(true)
        })["PhotoshopContent[<div>.onMouseEnter]"];
        t6 = ({
            "PhotoshopContent[<div>.onMouseLeave]": ()=>setIsHovered(false)
        })["PhotoshopContent[<div>.onMouseLeave]"];
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    const t7 = isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Sort$2d$default$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src;
    let t8;
    if ($[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t7
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "По рейтингу"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rating-block",
            onMouseEnter: t5,
            onMouseLeave: t6,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[11] = t8;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "По цене"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block-header",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sorting-block",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 165,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Icon$2d$course$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Профессия дизайнер от 0 до PRO"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Name-\u0441",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "status",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$Status$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 187,
                        columnNumber: 71
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 187,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "category",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p1", {
                                    children: "Photoshop"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 194,
                                    columnNumber: 75
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p1", {
                                    children: "Дизайн"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 194,
                                    columnNumber: 93
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 194,
                            columnNumber: 49
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 194,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            display: "flex",
            gap: "clamp(10px, 1.8vw, 100px)"
        };
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "24 000 ₽"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    let t19;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Price",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "discount",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "-10 000 ₽ "
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 218,
                        columnNumber: 65
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 218,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "цена"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 218,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Price-block",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "Price-on-credit",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "5 000 ₽",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "/мес"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 225,
                                    columnNumber: 88
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 225,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "в кредит"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 225,
                            columnNumber: 109
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 225,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] !== currentRating) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: Array.from({
                length: 5
            }, {
                "PhotoshopContent[Array.from()]": (_, i)=>{
                    const starNumber = i + 1;
                    const isActive_0 = starNumber <= currentRating;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: isActive_0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        onMouseEnter: {
                            "PhotoshopContent[Array.from() > <img>.onMouseEnter]": ()=>setHoverRating(starNumber)
                        }["PhotoshopContent[Array.from() > <img>.onMouseEnter]"],
                        onMouseLeave: {
                            "PhotoshopContent[Array.from() > <img>.onMouseLeave]": ()=>setHoverRating(0)
                        }["PhotoshopContent[Array.from() > <img>.onMouseLeave]"],
                        onClick: {
                            "PhotoshopContent[Array.from() > <img>.onClick]": ()=>setRating(starNumber)
                        }["PhotoshopContent[Array.from() > <img>.onClick]"],
                        style: {
                            cursor: "pointer"
                        }
                    }, i, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 238,
                        columnNumber: 18
                    }, this);
                }
            }["PhotoshopContent[Array.from()]"])
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[24] = currentRating;
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    let t22;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "20 отзывов"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-title",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "PG",
                    style: t17,
                    children: [
                        t20,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grade",
                            children: [
                                t21,
                                t22
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 263,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 263,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[27] = t21;
        $[28] = t23;
    } else {
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-description",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle."
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 271,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "D",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Документ об окончании "
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 278,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Диплом"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 278,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "C",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Сложность"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 285,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Начальная"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 285,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "B",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Длительность"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 292,
                    columnNumber: 30
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "5 месяцев"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 292,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 292,
            columnNumber: 11
        }, this);
        $[32] = t27;
    } else {
        t27 = $[32];
    }
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "block-1",
            children: [
                t25,
                t26,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "add_conditions",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Гарантия трудоустройства"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 299,
                        columnNumber: 83
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 299,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    let t29;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Advantages",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Преимущества"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 306,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 306,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[34] = t29;
    } else {
        t29 = $[34];
    }
    let t30;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course-characteristics",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "block-2",
                    children: [
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Flaws",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Недостатки"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 313,
                                    columnNumber: 109
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Некоторое темы раскрыты не до конца"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 313,
                                    columnNumber: 132
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 313,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 313,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[35] = t30;
    } else {
        t30 = $[35];
    }
    let t31;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Find-out-more",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Узнать подробнее"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 320,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[36] = t31;
    } else {
        t31 = $[36];
    }
    const t32 = `Read-reviews ${reviewsOpen ? "active" : ""}`;
    let t33;
    if ($[37] !== reviewsOpen) {
        t33 = ({
            "PhotoshopContent[<div>.onClick]": ()=>setReviewsOpen(!reviewsOpen)
        })["PhotoshopContent[<div>.onClick]"];
        $[37] = reviewsOpen;
        $[38] = t33;
    } else {
        t33 = $[38];
    }
    let t34;
    let t35;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Читать отзывы"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$arrow$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[39] = t34;
        $[40] = t35;
    } else {
        t34 = $[39];
        t35 = $[40];
    }
    let t36;
    if ($[41] !== reviewsOpen || $[42] !== t32 || $[43] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "details",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t32,
                    onClick: t33,
                    role: "button",
                    "aria-expanded": reviewsOpen,
                    children: [
                        t34,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 349,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[41] = reviewsOpen;
        $[42] = t32;
        $[43] = t33;
        $[44] = t36;
    } else {
        t36 = $[44];
    }
    let t37;
    if ($[45] !== t23 || $[46] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "course",
            children: [
                t23,
                t24,
                t30,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        $[45] = t23;
        $[46] = t36;
        $[47] = t37;
    } else {
        t37 = $[47];
    }
    const t38 = `review ${reviewsOpen ? "open" : ""}`;
    let t39;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "name-rew",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$icon$2d$user$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 369,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Василий Раганов:"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 369,
                            columnNumber: 87
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 369,
                    columnNumber: 34
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Что вас ждет в этом курсе?"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 369,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[48] = t39;
    } else {
        t39 = $[48];
    }
    let t40;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "data",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "10 марта 2021"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 376,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[49] = t40;
    } else {
        t40 = $[49];
    }
    let t41;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            display: "flex",
            alignItems: "center"
        };
        $[50] = t41;
    } else {
        t41 = $[50];
    }
    let t42;
    if ($[51] !== currentRatingReview) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "review-header",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "review-info",
                    children: [
                        t40,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grade",
                            style: t41,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: Array.from({
                                    length: 5
                                }, {
                                    "PhotoshopContent[Array.from()]": (__0, f)=>{
                                        const starNumber_0 = f + 2;
                                        const isActive_1 = starNumber_0 <= currentRatingReview;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: isActive_1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                            onMouseEnter: {
                                                "PhotoshopContent[Array.from() > <img>.onMouseEnter]": ()=>setHoverRatingReview(starNumber_0)
                                            }["PhotoshopContent[Array.from() > <img>.onMouseEnter]"],
                                            onMouseLeave: {
                                                "PhotoshopContent[Array.from() > <img>.onMouseLeave]": ()=>setHoverRatingReview(0)
                                            }["PhotoshopContent[Array.from() > <img>.onMouseLeave]"],
                                            onClick: {
                                                "PhotoshopContent[Array.from() > <img>.onClick]": ()=>setRatingReview(starNumber_0)
                                            }["PhotoshopContent[Array.from() > <img>.onClick]"],
                                            style: {
                                                cursor: "pointer"
                                            }
                                        }, f, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 399,
                                            columnNumber: 24
                                        }, this);
                                    }
                                }["PhotoshopContent[Array.from()]"])
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                lineNumber: 393,
                                columnNumber: 116
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 393,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 393,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[51] = currentRatingReview;
        $[52] = t42;
    } else {
        t42 = $[52];
    }
    let t43;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "review-text",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 417,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[53] = t43;
    } else {
        t43 = $[53];
    }
    let t44;
    let t45;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "Name",
            type: "text",
            placeholder: "\u0418\u043C\u044F"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "Review-title",
            type: "text",
            placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0442\u0437\u044B\u0432\u0430"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, this);
        $[54] = t44;
        $[55] = t45;
    } else {
        t44 = $[54];
        t45 = $[55];
    }
    let t46;
    let t47;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            display: "flex"
        };
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Оценка:"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[56] = t46;
        $[57] = t47;
    } else {
        t46 = $[56];
        t47 = $[57];
    }
    let t48;
    if ($[58] !== currentRatingCourseEvaluation) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grade-Evaluation",
            style: t46,
            children: [
                t47,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: Array.from({
                        length: 5
                    }, {
                        "PhotoshopContent[Array.from()]": (__1, f_0)=>{
                            const starNumber_1 = f_0 + 2;
                            const isActive_2 = starNumber_1 <= currentRatingCourseEvaluation;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: isActive_2 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$star$2d$def$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                onMouseEnter: {
                                    "PhotoshopContent[Array.from() > <img>.onMouseEnter]": ()=>setHoverRatingCourseEvaluation(starNumber_1)
                                }["PhotoshopContent[Array.from() > <img>.onMouseEnter]"],
                                onMouseLeave: {
                                    "PhotoshopContent[Array.from() > <img>.onMouseLeave]": ()=>setHoverRatingCourseEvaluation(0)
                                }["PhotoshopContent[Array.from() > <img>.onMouseLeave]"],
                                onClick: {
                                    "PhotoshopContent[Array.from() > <img>.onClick]": ()=>setRatingCourseEvaluation(starNumber_1)
                                }["PhotoshopContent[Array.from() > <img>.onClick]"],
                                style: {
                                    cursor: "pointer"
                                }
                            }, f_0, false, {
                                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                lineNumber: 454,
                                columnNumber: 20
                            }, this);
                        }
                    }["PhotoshopContent[Array.from()]"])
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 448,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[58] = currentRatingCourseEvaluation;
        $[59] = t48;
    } else {
        t48 = $[59];
    }
    let t49;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: "Review-text",
            ref: reviewTextareaRef,
            onChange: handleTextareaInput,
            placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[60] = t49;
    } else {
        t49 = $[60];
    }
    let t50;
    if ($[61] !== t48) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sending-feedback",
            children: [
                t44,
                t45,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[61] = t48;
        $[62] = t50;
    } else {
        t50 = $[62];
    }
    let t51;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "send-feedback",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "sending",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Отправить"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 487,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 487,
                    columnNumber: 42
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "* Перед публикацией отзыв пройдет предварительную модерацию и проверку"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 487,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 487,
            columnNumber: 11
        }, this);
        $[63] = t51;
    } else {
        t51 = $[63];
    }
    let t52;
    if ($[64] !== t42 || $[65] !== t50) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "review-content",
            children: [
                t42,
                t43,
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[64] = t42;
        $[65] = t50;
        $[66] = t52;
    } else {
        t52 = $[66];
    }
    let t53;
    if ($[67] !== t38 || $[68] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t38,
            children: t52
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[67] = t38;
        $[68] = t52;
        $[69] = t53;
    } else {
        t53 = $[69];
    }
    let t54;
    if ($[70] !== t37 || $[71] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Section-Course",
            children: [
                t37,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[70] = t37;
        $[71] = t53;
        $[72] = t54;
    } else {
        t54 = $[72];
    }
    let t55;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vacancies-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Вакансии - Photoshop"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 521,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p1", {
                    children: "hh.ru"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 521,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[73] = t55;
    } else {
        t55 = $[73];
    }
    let t56;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Total-vacancies",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Всего вакансий"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 528,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "1 210"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 528,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[74] = t56;
    } else {
        t56 = $[74];
    }
    let t57;
    let t58;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Начальный"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "110 000 ₽"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[75] = t57;
        $[76] = t58;
    } else {
        t57 = $[75];
        t58 = $[76];
    }
    let t59;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Elementary",
            "data-level": "1",
            children: [
                t57,
                t58,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "salar",
                    children: Array.from({
                        length: 3
                    }, _PhotoshopContentArrayFrom)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 546,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 546,
            columnNumber: 11
        }, this);
        $[77] = t59;
    } else {
        t59 = $[77];
    }
    let t60;
    let t61;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Средний"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "190 000 ₽"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[78] = t60;
        $[79] = t61;
    } else {
        t60 = $[78];
        t61 = $[79];
    }
    let t62;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Average",
            "data-level": "2",
            children: [
                t60,
                t61,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "salar",
                    children: Array.from({
                        length: 3
                    }, _PhotoshopContentArrayFrom2)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 566,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 566,
            columnNumber: 11
        }, this);
        $[80] = t62;
    } else {
        t62 = $[80];
    }
    let t63;
    let t64;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Профессионал"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 576,
            columnNumber: 11
        }, this);
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "260 000 ₽"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 577,
            columnNumber: 11
        }, this);
        $[81] = t63;
        $[82] = t64;
    } else {
        t63 = $[81];
        t64 = $[82];
    }
    let t65;
    if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Vacancies",
            children: [
                t56,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ZP",
                    children: [
                        t59,
                        t62,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Professional",
                            "data-level": "3",
                            children: [
                                t63,
                                t64,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "salar",
                                    children: Array.from({
                                        length: 3
                                    }, _PhotoshopContentArrayFrom3)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 586,
                                    columnNumber: 128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 586,
                            columnNumber: 73
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 586,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[83] = t65;
    } else {
        t65 = $[83];
    }
    let t66;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Advantages-header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Преимущества"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 595,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[84] = t66;
    } else {
        t66 = $[84];
    }
    let t67;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "CH",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 602,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 602,
            columnNumber: 11
        }, this);
        $[85] = t67;
    } else {
        t67 = $[85];
    }
    let t68;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Мобильность специалиста"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 609,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[86] = t68;
    } else {
        t68 = $[86];
    }
    let t69;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block",
            children: [
                t67,
                t68,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-block-text",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 616,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 616,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[87] = t69;
    } else {
        t69 = $[87];
    }
    let t70;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "CH",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 623,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, this);
        $[88] = t70;
    } else {
        t70 = $[88];
    }
    let t71;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Индивидуальный график работы"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 630,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, this);
        $[89] = t71;
    } else {
        t71 = $[89];
    }
    let t72;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block",
            children: [
                t70,
                t71,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-block-text",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 637,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 637,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 637,
            columnNumber: 11
        }, this);
        $[90] = t72;
    } else {
        t72 = $[90];
    }
    let t73;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "CH",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 644,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 644,
            columnNumber: 11
        }, this);
        $[91] = t73;
    } else {
        t73 = $[91];
    }
    let t74;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Контроль дохода"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 651,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[92] = t74;
    } else {
        t74 = $[92];
    }
    let t75;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block",
            children: [
                t73,
                t74,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-block-text",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 658,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 658,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 658,
            columnNumber: 11
        }, this);
        $[93] = t75;
    } else {
        t75 = $[93];
    }
    let t76;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "CH",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$check$2d$mark$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 665,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[94] = t76;
    } else {
        t76 = $[94];
    }
    let t77;
    if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Выбор работы"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 672,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[95] = t77;
    } else {
        t77 = $[95];
    }
    let t78;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-block",
            children: [
                t76,
                t77,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-block-text",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 679,
                        columnNumber: 88
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 679,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[96] = t78;
    } else {
        t78 = $[96];
    }
    let t79;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "Advantages-content",
            children: [
                t69,
                t72,
                t75,
                t78,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-text",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                        lineNumber: 686,
                        columnNumber: 97
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 686,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 686,
            columnNumber: 11
        }, this);
        $[97] = t79;
    } else {
        t79 = $[97];
    }
    let t80;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skills-header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Получаемые навыки"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                lineNumber: 693,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[98] = t80;
    } else {
        t80 = $[98];
    }
    let t81;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-Vacancies",
            children: [
                t55,
                t65,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "Benefits-of-vacancies",
                    children: [
                        t66,
                        t79,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "Skills-gained",
                            children: [
                                t80,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skills-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Работа в Photoshop"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 700,
                                            columnNumber: 173
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Подготовка макетов"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 700,
                                            columnNumber: 198
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Графический дизайн"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 700,
                                            columnNumber: 223
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Web дизайн"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 700,
                                            columnNumber: 248
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Дизайн сайтов"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                            lineNumber: 700,
                                            columnNumber: 265
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                                    lineNumber: 700,
                                    columnNumber: 141
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                            lineNumber: 700,
                            columnNumber: 105
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
                    lineNumber: 700,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, this);
        $[99] = t81;
    } else {
        t81 = $[99];
    }
    let t82;
    if ($[100] !== t12 || $[101] !== t54) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section",
            children: [
                t12,
                t54,
                t81
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[100] = t12;
        $[101] = t54;
        $[102] = t82;
    } else {
        t82 = $[102];
    }
    return t82;
}
_s(PhotoshopContent, "eZ9qDTJPUzQSr1tKLECUb/Of/Zc=");
_c = PhotoshopContent;
function _PhotoshopContentArrayFrom3(__4, i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }, i_2, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
        lineNumber: 717,
        columnNumber: 10
    }, this);
}
function _PhotoshopContentArrayFrom2(__3, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }, i_1, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
        lineNumber: 720,
        columnNumber: 10
    }, this);
}
function _PhotoshopContentArrayFrom(__2, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$courses$2f$design$2f$photoshop$2f$public$2f$salary$2d$estimate$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }, i_0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/photoshop/PhotoshopContent.tsx",
        lineNumber: 723,
        columnNumber: 10
    }, this);
}
function _PhotoshopContentAutoResizeTextarea(element) {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
}
var _c;
__turbopack_context__.k.register(_c, "PhotoshopContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AfterEffectContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
function AfterEffectContent() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "d78a3dc42ee95d8669501f8ea457132c5211f2d1c5cc0704890c1cb225c7e08b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d78a3dc42ee95d8669501f8ea457132c5211f2d1c5cc0704890c1cb225c7e08b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "AfterEffect"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = AfterEffectContent;
var _c;
__turbopack_context__.k.register(_c, "AfterEffectContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>stub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function stub() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Заглушка"
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/src/components/stub/stub.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_React_top-app_owl-top-front_app_c790d6d0._.js.map