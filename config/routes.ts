export const routes = [
    { name: "首页", icon: "", path: "/", component: "@/pages/index" },
    { name: "文章", path: "/posts/:id", component: "@/pages/posts/$id.tsx" },
    { name: "关于", path: "/about", component: "@/pages/about" },
    { name: "鸣谢", path: "sponsor", component: "@/pages/sponsor" }
]