(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/React/top-app/owl-top-front/app/useRoutes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoutes",
    ()=>useRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useRoutes() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f30e6bc6f1b715ece8182f38df1d539aed2ee0416590b347f82988a1f5ee9530") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f30e6bc6f1b715ece8182f38df1d539aed2ee0416590b347f82988a1f5ee9530";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useRoutes[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuAPI"].getRoutes().then({
                    "useRoutes[useEffect() > (anonymous)()]": (data)=>{
                        setRoutes(data);
                        setLoading(false);
                    }
                }["useRoutes[useEffect() > (anonymous)()]"]);
            }
        })["useRoutes[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== loading || $[5] !== routes) {
        t3 = {
            routes,
            loading
        };
        $[4] = loading;
        $[5] = routes;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(useRoutes, "be3rCt6+t6kDytWt3H0Uq/XwUzE=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/useRoutes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function RouteContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const contentSlug = searchParams.get('content') || 'home';
    const { routes: dbRoutes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"])();
    const [Component, setComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [routeData, setRouteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteContent.useEffect": ()=>{
            const loadContent = {
                "RouteContent.useEffect.loadContent": async ()=>{
                    // Ждем загрузки маршрутов с бэка
                    if (routesLoading) return;
                    if (contentSlug === 'home') {
                        const homeModule = await (()=>{
                            const e = new Error("Cannot find module './default_page/Default_page'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })();
                        setComponent({
                            "RouteContent.useEffect.loadContent": ()=>homeModule.default
                        }["RouteContent.useEffect.loadContent"]);
                        setLoading(false);
                        return;
                    }
                    try {
                        // 1. Ищем динамические данные в массиве из БД
                        const routeInfo = dbRoutes.find({
                            "RouteContent.useEffect.loadContent.routeInfo": (r)=>r.id === contentSlug
                        }["RouteContent.useEffect.loadContent.routeInfo"]);
                        if (!routeInfo) throw new Error(`Маршрут ${contentSlug} не найден в БД`);
                        // 2. Сохраняем динамические данные
                        setRouteData(routeInfo);
                        // 3. Ищем статический компонент
                        const loader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["componentMap"][contentSlug] || ({
                            "RouteContent.useEffect.loadContent": ()=>(()=>{
                                    const e = new Error("Cannot find module './stub/stub'");
                                    e.code = 'MODULE_NOT_FOUND';
                                    throw e;
                                })()
                        })["RouteContent.useEffect.loadContent"];
                        const module = await loader();
                        setComponent({
                            "RouteContent.useEffect.loadContent": ()=>module.default
                        }["RouteContent.useEffect.loadContent"]);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : 'Ошибка загрузки');
                    } finally{
                        setLoading(false);
                    }
                }
            }["RouteContent.useEffect.loadContent"];
            loadContent();
        }
    }["RouteContent.useEffect"], [
        contentSlug,
        routesLoading,
        dbRoutes
    ]);
    if (loading || routesLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Загрузка..."
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 48,
        columnNumber: 40
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "Ошибка: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 49,
        columnNumber: 21
    }, this);
    if (!Component || !routeData) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Данные не загружены"
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 50,
        columnNumber: 40
    }, this);
    // Передаем данные в компонент
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
        routeData
    });
}
_s(RouteContent, "cWmH28EtI1AXQty4OrABi/99k2c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$useRoutes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoutes"]
    ];
});
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

//# sourceMappingURL=Desktop_React_top-app_owl-top-front_app_ff1d9f8c._.js.map