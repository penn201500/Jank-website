export const routes = [
    { name: "首页", icon: "", path: "/", component: "@/pages/index" },
    { name: "文章", path: "/articles/:id", component: "@/pages/articles/$id.tsx" },
]