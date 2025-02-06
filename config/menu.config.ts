export interface MenuItem {
    title: string;
    link: string;
    key: string;
    icon: string;
    children?: MenuItem[];
}

export const menu: MenuItem[] = [
    {
        title: "首页",
        link: "/",
        key: "home",
        icon: "",
    },
    {
        title: "文档",
        link: "/docs",
        key: "docs",
        icon: "",
        // children: [
        //     {
        //         title: "简介",
        //         link: "/docs/intro",
        //         key: "intro",
        //         icon: "",
        //     },
        // ],
    },
    {
        title: "论坛",
        link: "/forum",
        key: "forum",
        icon: "",
    },
    {
        title: "路线图",
        link: "/roadmap",
        key: "roadmap",
        icon: "",
    },
    {
        title: "案例展示",
        link: "/case",
        key: "case",
        icon: "",
    },
    {
        title: "关于",
        link: "/about",
        key: "about",
        icon: "",
    },
];