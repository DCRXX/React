(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useHover.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/scripts/useAcordion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function MenuContent(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(241);
    if ($[0] !== "8f2e49e881e0c525222c59f749b19243d91d1611cc25ea5961ab5dcaa6ef9b7a") {
        for(let $i = 0; $i < 241; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f2e49e881e0c525222c59f749b19243d91d1611cc25ea5961ab5dcaa6ef9b7a";
    }
    const { isMobile, currentRouteId } = t0;
    const { hoverStates, handleMouseEnter, handleMouseLeave } = useIconHover();
    const { openSections, toggleSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"])();
    const { openSectionsChild, toggleSectionChild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"])();
    let t1;
    let t10;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== currentRouteId || $[2] !== handleMouseEnter || $[3] !== handleMouseLeave || $[4] !== hoverStates || $[5] !== isMobile || $[6] !== openSections.courses || $[7] !== openSectionsChild.design || $[8] !== toggleSection || $[9] !== toggleSectionChild) {
        const designCourses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "design");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "development");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "analytics");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoutesBySubcategory"])("courses", "marketing");
        isMobile ? "mobile-accordions" : "list-of-services";
        isMobile ? "mobile-accordion-item" : "";
        isMobile ? "mobile-content" : "accordion-content-coures";
        t9 = "list-of-services";
        const t11 = `coures ${openSections.courses ? "active" : ""}`;
        let t12;
        if ($[20] !== handleMouseEnter) {
            t12 = ({
                "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("courses")
            })["MenuContent[<div>.onMouseEnter]"];
            $[20] = handleMouseEnter;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        let t13;
        if ($[22] !== handleMouseLeave) {
            t13 = ({
                "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("courses")
            })["MenuContent[<div>.onMouseLeave]"];
            $[22] = handleMouseLeave;
            $[23] = t13;
        } else {
            t13 = $[23];
        }
        let t14;
        if ($[24] !== toggleSection) {
            t14 = ({
                "MenuContent[<div>.onClick]": ()=>toggleSection("courses")
            })["MenuContent[<div>.onClick]"];
            $[24] = toggleSection;
            $[25] = t14;
        } else {
            t14 = $[25];
        }
        const t15 = openSections.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : hoverStates.courses ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].courses.default;
        let t16;
        if ($[26] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: t15
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this);
            $[26] = t15;
            $[27] = t16;
        } else {
            t16 = $[27];
        }
        let t17;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Курсы"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this);
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        if ($[29] !== t11 || $[30] !== t12 || $[31] !== t13 || $[32] !== t14 || $[33] !== t16) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t11,
                onMouseEnter: t12,
                onMouseLeave: t13,
                onClick: t14,
                children: [
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this);
            $[29] = t11;
            $[30] = t12;
            $[31] = t13;
            $[32] = t14;
            $[33] = t16;
            $[34] = t10;
        } else {
            t10 = $[34];
        }
        t8 = `accordion-content-coures ${openSections.courses ? "open" : ""}`;
        t7 = "accordion-content-inner";
        t5 = "accord-spis-1";
        const t18 = `spis-item ${openSectionsChild.design ? "active" : ""}`;
        let t19;
        if ($[35] !== toggleSectionChild) {
            t19 = ({
                "MenuContent[<p>.onClick]": ()=>toggleSectionChild("design")
            })["MenuContent[<p>.onClick]"];
            $[35] = toggleSectionChild;
            $[36] = t19;
        } else {
            t19 = $[36];
        }
        if ($[37] !== t18 || $[38] !== t19) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: t18,
                onClick: t19,
                children: "ДИЗАЙН"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 128,
                columnNumber: 12
            }, this);
            $[37] = t18;
            $[38] = t19;
            $[39] = t6;
        } else {
            t6 = $[39];
        }
        t4 = `accordion-content-in-spis ${openSectionsChild.design ? "open" : ""}`;
        t3 = "accordion-content-inner";
        t1 = "accord-spis-1";
        t2 = designCourses.length > 0 ? designCourses.map({
            "MenuContent[designCourses.map()]": (course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[designCourses.map() > <div>.onClick]": ()=>handlecourseClick(course.id)
                    }["MenuContent[designCourses.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 141,
                        columnNumber: 62
                    }, this)
                }, course.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 139,
                    columnNumber: 53
                }, this)
        }["MenuContent[designCourses.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 142,
            columnNumber: 46
        }, this);
        $[1] = currentRouteId;
        $[2] = handleMouseEnter;
        $[3] = handleMouseLeave;
        $[4] = hoverStates;
        $[5] = isMobile;
        $[6] = openSections.courses;
        $[7] = openSectionsChild.design;
        $[8] = toggleSection;
        $[9] = toggleSectionChild;
        $[10] = t1;
        $[11] = t10;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t1 = $[10];
        t10 = $[11];
        t2 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
        t6 = $[16];
        t7 = $[17];
        t8 = $[18];
        t9 = $[19];
    }
    let t11;
    if ($[40] !== t1 || $[41] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[40] = t1;
        $[41] = t2;
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    let t12;
    if ($[43] !== t11 || $[44] !== t3) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t11
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[43] = t11;
        $[44] = t3;
        $[45] = t12;
    } else {
        t12 = $[45];
    }
    let t13;
    if ($[46] !== t12 || $[47] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t12
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[46] = t12;
        $[47] = t4;
        $[48] = t13;
    } else {
        t13 = $[48];
    }
    const t14 = `spis-item ${openSectionsChild.development ? "active" : ""}`;
    let t15;
    if ($[49] !== toggleSectionChild) {
        t15 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("development")
        })["MenuContent[<p>.onClick]"];
        $[49] = toggleSectionChild;
        $[50] = t15;
    } else {
        t15 = $[50];
    }
    let t16;
    if ($[51] !== t14 || $[52] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t14,
            onClick: t15,
            children: "РАЗРАБОТКА"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[51] = t14;
        $[52] = t15;
        $[53] = t16;
    } else {
        t16 = $[53];
    }
    const t17 = `accordion-content-in-spis ${openSectionsChild.development ? "open" : ""}`;
    let t18;
    if ($[54] !== currentRouteId) {
        t18 = developmentCoures.length > 0 ? developmentCoures.map({
            "MenuContent[developmentCoures.map()]": (course_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_0.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[developmentCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_0.id)
                    }["MenuContent[developmentCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_0.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 227,
                        columnNumber: 66
                    }, this)
                }, course_0.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 225,
                    columnNumber: 59
                }, this)
        }["MenuContent[developmentCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 228,
            columnNumber: 50
        }, this);
        $[54] = currentRouteId;
        $[55] = t18;
    } else {
        t18 = $[55];
    }
    let t19;
    if ($[56] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: t18
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 236,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[56] = t18;
        $[57] = t19;
    } else {
        t19 = $[57];
    }
    let t20;
    if ($[58] !== t17 || $[59] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: t19
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[58] = t17;
        $[59] = t19;
        $[60] = t20;
    } else {
        t20 = $[60];
    }
    const t21 = `spis-item ${openSectionsChild.analytics ? "active" : ""}`;
    let t22;
    if ($[61] !== toggleSectionChild) {
        t22 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("analytics")
        })["MenuContent[<p>.onClick]"];
        $[61] = toggleSectionChild;
        $[62] = t22;
    } else {
        t22 = $[62];
    }
    let t23;
    if ($[63] !== t21 || $[64] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t21,
            onClick: t22,
            children: "АНАЛИТИКА"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[63] = t21;
        $[64] = t22;
        $[65] = t23;
    } else {
        t23 = $[65];
    }
    const t24 = `accordion-content-in-spis ${openSectionsChild.analytics ? "open" : ""}`;
    let t25;
    if ($[66] !== currentRouteId) {
        t25 = analyticsCoures.length > 0 ? analyticsCoures.map({
            "MenuContent[analyticsCoures.map()]": (course_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_1.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[analyticsCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_1.id)
                    }["MenuContent[analyticsCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_1.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 277,
                        columnNumber: 64
                    }, this)
                }, course_1.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 275,
                    columnNumber: 57
                }, this)
        }["MenuContent[analyticsCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 278,
            columnNumber: 48
        }, this);
        $[66] = currentRouteId;
        $[67] = t25;
    } else {
        t25 = $[67];
    }
    let t26;
    if ($[68] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: t25
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 286,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[68] = t25;
        $[69] = t26;
    } else {
        t26 = $[69];
    }
    let t27;
    if ($[70] !== t24 || $[71] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t24,
            children: t26
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[70] = t24;
        $[71] = t26;
        $[72] = t27;
    } else {
        t27 = $[72];
    }
    const t28 = `spis-item ${openSectionsChild.marketing ? "active" : ""}`;
    let t29;
    if ($[73] !== toggleSectionChild) {
        t29 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("marketing")
        })["MenuContent[<p>.onClick]"];
        $[73] = toggleSectionChild;
        $[74] = t29;
    } else {
        t29 = $[74];
    }
    let t30;
    if ($[75] !== t28 || $[76] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t28,
            onClick: t29,
            children: "МАРКЕТИНГ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[75] = t28;
        $[76] = t29;
        $[77] = t30;
    } else {
        t30 = $[77];
    }
    const t31 = `accordion-content-in-spis ${openSectionsChild.marketing ? "open" : ""}`;
    let t32;
    if ($[78] !== currentRouteId) {
        t32 = marketingCoures.length > 0 ? marketingCoures.map({
            "MenuContent[marketingCoures.map()]": (course_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `course-item ${currentRouteId === course_2.id ? "active-course" : ""}`,
                    onClick: {
                        "MenuContent[marketingCoures.map() > <div>.onClick]": ()=>handlecourseClick(course_2.id)
                    }["MenuContent[marketingCoures.map() > <div>.onClick]"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: course_2.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 327,
                        columnNumber: 64
                    }, this)
                }, course_2.id, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                    lineNumber: 325,
                    columnNumber: 57
                }, this)
        }["MenuContent[marketingCoures.map()]"]) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Курсы пока не добавлены"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 328,
            columnNumber: 48
        }, this);
        $[78] = currentRouteId;
        $[79] = t32;
    } else {
        t32 = $[79];
    }
    let t33;
    if ($[80] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: t32
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 336,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 336,
            columnNumber: 11
        }, this);
        $[80] = t32;
        $[81] = t33;
    } else {
        t33 = $[81];
    }
    let t34;
    if ($[82] !== t31 || $[83] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t31,
            children: t33
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[82] = t31;
        $[83] = t33;
        $[84] = t34;
    } else {
        t34 = $[84];
    }
    let t35;
    if ($[85] !== t13 || $[86] !== t16 || $[87] !== t20 || $[88] !== t23 || $[89] !== t27 || $[90] !== t30 || $[91] !== t34 || $[92] !== t5 || $[93] !== t6) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t13,
                t16,
                t20,
                t23,
                t27,
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[85] = t13;
        $[86] = t16;
        $[87] = t20;
        $[88] = t23;
        $[89] = t27;
        $[90] = t30;
        $[91] = t34;
        $[92] = t5;
        $[93] = t6;
        $[94] = t35;
    } else {
        t35 = $[94];
    }
    let t36;
    if ($[95] !== t35 || $[96] !== t7) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t35
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[95] = t35;
        $[96] = t7;
        $[97] = t36;
    } else {
        t36 = $[97];
    }
    let t37;
    if ($[98] !== t36 || $[99] !== t8) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t36
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[98] = t36;
        $[99] = t8;
        $[100] = t37;
    } else {
        t37 = $[100];
    }
    const t38 = `services ${openSections.services ? "active" : ""}`;
    let t39;
    if ($[101] !== handleMouseEnter) {
        t39 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("services")
        })["MenuContent[<div>.onMouseEnter]"];
        $[101] = handleMouseEnter;
        $[102] = t39;
    } else {
        t39 = $[102];
    }
    let t40;
    if ($[103] !== handleMouseLeave) {
        t40 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("services")
        })["MenuContent[<div>.onMouseLeave]"];
        $[103] = handleMouseLeave;
        $[104] = t40;
    } else {
        t40 = $[104];
    }
    let t41;
    if ($[105] !== toggleSection) {
        t41 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("services")
        })["MenuContent[<div>.onClick]"];
        $[105] = toggleSection;
        $[106] = t41;
    } else {
        t41 = $[106];
    }
    const t42 = openSections.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : hoverStates.services ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].services.default;
    let t43;
    if ($[107] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t42
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[107] = t42;
        $[108] = t43;
    } else {
        t43 = $[108];
    }
    let t44;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Сервисы"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[109] = t44;
    } else {
        t44 = $[109];
    }
    let t45;
    if ($[110] !== t38 || $[111] !== t39 || $[112] !== t40 || $[113] !== t41 || $[114] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t38,
            onMouseEnter: t39,
            onMouseLeave: t40,
            onClick: t41,
            children: [
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[110] = t38;
        $[111] = t39;
        $[112] = t40;
        $[113] = t41;
        $[114] = t43;
        $[115] = t45;
    } else {
        t45 = $[115];
    }
    const t46 = `accordion-content-coures ${openSections.services ? "open" : ""}`;
    const t47 = `spis-item ${openSectionsChild.cloud_storage ? "active" : ""}`;
    let t48;
    if ($[116] !== toggleSectionChild) {
        t48 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("cloud_storage")
        })["MenuContent[<p>.onClick]"];
        $[116] = toggleSectionChild;
        $[117] = t48;
    } else {
        t48 = $[117];
    }
    let t49;
    if ($[118] !== t47 || $[119] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t47,
            onClick: t48,
            children: "ОБЛАЧНЫЕ ХРАНИЛИЩА"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[118] = t47;
        $[119] = t48;
        $[120] = t49;
    } else {
        t49 = $[120];
    }
    const t50 = `accordion-content-in-spis ${openSectionsChild.cloud_storage ? "open" : ""}`;
    let t51;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Google Drive"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 468,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Dropbox"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 468,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Яндекс.Диск"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 468,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 468,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[121] = t51;
    } else {
        t51 = $[121];
    }
    let t52;
    if ($[122] !== t50) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t50,
            children: t51
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[122] = t50;
        $[123] = t52;
    } else {
        t52 = $[123];
    }
    const t53 = `spis-item ${openSectionsChild.communication ? "active" : ""}`;
    let t54;
    if ($[124] !== toggleSectionChild) {
        t54 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("communication")
        })["MenuContent[<p>.onClick]"];
        $[124] = toggleSectionChild;
        $[125] = t54;
    } else {
        t54 = $[125];
    }
    let t55;
    if ($[126] !== t53 || $[127] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t53,
            onClick: t54,
            children: "КОММУНИКАЦИЯ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 494,
            columnNumber: 11
        }, this);
        $[126] = t53;
        $[127] = t54;
        $[128] = t55;
    } else {
        t55 = $[128];
    }
    const t56 = `accordion-content-in-spis ${openSectionsChild.communication ? "open" : ""}`;
    let t57;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Slack для команд"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 504,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Zoom Pro"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 504,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Notion"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 504,
                        columnNumber: 121
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 504,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[129] = t57;
    } else {
        t57 = $[129];
    }
    let t58;
    if ($[130] !== t56) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t56,
            children: t57
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[130] = t56;
        $[131] = t58;
    } else {
        t58 = $[131];
    }
    const t59 = `spis-item ${openSectionsChild.data_analytics ? "active" : ""}`;
    let t60;
    if ($[132] !== toggleSectionChild) {
        t60 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("data_analytics")
        })["MenuContent[<p>.onClick]"];
        $[132] = toggleSectionChild;
        $[133] = t60;
    } else {
        t60 = $[133];
    }
    let t61;
    if ($[134] !== t59 || $[135] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t59,
            onClick: t60,
            children: "АНАЛИТИКА ДАННЫХ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[134] = t59;
        $[135] = t60;
        $[136] = t61;
    } else {
        t61 = $[136];
    }
    const t62 = `accordion-content-in-spis ${openSectionsChild.data_analytics ? "open" : ""}`;
    let t63;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Google Data Studio"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 540,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Mixpanel"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 540,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Hotjar"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 540,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 540,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, this);
        $[137] = t63;
    } else {
        t63 = $[137];
    }
    let t64;
    if ($[138] !== t62) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t62,
            children: t63
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, this);
        $[138] = t62;
        $[139] = t64;
    } else {
        t64 = $[139];
    }
    let t65;
    if ($[140] !== t49 || $[141] !== t52 || $[142] !== t55 || $[143] !== t58 || $[144] !== t61 || $[145] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    t49,
                    t52,
                    t55,
                    t58,
                    t61,
                    t64
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 555,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[140] = t49;
        $[141] = t52;
        $[142] = t55;
        $[143] = t58;
        $[144] = t61;
        $[145] = t64;
        $[146] = t65;
    } else {
        t65 = $[146];
    }
    let t66;
    if ($[147] !== t46 || $[148] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t46,
            children: t65
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 568,
            columnNumber: 11
        }, this);
        $[147] = t46;
        $[148] = t65;
        $[149] = t66;
    } else {
        t66 = $[149];
    }
    const t67 = `Books ${openSections.Books ? "active" : ""}`;
    let t68;
    if ($[150] !== handleMouseEnter) {
        t68 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("Books")
        })["MenuContent[<div>.onMouseEnter]"];
        $[150] = handleMouseEnter;
        $[151] = t68;
    } else {
        t68 = $[151];
    }
    let t69;
    if ($[152] !== handleMouseLeave) {
        t69 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("Books")
        })["MenuContent[<div>.onMouseLeave]"];
        $[152] = handleMouseLeave;
        $[153] = t69;
    } else {
        t69 = $[153];
    }
    let t70;
    if ($[154] !== toggleSection) {
        t70 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("Books")
        })["MenuContent[<div>.onClick]"];
        $[154] = toggleSection;
        $[155] = t70;
    } else {
        t70 = $[155];
    }
    const t71 = openSections.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : hoverStates.Books ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Books.default;
    let t72;
    if ($[156] !== t71) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t71
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[156] = t71;
        $[157] = t72;
    } else {
        t72 = $[157];
    }
    let t73;
    if ($[158] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Книги"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[158] = t73;
    } else {
        t73 = $[158];
    }
    let t74;
    if ($[159] !== t67 || $[160] !== t68 || $[161] !== t69 || $[162] !== t70 || $[163] !== t72) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t67,
            onMouseEnter: t68,
            onMouseLeave: t69,
            onClick: t70,
            children: [
                t72,
                t73
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[159] = t67;
        $[160] = t68;
        $[161] = t69;
        $[162] = t70;
        $[163] = t72;
        $[164] = t74;
    } else {
        t74 = $[164];
    }
    const t75 = `accordion-content-coures ${openSections.Books ? "open" : ""}`;
    const t76 = `spis-item ${openSectionsChild.soft_skills ? "active" : ""}`;
    let t77;
    if ($[165] !== toggleSectionChild) {
        t77 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("soft_skills")
        })["MenuContent[<p>.onClick]"];
        $[165] = toggleSectionChild;
        $[166] = t77;
    } else {
        t77 = $[166];
    }
    let t78;
    if ($[167] !== t76 || $[168] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t76,
            onClick: t77,
            children: "СОФТ СКИЛЛЫ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[167] = t76;
        $[168] = t77;
        $[169] = t78;
    } else {
        t78 = $[169];
    }
    const t79 = `accordion-content-in-spis ${openSectionsChild.soft_skills ? "open" : ""}`;
    let t80;
    if ($[170] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"7 навыков высокоэффективных людей"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 658,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Как работать 4 часа в неделю"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 658,
                        columnNumber: 125
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Атомные привычки"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 658,
                        columnNumber: 162
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 658,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 658,
            columnNumber: 11
        }, this);
        $[170] = t80;
    } else {
        t80 = $[170];
    }
    let t81;
    if ($[171] !== t79) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t79,
            children: t80
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, this);
        $[171] = t79;
        $[172] = t81;
    } else {
        t81 = $[172];
    }
    const t82 = `spis-item ${openSectionsChild.business_and_startups ? "active" : ""}`;
    let t83;
    if ($[173] !== toggleSectionChild) {
        t83 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("business_and_startups")
        })["MenuContent[<p>.onClick]"];
        $[173] = toggleSectionChild;
        $[174] = t83;
    } else {
        t83 = $[174];
    }
    let t84;
    if ($[175] !== t82 || $[176] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t82,
            onClick: t83,
            children: "БИЗНЕС И СТАРТАПЫ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 684,
            columnNumber: 11
        }, this);
        $[175] = t82;
        $[176] = t83;
        $[177] = t84;
    } else {
        t84 = $[177];
    }
    const t85 = `accordion-content-in-spis ${openSectionsChild.business_and_startups ? "open" : ""}`;
    let t86;
    if ($[178] === Symbol.for("react.memo_cache_sentinel")) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Стартап за $100"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 694,
                        columnNumber: 83
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Бизнес с нуля"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 694,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: '"Метод бережливого стартапа"'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 694,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 694,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[178] = t86;
    } else {
        t86 = $[178];
    }
    let t87;
    if ($[179] !== t85) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t85,
            children: t86
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[179] = t85;
        $[180] = t87;
    } else {
        t87 = $[180];
    }
    let t88;
    if ($[181] !== t78 || $[182] !== t81 || $[183] !== t84 || $[184] !== t87) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accord-spis-1",
            children: [
                t78,
                t81,
                t84,
                t87
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 709,
            columnNumber: 11
        }, this);
        $[181] = t78;
        $[182] = t81;
        $[183] = t84;
        $[184] = t87;
        $[185] = t88;
    } else {
        t88 = $[185];
    }
    let t89;
    if ($[186] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accord-spis-2"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 720,
            columnNumber: 11
        }, this);
        $[186] = t89;
    } else {
        t89 = $[186];
    }
    let t90;
    if ($[187] !== t88) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: [
                t88,
                t89
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 727,
            columnNumber: 11
        }, this);
        $[187] = t88;
        $[188] = t90;
    } else {
        t90 = $[188];
    }
    let t91;
    if ($[189] !== t75 || $[190] !== t90) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t75,
            children: t90
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[189] = t75;
        $[190] = t90;
        $[191] = t91;
    } else {
        t91 = $[191];
    }
    const t92 = `Goods ${openSections.Goods ? "active" : ""}`;
    let t93;
    if ($[192] !== handleMouseEnter) {
        t93 = ({
            "MenuContent[<div>.onMouseEnter]": ()=>handleMouseEnter("Goods")
        })["MenuContent[<div>.onMouseEnter]"];
        $[192] = handleMouseEnter;
        $[193] = t93;
    } else {
        t93 = $[193];
    }
    let t94;
    if ($[194] !== handleMouseLeave) {
        t94 = ({
            "MenuContent[<div>.onMouseLeave]": ()=>handleMouseLeave("Goods")
        })["MenuContent[<div>.onMouseLeave]"];
        $[194] = handleMouseLeave;
        $[195] = t94;
    } else {
        t94 = $[195];
    }
    let t95;
    if ($[196] !== toggleSection) {
        t95 = ({
            "MenuContent[<div>.onClick]": ()=>toggleSection("Goods")
        })["MenuContent[<div>.onClick]"];
        $[196] = toggleSection;
        $[197] = t95;
    } else {
        t95 = $[197];
    }
    const t96 = openSections.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : hoverStates.Goods ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.hover : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useHover$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconConfig"].Goods.default;
    let t97;
    if ($[198] !== t96) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t96
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 776,
            columnNumber: 11
        }, this);
        $[198] = t96;
        $[199] = t97;
    } else {
        t97 = $[199];
    }
    let t98;
    if ($[200] === Symbol.for("react.memo_cache_sentinel")) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Товары"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 784,
            columnNumber: 11
        }, this);
        $[200] = t98;
    } else {
        t98 = $[200];
    }
    let t99;
    if ($[201] !== t92 || $[202] !== t93 || $[203] !== t94 || $[204] !== t95 || $[205] !== t97) {
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t92,
            onMouseEnter: t93,
            onMouseLeave: t94,
            onClick: t95,
            children: [
                t97,
                t98
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 791,
            columnNumber: 11
        }, this);
        $[201] = t92;
        $[202] = t93;
        $[203] = t94;
        $[204] = t95;
        $[205] = t97;
        $[206] = t99;
    } else {
        t99 = $[206];
    }
    const t100 = `accordion-content-coures ${openSections.Goods ? "open" : ""}`;
    const t101 = `spis-item ${openSectionsChild.subrcriptions_and_licenses ? "active" : ""}`;
    let t102;
    if ($[207] !== toggleSectionChild) {
        t102 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("subrcriptions_and_licenses")
        })["MenuContent[<p>.onClick]"];
        $[207] = toggleSectionChild;
        $[208] = t102;
    } else {
        t102 = $[208];
    }
    let t103;
    if ($[209] !== t101 || $[210] !== t102) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t101,
            onClick: t102,
            children: "ПОДПИСКИ И ЛИЦЕНЗИИ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 815,
            columnNumber: 12
        }, this);
        $[209] = t101;
        $[210] = t102;
        $[211] = t103;
    } else {
        t103 = $[211];
    }
    const t104 = `accordion-content-in-spis ${openSectionsChild.subrcriptions_and_licenses ? "open" : ""}`;
    let t105;
    if ($[212] === Symbol.for("react.memo_cache_sentinel")) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Годовые лицензии ПО"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 825,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Подписка на сервисы"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 825,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Доступ к библиотекам"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 825,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 825,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 825,
            columnNumber: 12
        }, this);
        $[212] = t105;
    } else {
        t105 = $[212];
    }
    let t106;
    if ($[213] !== t104) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t104,
            children: t105
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 832,
            columnNumber: 12
        }, this);
        $[213] = t104;
        $[214] = t106;
    } else {
        t106 = $[214];
    }
    const t107 = `spis-item ${openSectionsChild.mersch_and_branding ? "active" : ""}`;
    let t108;
    if ($[215] !== toggleSectionChild) {
        t108 = ({
            "MenuContent[<p>.onClick]": ()=>toggleSectionChild("mersch_and_branding")
        })["MenuContent[<p>.onClick]"];
        $[215] = toggleSectionChild;
        $[216] = t108;
    } else {
        t108 = $[216];
    }
    let t109;
    if ($[217] !== t107 || $[218] !== t108) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t107,
            onClick: t108,
            children: "МЕРЧ И БРЕНДИНГ"
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 851,
            columnNumber: 12
        }, this);
        $[217] = t107;
        $[218] = t108;
        $[219] = t109;
    } else {
        t109 = $[219];
    }
    const t110 = `accordion-content-in-spis ${openSectionsChild.mersch_and_branding ? "open" : ""}`;
    let t111;
    if ($[220] === Symbol.for("react.memo_cache_sentinel")) {
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Футболки с логотипом"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 861,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Кружки для программистов"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 861,
                        columnNumber: 111
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Стикеры с мемами про код"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                        lineNumber: 861,
                        columnNumber: 142
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 861,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 861,
            columnNumber: 12
        }, this);
        $[220] = t111;
    } else {
        t111 = $[220];
    }
    let t112;
    if ($[221] !== t110) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t110,
            children: t111
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 868,
            columnNumber: 12
        }, this);
        $[221] = t110;
        $[222] = t112;
    } else {
        t112 = $[222];
    }
    let t113;
    if ($[223] !== t103 || $[224] !== t106 || $[225] !== t109 || $[226] !== t112) {
        t113 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "accordion-content-inner",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "accord-spis-1",
                children: [
                    t103,
                    t106,
                    t109,
                    t112
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
                lineNumber: 876,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 876,
            columnNumber: 12
        }, this);
        $[223] = t103;
        $[224] = t106;
        $[225] = t109;
        $[226] = t112;
        $[227] = t113;
    } else {
        t113 = $[227];
    }
    let t114;
    if ($[228] !== t100 || $[229] !== t113) {
        t114 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t100,
            children: t113
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 887,
            columnNumber: 12
        }, this);
        $[228] = t100;
        $[229] = t113;
        $[230] = t114;
    } else {
        t114 = $[230];
    }
    let t115;
    if ($[231] !== t10 || $[232] !== t114 || $[233] !== t37 || $[234] !== t45 || $[235] !== t66 || $[236] !== t74 || $[237] !== t9 || $[238] !== t91 || $[239] !== t99) {
        t115 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t37,
                t45,
                t66,
                t74,
                t91,
                t99,
                t114
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx",
            lineNumber: 896,
            columnNumber: 12
        }, this);
        $[231] = t10;
        $[232] = t114;
        $[233] = t37;
        $[234] = t45;
        $[235] = t66;
        $[236] = t74;
        $[237] = t9;
        $[238] = t91;
        $[239] = t99;
        $[240] = t115;
    } else {
        t115 = $[240];
    }
    return t115;
}
_s(MenuContent, "9P1QKaZNNZUfLJ2ii/1pT1kS2Es=", true, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$scripts$2f$useAcordion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccordionChild"]
    ];
});
_c = MenuContent;
var _c;
__turbopack_context__.k.register(_c, "MenuContent");
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
// ... остальные импорты
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/app/src/components/Header/MenuContent.tsx [app-client] (ecmascript)"); // Импортируем новый компонент
;
;
;
function Header() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "8a392be4e3776431fab638c33bb3b9ecedbdf3a11a881dcebb9e87a8ce9a3732") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a392be4e3776431fab638c33bb3b9ecedbdf3a11a881dcebb9e87a8ce9a3732";
    }
    const handlecourseClick = _HeaderHandlecourseClick;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: logo.src,
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                        lineNumber: 16,
                        columnNumber: 50
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 18
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "search-container"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 89
                }, this),
                isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mobile-menu-toggle",
                    onClick: _HeaderButtonOnClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: Icon_Hamburger.src,
                        alt: "\u041C\u0435\u043D\u044E"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                        lineNumber: 16,
                        columnNumber: 212
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 142
                }, this),
                !isMobileView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isMobile: false,
                    currentRouteId: currentRouteId,
                    onCourseClick: handlecourseClick
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 305
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-menu-modal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-menu-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: _HeaderButtonOnClick2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: Icon_Close.src,
                                    alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                                    lineNumber: 16,
                                    columnNumber: 536
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                                lineNumber: 16,
                                columnNumber: 496
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                            lineNumber: 16,
                            columnNumber: 460
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mobile-menu-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$app$2f$src$2f$components$2f$Header$2f$MenuContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                isMobile: true,
                                currentRouteId: currentRouteId,
                                onCourseClick: handlecourseClick
                            }, void 0, false, {
                                fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                                lineNumber: 16,
                                columnNumber: 667
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                            lineNumber: 16,
                            columnNumber: 630
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 425
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/app/src/components/Header/Header.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Header;
function _HeaderButtonOnClick2() {
    return setIsMobileMenuOpen(false);
}
function _HeaderButtonOnClick() {
    return setIsMobileMenuOpen(true);
}
function _HeaderHandlecourseClick(courseId) {
    console.log("\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441:", courseId);
    const params = new URLSearchParams(searchParams.toString());
    params.set("content", courseId);
    router.replace(`/?${params.toString()}`, {
        scroll: false
    });
    setIsMobileMenuOpen(false);
}
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

//# sourceMappingURL=Desktop_React_top-app_app_9011f7d5._.js.map