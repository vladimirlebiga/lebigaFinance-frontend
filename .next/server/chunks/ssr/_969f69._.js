module.exports = {

"[project]/src/app/[lang]/dictionaries.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDictionary": (()=>getDictionary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
const dictionaries = {
    en: ()=>__turbopack_require__("[project]/src/app/dictionaries/en.json (json, async loader)")(__turbopack_import__).then((module)=>module.default),
    // nl: () => import('../dictionaries/nl.json').then((module) => module.default),
    uk: ()=>__turbopack_require__("[project]/src/app/dictionaries/uk.json (json, async loader)")(__turbopack_import__).then((module)=>module.default),
    ru: ()=>__turbopack_require__("[project]/src/app/dictionaries/ru.json (json, async loader)")(__turbopack_import__).then((module)=>module.default)
};
async function getDictionary(locale) {
    // If the passed locale is not one of the known keys, fallback to 'en'
    if (![
        'en',
        'uk',
        'ru'
    ].includes(locale)) {
        locale = 'en';
    }
    return dictionaries[locale]();
}
}}),
"[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// import { getDictionary } from './dictionaries';
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ lang: 'en' | 'nl' | 'uk' | 'ru' }>;
// }) {
//   const { lang } = await params;
//   const dict = await getDictionary(lang); // en
//   console.log(dict);
//   return <button>hello sunday</button>; // Add to Cart
// }
// import { getDictionary } from './dictionaries';
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ lang: 'en' | 'uk' | 'ru' }>;
// }) {
//   const { lang } = await params;
//   console.log(lang);
//   console.log(getDictionary);
//   const dict = await getDictionary(lang); // en
//   console.log(dict);
//   return <button>hello</button>; // Add to Cart
// }
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/[lang]/dictionaries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
async function Page({ params }) {
    const { lang } = params;
    // If `lang` is not recognized, redirect to /en
    if (![
        'en',
        'uk',
        'ru'
    ].includes(lang)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/en');
    }
    // Now that we know it's valid, fetch the dictionary
    const dict = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$lang$5d2f$dictionaries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDictionary"])(lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        children: dict['Add to Cart']
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/page.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/[lang]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_969f69._.js.map