module.exports = [
"[project]/Desktop/React/top-app/owl-top-front/app/useRoutes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRoutes",
    ()=>useRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useRoutes() {
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuAPI"].getRoutes().then((data)=>{
            setRoutes(data);
            setLoading(false);
        });
    }, []);
    return {
        routes,
        loading
    };
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RouteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$useRoutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/useRoutes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function RouteContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const contentSlug = searchParams.get('content') || 'home';
    const { routes: dbRoutes, loading: routesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$useRoutes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRoutes"])();
    const [Component, setComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [routeData, setRouteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadContent = async ()=>{
            // Ждем загрузки маршрутов с бэка
            if (routesLoading) return;
            if (contentSlug === 'home') {
                const homeModule = await (()=>{
                    const e = new Error("Cannot find module './default_page/Default_page'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
                setComponent(()=>homeModule.default);
                setLoading(false);
                return;
            }
            try {
                // 1. Ищем динамические данные в массиве из БД
                const routeInfo = dbRoutes.find((r)=>r.id === contentSlug);
                if (!routeInfo) throw new Error(`Маршрут ${contentSlug} не найден в БД`);
                // 2. Сохраняем динамические данные
                setRouteData(routeInfo);
                // 3. Ищем статический компонент
                const loader = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["componentMap"][contentSlug] || (()=>(()=>{
                        const e = new Error("Cannot find module './stub/stub'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })());
                const module = await loader();
                setComponent(()=>module.default);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка загрузки');
            } finally{
                setLoading(false);
            }
        };
        loadContent();
    }, [
        contentSlug,
        routesLoading,
        dbRoutes
    ]);
    if (loading || routesLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Загрузка..."
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 51,
        columnNumber: 40
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            "Ошибка: ",
            error
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 52,
        columnNumber: 21
    }, this);
    if (!Component || !routeData) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Данные не загружены"
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx",
        lineNumber: 53,
        columnNumber: 40
    }, this);
    // Передаем данные в компонент
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
        routeData
    });
}
}),
"[project]/Desktop/React/top-app/owl-top-front/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$RouteContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/React/top-app/owl-top-front/app/RouteContent.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function HomePage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const routeId = searchParams.get('content') || 'home';
    console.log('page.tsx: routeId =', routeId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$React$2f$top$2d$app$2f$owl$2d$top$2d$front$2f$app$2f$RouteContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        routeId: routeId
    }, void 0, false, {
        fileName: "[project]/Desktop/React/top-app/owl-top-front/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_React_top-app_owl-top-front_app_c9563ff6._.js.map