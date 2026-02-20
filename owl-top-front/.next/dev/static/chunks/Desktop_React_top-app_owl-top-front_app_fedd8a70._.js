(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/src/components/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RouteContent({ routeId }) {
    _s();
    const [Component, setComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [routeData, setRouteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteContent.useEffect": ()=>{
            const loadComponent = {
                "RouteContent.useEffect.loadComponent": async ()=>{
                    setLoading(true);
                    setError(null);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areRoutesInitialized"])()) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForRoutes"])();
                    }
                    try {
                        const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$src$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRouteById"])(routeId);
                        if (!route) {
                            throw new Error(`Контент "${routeId}" не найден`);
                        }
                        const module = await route.component();
                        setRouteData(route);
                        setComponent({
                            "RouteContent.useEffect.loadComponent": ()=>module
                        }["RouteContent.useEffect.loadComponent"]);
                    } catch (err) {
                        console.error('Ошибка загрузки компонента:', err);
                        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
                    } finally{
                        setLoading(false);
                    }
                }
            }["RouteContent.useEffect.loadComponent"];
            loadComponent();
        }
    }["RouteContent.useEffect"], [
        routeId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Загрузка контента..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Ошибка загрузки"
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
            lineNumber: 46,
            columnNumber: 12
        }, this);
    }
    if (!Component) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "not-found-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Контент не найден"
            }, void 0, false, {
                fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
                lineNumber: 53,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
            lineNumber: 52,
            columnNumber: 12
        }, this);
    }
    if (!routeData) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Нет данных"
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 56,
        columnNumber: 26
    }, this);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component);
}
_s(RouteContent, "WuF6zLruQWo/Ch/3UwVSTXi/zU8=");
_c = RouteContent;
var _c;
__turbopack_context__.k.register(_c, "RouteContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$RouteContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "5d327fbd392464eddf78e59834df7ae1834f9bca88b871bcb08963a616297cc6") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d327fbd392464eddf78e59834df7ae1834f9bca88b871bcb08963a616297cc6";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("content") || "home";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const routeId = t0;
    console.log("page.tsx: routeId =", routeId);
    let t1;
    if ($[3] !== routeId) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$RouteContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            routeId: routeId
        }, void 0, false, {
            fileName: "[project]/Desktop/React/top-app/owl-top-front/app/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = routeId;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(HomePage, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_React_top-app_owl-top-front_app_fedd8a70._.js.map