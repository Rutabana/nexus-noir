(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_a2a3ebe3._.js", {

"[project]/src/util/tags.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/journal/[slug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPostPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/util/tags.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Mock posts data – replace this with your real data fetching later
const mockPosts = [
    {
        id: 1,
        slug: 'project-nairobi-building-a-distributed-analytics-platform-on-aws',
        coverImage: '/images/richard-horvath-patterns.jpg',
        title: 'Project Nairobi: Building a Distributed Analytics Platform on AWS',
        authorName: 'Loïc Rutabana',
        tags: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tags"].PersonalProjects,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tags"].AWS,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$util$2f$tags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tags"].DistributedSystems
        ],
        authorPic: '/images/me.jpg',
        previewText: 'This is a preview of my first blog post. I have a lot to share about my journey in coding, fitness, and life. Stay tuned for more insights...',
        // The path to your MD file in the public folder:
        contentPath: '/blogs/first.md'
    }
];
function BlogPostPage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const post = mockPosts.find((p)=>p.slug === slug);
    // We'll fetch the markdown file and store its text here
    const [mdContent, setMdContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Fetch the .md file when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPostPage.useEffect": ()=>{
            if (post && post.contentPath) {
                fetch(post.contentPath).then({
                    "BlogPostPage.useEffect": (res)=>res.text()
                }["BlogPostPage.useEffect"]).then({
                    "BlogPostPage.useEffect": (text)=>setMdContent(text)
                }["BlogPostPage.useEffect"]).catch({
                    "BlogPostPage.useEffect": (err)=>console.error('Error loading markdown:', err)
                }["BlogPostPage.useEffect"]);
            }
        }
    }["BlogPostPage.useEffect"], [
        post
    ]);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold",
                children: "Post not found"
            }, void 0, false, {
                fileName: "[project]/src/app/journal/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/journal/[slug]/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/journal/[slug]/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: post.coverImage,
                    alt: post.title,
                    className: "w-full h-56 object-cover rounded-md"
                }, void 0, false, {
                    fileName: "[project]/src/app/journal/[slug]/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/journal/[slug]/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-gray-300",
                children: [
                    "By ",
                    post.authorName
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/journal/[slug]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-invert max-w-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    children: mdContent
                }, void 0, false, {
                    fileName: "[project]/src/app/journal/[slug]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/journal/[slug]/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/journal/[slug]/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(BlogPostPage, "/n1ti2IHP/bS//adZ/Ya9OueMyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = BlogPostPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a2a3ebe3._.js.map