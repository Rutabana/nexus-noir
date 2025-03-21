module.exports = {

"[project]/src/util/tags.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "areas": (()=>areas),
    "tags": (()=>tags)
});
var areas = /*#__PURE__*/ function(areas) {
    areas["Fitness"] = "fitness";
    areas["Creativity"] = "creativity";
    areas["Reading"] = "reading";
    areas["Coding"] = "coding";
    areas["Life"] = "life";
    areas["Career"] = "career";
    return areas;
}({});
const tags = {
    AWS: {
        area: "coding",
        label: 'AWS',
        color: '#F7A81B'
    },
    WebDevelopment: {
        area: "coding",
        label: 'Web Development',
        color: '#3490DC'
    },
    Politics: {
        area: "life",
        label: 'Politics',
        color: '#EF4444'
    },
    History: {
        area: "life",
        label: 'History',
        color: '#4B5563'
    },
    Theology: {
        area: "life",
        label: 'Theology',
        color: '#F59E0B'
    },
    WeightLoss: {
        area: "fitness",
        label: 'Weight Loss',
        color: '#10B981'
    },
    StrengthTraining: {
        area: "fitness",
        label: 'Strength Training',
        color: '#9333EA'
    },
    JobHunt: {
        area: "career",
        label: 'Job Hunt',
        color: '#2563EB'
    },
    Networking: {
        area: "career",
        label: 'Networking',
        color: '#14B8A6'
    },
    DistributedSystems: {
        area: "coding",
        label: 'Distributed Systems',
        color: '#7C3AED'
    },
    PersonalProjects: {
        area: "coding",
        label: 'Personal Projects',
        color: '#F97316'
    }
};
}}),
"[project]/src/lib/mock-data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockPosts": (()=>mockPosts),
    "timelineEvents": (()=>timelineEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/util/tags.ts [app-ssr] (ecmascript)");
;
const mockPosts = [
    {
        id: 1,
        slug: 'project-nairobi-building-a-distributed-analytics-platform-on-aws',
        coverImage: '/images/richard-horvath-patterns.jpg',
        title: 'Project Nairobi: Building a Distributed Analytics Platform on AWS',
        authorName: 'Loïc Rutabana',
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].PersonalProjects,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].AWS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].DistributedSystems
        ],
        authorPic: '/images/me.jpg',
        previewText: 'This is a preview of my first blog post. I have a lot to share about my journey in coding, fitness, and life. Stay tuned for more insights...',
        contentPath: '/blogs/first.md'
    }
];
const timelineEvents = [
    {
        date: '2025-03-01',
        title: 'Started New Workout Regimen',
        description: 'Began a new plan with strength training and cardio.',
        category: 'Fitness'
    },
    {
        date: '2025-03-05',
        title: 'Launched Project Nairobi',
        description: 'Started building a distributed analytics platform on AWS, exploring cloud scalability and distributed systems.',
        category: 'Coding'
    },
    {
        date: '2025-03-10',
        title: 'Published First Blog Post',
        description: 'Shared my journey in coding, fitness, and personal growth in my first blog post.',
        category: 'Journal'
    }
];
}}),
"[project]/src/app/timeline/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TimelinePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-ssr] (ecmascript)");
'use client';
;
;
function TimelinePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8 text-center",
                children: "Timeline"
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-l-2 border-gray-700",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timelineEvents"].map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-3 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-700"
                            }, void 0, false, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400",
                                children: event.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-white",
                                children: event.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_9fb73a88._.js.map