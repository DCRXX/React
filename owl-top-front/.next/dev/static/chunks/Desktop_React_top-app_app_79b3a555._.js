(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo.258df9ce.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 159,
    height: 43,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Search.ed3bd6e8.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 15,
    height: 15,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/default_page/Default_page.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'photoshop',
        path: '/photoshop',
        label: 'Photoshop',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/courses/design/photoshop/PhotoshopContent.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'after-effect',
        path: '/after-effect',
        label: 'After Effect',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/courses/design/AfterEffect/AfterEffectContent.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'illustrator',
        path: '/illustrator',
        label: 'Ilustrator',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'figma',
        path: '/Figma',
        label: 'Figma',
        category: 'courses',
        subcategory: 'design',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'javaScript',
        path: '/JavaScript',
        label: 'JavaScript',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'react/Next.js',
        path: '/React/Next.js',
        label: 'React/Next.js',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'python',
        path: '/Python',
        label: 'Python',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'node.js',
        path: '/Node.js',
        label: 'Node.js',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Базы данных',
        path: '/Базы данных',
        label: 'Базы данных',
        category: 'courses',
        subcategory: 'development',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Excel',
        path: '/Excel',
        label: 'Excel',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Google Analytics',
        path: '/Google Analytics',
        label: 'Google Analytics',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SQL для аналитиков',
        path: '/SQL для аналитиков',
        label: 'SQL для аналитиков',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Tableau',
        path: '/Tableau',
        label: 'Tableau',
        category: 'courses',
        subcategory: 'analytics',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SEO',
        path: '/SEO',
        label: 'SEO',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'SMM',
        path: '/SMM',
        label: 'SMM',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Копирайтинг',
        path: '/Копирайтинг',
        label: 'Копирайтинг',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
    },
    {
        id: 'Контекстная реклама',
        path: '/Контекстная реклама',
        label: 'Контекстная реклама',
        category: 'courses',
        subcategory: 'marketing',
        component: ()=>__turbopack_context__.A("[project]/Desktop/React/top-app/app/src/components/stub/stub.tsx [app-client] (ecmascript, async loader)").then((mod)=>mod.default)
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content_keys",
    ()=>Content_keys,
    "useAccordion",
    ()=>useAccordion,
    "useAccordionChild",
    ()=>useAccordionChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
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
    const [openSectionsChild, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t13);
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
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
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
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
"[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/courses_are_not_active.d6235eb6.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_courses.a530fbe9.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_are_not_active.39c844ed.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Services_active.eeb22089.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 19,
    height: 13,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Products_are_not_active.763784f1.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Active_products.b7407d53.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_are_not_active.2ba9f92b.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Books_active.44ec9241.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 23,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iconConfig",
    ()=>iconConfig,
    "useIconHover",
    ()=>useIconHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/courses_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Active_courses.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Services_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Services_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Products_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Active_products.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Books_are_not_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Books_active.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$courses_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_courses$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    services: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Services_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Books: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Books_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    },
    Goods: {
        default: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Products_are_not_active$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        hover: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Active_products$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    }
};
const useIconHover = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
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
    const [hoverStates, setHoverStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStates);
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
"[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function MenuContent(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(249);
    if ($[0] !== "ce04554fa9fd8596eed07720d1a8b642a8b74e9726e0543f746b30f2080fd92e") {
        for(let $i = 0; $i < 249; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ce04554fa9fd8596eed07720d1a8b642a8b74e9726e0543f746b30f2080fd92e";
    }
    const { isMobile, currentRouteId } = t0;
    const { hoverStates, handleMouseEnter, handleMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"])();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== currentRouteId || $[2] !== handleMouseEnter || $[3] !== handleMouseLeave || $[4] !== hoverStates || $[5] !== isMobile || $[6] !== openSections.courses || $[7] !== openSectionsChild.analytics || $[8] !== openSectionsChild.design || $[9] !== openSectionsChild.development || $[10] !== openSectionsChild.marketing || $[11] !== router || $[12] !== searchParams || $[13] !== toggleSection || $[14] !== toggleSectionChild) {
        const designCourses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "design");
        const developmentCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "development");
        const analyticsCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "analytics");
        const marketingCoures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "marketing");
        isMobile ? "mobile-accordions" : "list-of-services";
        isMobile ? "mobile-accordion-item" : "";
        isMobile ? "mobile-content" : "accordion-content-coures";
        let t17;
        if ($[31] !== router || $[32] !== searchParams) {
            t17 = ({
                "MenuContent[handlecourseClick]": (courseId)=>{
                    console.log("\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441:", courseId);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("content", courseId);
                    router.replace(`/?${params.toString()}`, {
                        scroll: false
                    });
                }
            })["MenuContent[handlecourseClick]"];
            $[31] = router;
            $[32] = searchParams;
            $[33] = t17;
        } else {
            t17 = $[33];
        }
        const handlecourseClick = t17;
        t15 = "list-of-services";
        const t18 = `coures ${openSections.courses ? "active" : ""}`;
        let t19;
        if ($[34] !== handleMouseEnter) {
            t19 = ({
                "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("courses")
            })["MenuContent[<div>.onMouseEnter]"];
            $[34] = handleMouseEnter;
            $[35] = t19;
        } else {
            t19 = $[35];
        }
        let t20;
        if ($[36] !== handleMouseLeave) {
            t20 = ({
                "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("courses")
            })["MenuContent[<div>.onMouseLeave]"];
            $[36] = handleMouseLeave;
            $[37] = t20;
        } else {
            t20 = $[37];
        }
        let t21;
        if ($[38] !== toggleSection) {
            t21 = ({
                "MenuContent[<div>.onClick]": ()=>toggleSection("courses")
            })["MenuContent[<div>.onClick]"];
            $[38] = toggleSection;
            $[39] = t21;
        } else {
            t21 = $[39];
        }
        const t22 = openSections.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : hoverStates.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.default;
        let t23;
        if ($[40] !== t22) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t22
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this);
            $[40] = t22;
            $[41] = t23;
        } else {
            t23 = $[41];
        }
        let t24;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Курсы"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this);
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        if ($[43] !== t18 || $[44] !== t19 || $[45] !== t20 || $[46] !== t21 || $[47] !== t23) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t18,
                onMouseEnter: t19,
                onMouseLeave: t20,
                onClick: t21,
                children: [
                    t23,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this);
            $[43] = t18;
            $[44] = t19;
            $[45] = t20;
            $[46] = t21;
            $[47] = t23;
            $[48] = t16;
        } else {
            t16 = $[48];
        }
        t14 = `accordion-content-coures ${openSections.courses ? "open" : ""}`;
        t13 = "accordion-content-inner";
        t5 = "accord-spis-1";
        const t25 = `spis-item ${openSectionsChild.design ? "active" : ""}`;
        let t26;
        if ($[49] !== toggleSectionChild) {
            t26 = ({
                "MenuContent[<p>.onClick]": ()=>toggleSectionChild("design")
            })["MenuContent[<p>.onClick]"];
            $[49] = toggleSectionChild;
            $[50] = t26;
        } else {
            t26 = $[50];
        }
        if ($[51] !== t25 || $[52] !== t26) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: t25,
                onClick: t26,
                children: "ДИЗАЙН"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 156,
                columnNumber: 12
            }, this);
            $[51] = t25;
            $[52] = t26;
            $[53] = t6;
        } else {
            t6 = $[53];
        }
        const t27 = `accordion-content-in-spis ${openSectionsChild.design ? "open" : ""}`;
        const t28 = designCourses.length > 0 ? designCourses.map({
            "MenuContent[designCourses.map()]": (course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[designCourses.map() > <div>.onClick]": ()=>handlecourseClick(course.id)
                    }["MenuContent[designCourses.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 167,
                        columnNumber: 62
                    }, this)
                }, course.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 165,
                    columnNumber: 53
                }, this)
        }["MenuContent[designCourses.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 168,
            columnNumber: 46
        }, this);
        let t29;
        if ($[54] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accordion-content-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accord-spis-1",
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 171,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this);
            $[54] = t28;
            $[55] = t29;
        } else {
            t29 = $[55];
        }
        if ($[56] !== t27 || $[57] !== t29) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t27,
                children: t29
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 178,
                columnNumber: 12
            }, this);
            $[56] = t27;
            $[57] = t29;
            $[58] = t7;
        } else {
            t7 = $[58];
        }
        const t30 = `spis-item ${openSectionsChild.development ? "active" : ""}`;
        let t31;
        if ($[59] !== toggleSectionChild) {
            t31 = ({
                "MenuContent[<p>.onClick]": ()=>toggleSectionChild("development")
            })["MenuContent[<p>.onClick]"];
            $[59] = toggleSectionChild;
            $[60] = t31;
        } else {
            t31 = $[60];
        }
        if ($[61] !== t30 || $[62] !== t31) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: t30,
                onClick: t31,
                children: "РАЗРАБОТКА"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 197,
                columnNumber: 12
            }, this);
            $[61] = t30;
            $[62] = t31;
            $[63] = t8;
        } else {
            t8 = $[63];
        }
        const t32 = `accordion-content-in-spis ${openSectionsChild.development ? "open" : ""}`;
        const t33 = developmentCoures.length > 0 ? developmentCoures.map({
            "MenuContent[developmentCoures.map()]": (course_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_0.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[developmentCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_0.id)
                    }["MenuContent[developmentCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_0.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 208,
                        columnNumber: 66
                    }, this)
                }, course_0.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 206,
                    columnNumber: 59
                }, this)
        }["MenuContent[developmentCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 209,
            columnNumber: 50
        }, this);
        let t34;
        if ($[64] !== t33) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accordion-content-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accord-spis-1",
                    children: t33
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 212,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this);
            $[64] = t33;
            $[65] = t34;
        } else {
            t34 = $[65];
        }
        if ($[66] !== t32 || $[67] !== t34) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t32,
                children: t34
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
            $[66] = t32;
            $[67] = t34;
            $[68] = t9;
        } else {
            t9 = $[68];
        }
        const t35 = `spis-item ${openSectionsChild.analytics ? "active" : ""}`;
        let t36;
        if ($[69] !== toggleSectionChild) {
            t36 = ({
                "MenuContent[<p>.onClick]": ()=>toggleSectionChild("analytics")
            })["MenuContent[<p>.onClick]"];
            $[69] = toggleSectionChild;
            $[70] = t36;
        } else {
            t36 = $[70];
        }
        if ($[71] !== t35 || $[72] !== t36) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: t35,
                onClick: t36,
                children: "АНАЛИТИКА"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this);
            $[71] = t35;
            $[72] = t36;
            $[73] = t10;
        } else {
            t10 = $[73];
        }
        const t37 = `accordion-content-in-spis ${openSectionsChild.analytics ? "open" : ""}`;
        const t38 = analyticsCoures.length > 0 ? analyticsCoures.map({
            "MenuContent[analyticsCoures.map()]": (course_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_1.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[analyticsCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_1.id)
                    }["MenuContent[analyticsCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_1.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 249,
                        columnNumber: 64
                    }, this)
                }, course_1.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 247,
                    columnNumber: 57
                }, this)
        }["MenuContent[analyticsCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 250,
            columnNumber: 48
        }, this);
        let t39;
        if ($[74] !== t38) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accordion-content-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "accord-spis-1",
                    children: t38
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 253,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this);
            $[74] = t38;
            $[75] = t39;
        } else {
            t39 = $[75];
        }
        if ($[76] !== t37 || $[77] !== t39) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t37,
                children: t39
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, this);
            $[76] = t37;
            $[77] = t39;
            $[78] = t11;
        } else {
            t11 = $[78];
        }
        const t40 = `spis-item ${openSectionsChild.marketing ? "active" : ""}`;
        let t41;
        if ($[79] !== toggleSectionChild) {
            t41 = ({
                "MenuContent[<p>.onClick]": ()=>toggleSectionChild("marketing")
            })["MenuContent[<p>.onClick]"];
            $[79] = toggleSectionChild;
            $[80] = t41;
        } else {
            t41 = $[80];
        }
        if ($[81] !== t40 || $[82] !== t41) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: t40,
                onClick: t41,
                children: "МАРКЕТИНГ"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this);
            $[81] = t40;
            $[82] = t41;
            $[83] = t12;
        } else {
            t12 = $[83];
        }
        t4 = `accordion-content-in-spis ${openSectionsChild.marketing ? "open" : ""}`;
        t3 = "accordion-content-inner";
        t1 = "accord-spis-1";
        t2 = marketingCoures.length > 0 ? marketingCoures.map({
            "MenuContent[marketingCoures.map()]": (course_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_2.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[marketingCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_2.id)
                    }["MenuContent[marketingCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_2.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 292,
                        columnNumber: 64
                    }, this)
                }, course_2.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 290,
                    columnNumber: 57
                }, this)
        }["MenuContent[marketingCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 293,
            columnNumber: 48
        }, this);
        $[1] = currentRouteId;
        $[2] = handleMouseEnter;
        $[3] = handleMouseLeave;
        $[4] = hoverStates;
        $[5] = isMobile;
        $[6] = openSections.courses;
        $[7] = openSectionsChild.analytics;
        $[8] = openSectionsChild.design;
        $[9] = openSectionsChild.development;
        $[10] = openSectionsChild.marketing;
        $[11] = router;
        $[12] = searchParams;
        $[13] = toggleSection;
        $[14] = toggleSectionChild;
        $[15] = t1;
        $[16] = t10;
        $[17] = t11;
        $[18] = t12;
        $[19] = t13;
        $[20] = t14;
        $[21] = t15;
        $[22] = t16;
        $[23] = t2;
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
        $[30] = t9;
    } else {
        t1 = $[15];
        t10 = $[16];
        t11 = $[17];
        t12 = $[18];
        t13 = $[19];
        t14 = $[20];
        t15 = $[21];
        t16 = $[22];
        t2 = $[23];
        t3 = $[24];
        t4 = $[25];
        t5 = $[26];
        t6 = $[27];
        t7 = $[28];
        t8 = $[29];
        t9 = $[30];
    }
    let t17;
    if ($[84] !== t1 || $[85] !== t2) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[84] = t1;
        $[85] = t2;
        $[86] = t17;
    } else {
        t17 = $[86];
    }
    let t18;
    if ($[87] !== t17 || $[88] !== t3) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t17
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[87] = t17;
        $[88] = t3;
        $[89] = t18;
    } else {
        t18 = $[89];
    }
    let t19;
    if ($[90] !== t18 || $[91] !== t4) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t18
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[90] = t18;
        $[91] = t4;
        $[92] = t19;
    } else {
        t19 = $[92];
    }
    let t20;
    if ($[93] !== t10 || $[94] !== t11 || $[95] !== t12 || $[96] !== t19 || $[97] !== t5 || $[98] !== t6 || $[99] !== t7 || $[100] !== t8 || $[101] !== t9) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                t9,
                t10,
                t11,
                t12,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[93] = t10;
        $[94] = t11;
        $[95] = t12;
        $[96] = t19;
        $[97] = t5;
        $[98] = t6;
        $[99] = t7;
        $[100] = t8;
        $[101] = t9;
        $[102] = t20;
    } else {
        t20 = $[102];
    }
    let t21;
    if ($[103] !== t13 || $[104] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: t20
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[103] = t13;
        $[104] = t20;
        $[105] = t21;
    } else {
        t21 = $[105];
    }
    let t22;
    if ($[106] !== t14 || $[107] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: t21
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[106] = t14;
        $[107] = t21;
        $[108] = t22;
    } else {
        t22 = $[108];
    }
    const t23 = `services ${openSections.services ? "active" : ""}`;
    let t24;
    if ($[109] !== handleMouseEnter) {
        t24 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("services")
        })["MenuContent[<div>.onMouseEnter]"];
        $[109] = handleMouseEnter;
        $[110] = t24;
    } else {
        t24 = $[110];
    }
    let t25;
    if ($[111] !== handleMouseLeave) {
        t25 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("services")
        })["MenuContent[<div>.onMouseLeave]"];
        $[111] = handleMouseLeave;
        $[112] = t25;
    } else {
        t25 = $[112];
    }
    let t26;
    if ($[113] !== toggleSection) {
        t26 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("services")
        })["MenuContent[<div>.onClick]"];
        $[113] = toggleSection;
        $[114] = t26;
    } else {
        t26 = $[114];
    }
    const t27 = openSections.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : hoverStates.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.default;
    let t28;
    if ($[115] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t27
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[115] = t27;
        $[116] = t28;
    } else {
        t28 = $[116];
    }
    let t29;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Сервисы"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[117] = t29;
    } else {
        t29 = $[117];
    }
    let t30;
    if ($[118] !== t23 || $[119] !== t24 || $[120] !== t25 || $[121] !== t26 || $[122] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t23,
            onMouseEnter: t24,
            onMouseLeave: t25,
            onClick: t26,
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[118] = t23;
        $[119] = t24;
        $[120] = t25;
        $[121] = t26;
        $[122] = t28;
        $[123] = t30;
    } else {
        t30 = $[123];
    }
    const t31 = `accordion-content-coures ${openSections.services ? "open" : ""}`;
    const t32 = `spis-item ${openSectionsChild.cloud_storage ? "active" : ""}`;
    let t33;
    if ($[124] !== toggleSectionChild) {
        t33 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("cloud_storage")
        })["MenuContent[<p>.onClick]"];
        $[124] = toggleSectionChild;
        $[125] = t33;
    } else {
        t33 = $[125];
    }
    let t34;
    if ($[126] !== t32 || $[127] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t32,
            onClick: t33,
            children: "ОБЛАЧНЫЕ ХРАНИЛИЩА"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[126] = t32;
        $[127] = t33;
        $[128] = t34;
    } else {
        t34 = $[128];
    }
    const t35 = `accordion-content-in-spis ${openSectionsChild.cloud_storage ? "open" : ""}`;
    let t36;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Google Drive"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 486,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Dropbox"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 486,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Яндекс.Диск"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 486,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 486,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[129] = t36;
    } else {
        t36 = $[129];
    }
    let t37;
    if ($[130] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[130] = t35;
        $[131] = t37;
    } else {
        t37 = $[131];
    }
    const t38 = `spis-item ${openSectionsChild.communication ? "active" : ""}`;
    let t39;
    if ($[132] !== toggleSectionChild) {
        t39 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("communication")
        })["MenuContent[<p>.onClick]"];
        $[132] = toggleSectionChild;
        $[133] = t39;
    } else {
        t39 = $[133];
    }
    let t40;
    if ($[134] !== t38 || $[135] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t38,
            onClick: t39,
            children: "КОММУНИКАЦИЯ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[134] = t38;
        $[135] = t39;
        $[136] = t40;
    } else {
        t40 = $[136];
    }
    const t41 = `accordion-content-in-spis ${openSectionsChild.communication ? "open" : ""}`;
    let t42;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Slack для команд"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 522,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Zoom Pro"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 522,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Notion"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 522,
                        columnNumber: 121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 522,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[137] = t42;
    } else {
        t42 = $[137];
    }
    let t43;
    if ($[138] !== t41) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t41,
            children: t42
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[138] = t41;
        $[139] = t43;
    } else {
        t43 = $[139];
    }
    const t44 = `spis-item ${openSectionsChild.data_analytics ? "active" : ""}`;
    let t45;
    if ($[140] !== toggleSectionChild) {
        t45 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("data_analytics")
        })["MenuContent[<p>.onClick]"];
        $[140] = toggleSectionChild;
        $[141] = t45;
    } else {
        t45 = $[141];
    }
    let t46;
    if ($[142] !== t44 || $[143] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t44,
            onClick: t45,
            children: "АНАЛИТИКА ДАННЫХ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[142] = t44;
        $[143] = t45;
        $[144] = t46;
    } else {
        t46 = $[144];
    }
    const t47 = `accordion-content-in-spis ${openSectionsChild.data_analytics ? "open" : ""}`;
    let t48;
    if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Google Data Studio"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 558,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Mixpanel"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 558,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Hotjar"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 558,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 558,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, this);
        $[145] = t48;
    } else {
        t48 = $[145];
    }
    let t49;
    if ($[146] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t47,
            children: t48
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        $[146] = t47;
        $[147] = t49;
    } else {
        t49 = $[147];
    }
    let t50;
    if ($[148] !== t34 || $[149] !== t37 || $[150] !== t40 || $[151] !== t43 || $[152] !== t46 || $[153] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    t34,
                    t37,
                    t40,
                    t43,
                    t46,
                    t49
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 573,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[148] = t34;
        $[149] = t37;
        $[150] = t40;
        $[151] = t43;
        $[152] = t46;
        $[153] = t49;
        $[154] = t50;
    } else {
        t50 = $[154];
    }
    let t51;
    if ($[155] !== t31 || $[156] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t31,
            children: t50
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[155] = t31;
        $[156] = t50;
        $[157] = t51;
    } else {
        t51 = $[157];
    }
    const t52 = `Books ${openSections.Books ? "active" : ""}`;
    let t53;
    if ($[158] !== handleMouseEnter) {
        t53 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("Books")
        })["MenuContent[<div>.onMouseEnter]"];
        $[158] = handleMouseEnter;
        $[159] = t53;
    } else {
        t53 = $[159];
    }
    let t54;
    if ($[160] !== handleMouseLeave) {
        t54 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("Books")
        })["MenuContent[<div>.onMouseLeave]"];
        $[160] = handleMouseLeave;
        $[161] = t54;
    } else {
        t54 = $[161];
    }
    let t55;
    if ($[162] !== toggleSection) {
        t55 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("Books")
        })["MenuContent[<div>.onClick]"];
        $[162] = toggleSection;
        $[163] = t55;
    } else {
        t55 = $[163];
    }
    const t56 = openSections.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : hoverStates.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.default;
    let t57;
    if ($[164] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t56
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[164] = t56;
        $[165] = t57;
    } else {
        t57 = $[165];
    }
    let t58;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Книги"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[166] = t58;
    } else {
        t58 = $[166];
    }
    let t59;
    if ($[167] !== t52 || $[168] !== t53 || $[169] !== t54 || $[170] !== t55 || $[171] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t52,
            onMouseEnter: t53,
            onMouseLeave: t54,
            onClick: t55,
            children: [
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 642,
            columnNumber: 11
        }, this);
        $[167] = t52;
        $[168] = t53;
        $[169] = t54;
        $[170] = t55;
        $[171] = t57;
        $[172] = t59;
    } else {
        t59 = $[172];
    }
    const t60 = `accordion-content-coures ${openSections.Books ? "open" : ""}`;
    const t61 = `spis-item ${openSectionsChild.soft_skills ? "active" : ""}`;
    let t62;
    if ($[173] !== toggleSectionChild) {
        t62 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("soft_skills")
        })["MenuContent[<p>.onClick]"];
        $[173] = toggleSectionChild;
        $[174] = t62;
    } else {
        t62 = $[174];
    }
    let t63;
    if ($[175] !== t61 || $[176] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t61,
            onClick: t62,
            children: "СОФТ СКИЛЛЫ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 666,
            columnNumber: 11
        }, this);
        $[175] = t61;
        $[176] = t62;
        $[177] = t63;
    } else {
        t63 = $[177];
    }
    const t64 = `accordion-content-in-spis ${openSectionsChild.soft_skills ? "open" : ""}`;
    let t65;
    if ($[178] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"7 навыков высокоэффективных людей"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 676,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Как работать 4 часа в неделю"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 676,
                        columnNumber: 125
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Атомные привычки"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 676,
                        columnNumber: 162
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 676,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[178] = t65;
    } else {
        t65 = $[178];
    }
    let t66;
    if ($[179] !== t64) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t64,
            children: t65
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[179] = t64;
        $[180] = t66;
    } else {
        t66 = $[180];
    }
    const t67 = `spis-item ${openSectionsChild.business_and_startups ? "active" : ""}`;
    let t68;
    if ($[181] !== toggleSectionChild) {
        t68 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("business_and_startups")
        })["MenuContent[<p>.onClick]"];
        $[181] = toggleSectionChild;
        $[182] = t68;
    } else {
        t68 = $[182];
    }
    let t69;
    if ($[183] !== t67 || $[184] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t67,
            onClick: t68,
            children: "БИЗНЕС И СТАРТАПЫ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 702,
            columnNumber: 11
        }, this);
        $[183] = t67;
        $[184] = t68;
        $[185] = t69;
    } else {
        t69 = $[185];
    }
    const t70 = `accordion-content-in-spis ${openSectionsChild.business_and_startups ? "open" : ""}`;
    let t71;
    if ($[186] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Стартап за $100"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 712,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Бизнес с нуля"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 712,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Метод бережливого стартапа"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 712,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 712,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 712,
            columnNumber: 11
        }, this);
        $[186] = t71;
    } else {
        t71 = $[186];
    }
    let t72;
    if ($[187] !== t70) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t70,
            children: t71
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 719,
            columnNumber: 11
        }, this);
        $[187] = t70;
        $[188] = t72;
    } else {
        t72 = $[188];
    }
    let t73;
    if ($[189] !== t63 || $[190] !== t66 || $[191] !== t69 || $[192] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accord-spis-1",
            children: [
                t63,
                t66,
                t69,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[189] = t63;
        $[190] = t66;
        $[191] = t69;
        $[192] = t72;
        $[193] = t73;
    } else {
        t73 = $[193];
    }
    let t74;
    if ($[194] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accord-spis-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 738,
            columnNumber: 11
        }, this);
        $[194] = t74;
    } else {
        t74 = $[194];
    }
    let t75;
    if ($[195] !== t73) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: [
                t73,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, this);
        $[195] = t73;
        $[196] = t75;
    } else {
        t75 = $[196];
    }
    let t76;
    if ($[197] !== t60 || $[198] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t60,
            children: t75
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 753,
            columnNumber: 11
        }, this);
        $[197] = t60;
        $[198] = t75;
        $[199] = t76;
    } else {
        t76 = $[199];
    }
    const t77 = `Goods ${openSections.Goods ? "active" : ""}`;
    let t78;
    if ($[200] !== handleMouseEnter) {
        t78 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("Goods")
        })["MenuContent[<div>.onMouseEnter]"];
        $[200] = handleMouseEnter;
        $[201] = t78;
    } else {
        t78 = $[201];
    }
    let t79;
    if ($[202] !== handleMouseLeave) {
        t79 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("Goods")
        })["MenuContent[<div>.onMouseLeave]"];
        $[202] = handleMouseLeave;
        $[203] = t79;
    } else {
        t79 = $[203];
    }
    let t80;
    if ($[204] !== toggleSection) {
        t80 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("Goods")
        })["MenuContent[<div>.onClick]"];
        $[204] = toggleSection;
        $[205] = t80;
    } else {
        t80 = $[205];
    }
    const t81 = openSections.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : hoverStates.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.default;
    let t82;
    if ($[206] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t81
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 794,
            columnNumber: 11
        }, this);
        $[206] = t81;
        $[207] = t82;
    } else {
        t82 = $[207];
    }
    let t83;
    if ($[208] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Товары"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 802,
            columnNumber: 11
        }, this);
        $[208] = t83;
    } else {
        t83 = $[208];
    }
    let t84;
    if ($[209] !== t77 || $[210] !== t78 || $[211] !== t79 || $[212] !== t80 || $[213] !== t82) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t77,
            onMouseEnter: t78,
            onMouseLeave: t79,
            onClick: t80,
            children: [
                t82,
                t83
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 809,
            columnNumber: 11
        }, this);
        $[209] = t77;
        $[210] = t78;
        $[211] = t79;
        $[212] = t80;
        $[213] = t82;
        $[214] = t84;
    } else {
        t84 = $[214];
    }
    const t85 = `accordion-content-coures ${openSections.Goods ? "open" : ""}`;
    const t86 = `spis-item ${openSectionsChild.subrcriptions_and_licenses ? "active" : ""}`;
    let t87;
    if ($[215] !== toggleSectionChild) {
        t87 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("subrcriptions_and_licenses")
        })["MenuContent[<p>.onClick]"];
        $[215] = toggleSectionChild;
        $[216] = t87;
    } else {
        t87 = $[216];
    }
    let t88;
    if ($[217] !== t86 || $[218] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t86,
            onClick: t87,
            children: "ПОДПИСКИ И ЛИЦЕНЗИИ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 833,
            columnNumber: 11
        }, this);
        $[217] = t86;
        $[218] = t87;
        $[219] = t88;
    } else {
        t88 = $[219];
    }
    const t89 = `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? "open" : ""}`;
    let t90;
    if ($[220] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Годовые лицензии ПО"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 843,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Подписка на сервисы"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 843,
                        columnNumber: 109
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Доступ к библиотекам"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 843,
                        columnNumber: 135
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 843,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 843,
            columnNumber: 11
        }, this);
        $[220] = t90;
    } else {
        t90 = $[220];
    }
    let t91;
    if ($[221] !== t89) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t89,
            children: t90
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 850,
            columnNumber: 11
        }, this);
        $[221] = t89;
        $[222] = t91;
    } else {
        t91 = $[222];
    }
    const t92 = `spis-item ${openSectionsChild.mersch_and_branding ? "active" : ""}`;
    let t93;
    if ($[223] !== toggleSectionChild) {
        t93 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("mersch_and_branding")
        })["MenuContent[<p>.onClick]"];
        $[223] = toggleSectionChild;
        $[224] = t93;
    } else {
        t93 = $[224];
    }
    let t94;
    if ($[225] !== t92 || $[226] !== t93) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t92,
            onClick: t93,
            children: "МЕРЧ И БРЕНДИНГ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 869,
            columnNumber: 11
        }, this);
        $[225] = t92;
        $[226] = t93;
        $[227] = t94;
    } else {
        t94 = $[227];
    }
    const t95 = `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? "open" : ""}`;
    let t96;
    if ($[228] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Футболки с логотипом"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 879,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Кружки для программистов"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 879,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Стикеры с мемами про код"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 879,
                        columnNumber: 141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 879,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 879,
            columnNumber: 11
        }, this);
        $[228] = t96;
    } else {
        t96 = $[228];
    }
    let t97;
    if ($[229] !== t95) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t95,
            children: t96
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 886,
            columnNumber: 11
        }, this);
        $[229] = t95;
        $[230] = t97;
    } else {
        t97 = $[230];
    }
    let t98;
    if ($[231] !== t88 || $[232] !== t91 || $[233] !== t94 || $[234] !== t97) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    t88,
                    t91,
                    t94,
                    t97
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 894,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 894,
            columnNumber: 11
        }, this);
        $[231] = t88;
        $[232] = t91;
        $[233] = t94;
        $[234] = t97;
        $[235] = t98;
    } else {
        t98 = $[235];
    }
    let t99;
    if ($[236] !== t85 || $[237] !== t98) {
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t85,
            children: t98
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 905,
            columnNumber: 11
        }, this);
        $[236] = t85;
        $[237] = t98;
        $[238] = t99;
    } else {
        t99 = $[238];
    }
    let t100;
    if ($[239] !== t15 || $[240] !== t16 || $[241] !== t22 || $[242] !== t30 || $[243] !== t51 || $[244] !== t59 || $[245] !== t76 || $[246] !== t84 || $[247] !== t99) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: [
                t16,
                t22,
                t30,
                t51,
                t59,
                t76,
                t84,
                t99
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 914,
            columnNumber: 12
        }, this);
        $[239] = t15;
        $[240] = t16;
        $[241] = t22;
        $[242] = t30;
        $[243] = t51;
        $[244] = t59;
        $[245] = t76;
        $[246] = t84;
        $[247] = t99;
        $[248] = t100;
    } else {
        t100 = $[248];
    }
    return t100;
}
_s(MenuContent, "FqVEWMpyIh7vYbXEdRUKpAJDIlo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MenuContent;
var _c;
__turbopack_context__.k.register(_c, "MenuContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/close.702dc2c8.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/menu.018e57d4.svg");}),
"[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg.mjs { IMAGE => \"[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/Search.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/close.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg.mjs { IMAGE => "[project]/Desktop/React/top-app/app/src/components/Header/public/menu.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "3e72f9905dc638ae4743690aa895704cbc248ba45379ab2fd12bd37238abf7ef") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e72f9905dc638ae4743690aa895704cbc248ba45379ab2fd12bd37238abf7ef";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("content") || "home";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const currentRouteId = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
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
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "logo-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                lineNumber: 86,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            required: true,
            maxLength: 50,
            className: "search",
            id: "site_search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A..."
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search-conteiner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "search-button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "Icon-Search",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$Search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                            lineNumber: 100,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                        lineNumber: 100,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                lineNumber: 100,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== isMobileView) {
        t7 = isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mobile-menu-toggle",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                onClick: {
                    "Header[<img>.onClick]": ()=>setIsMobileMenuOpen(true)
                }["Header[<img>.onClick]"],
                src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$menu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                alt: "\u041C\u0435\u043D\u044E"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                lineNumber: 107,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
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
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isMobile: true,
            currentRouteId: currentRouteId,
            onCourseClick: handlecourseClick
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
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
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            onClick: {
                "Header[<img>.onClick]": ()=>setIsMobileMenuOpen(false)
            }["Header[<img>.onClick]"],
            src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$public$2f$close$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t8 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
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
        t12 = !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isMobile: false,
            currentRouteId: currentRouteId,
            onCourseClick: handlecourseClick
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
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
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            children: [
                t4,
                t6,
                t7,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIconHover"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
;
function Footer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "274f2f7b87b3b011810fcc367eaa49eb6c7c557049197bc8ca5db2b83a3e2de5") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "274f2f7b87b3b011810fcc367eaa49eb6c7c557049197bc8ca5db2b83a3e2de5";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "OwlTop © 2020 - 2021 Все права защищены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "info-bloc",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Пользовательское соглашение"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx",
                            lineNumber: 20,
                            columnNumber: 49
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Политика конфиденциальности"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx",
                            lineNumber: 20,
                            columnNumber: 83
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Footer/Footer.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function RootLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "a31d51044f09842ad6488725a9b44ab28d626f2d970d9e94d055e5da11295233") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a31d51044f09842ad6488725a9b44ab28d626f2d970d9e94d055e5da11295233";
    }
    const { children } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
            children: "OWL top"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    if ($[3] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "ru",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                    children: [
                        t2,
                        t3,
                        t4
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
                    lineNumber: 46,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/layout.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_React_top-app_app_79b3a555._.js.map