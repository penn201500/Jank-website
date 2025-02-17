// details.config.ts
export const details = {
    // 数据请求api
    apiPrefix: process.env.UMI_PUBLIC_API_URL || '',
    iframePrefix: process.env.IFRAME_PREFIX || '',
    loginLogo: '@/assets/logo.png',
    sysLogo: '@/assets/logo.png',
    // 登录页名称
    loginName: 'Jank',
    // 系统名称
    sysName: 'Jank',
    // 版权
    copyright: "2025 fenderisfine@outlook.com.",
    // 是否开启菜单权限校验
    menuPermission: true,
    // table 默认一页条数
    pageSize: 5,
    // iconFont 地址
    iconUrl: '//at.alicdn.com/t/font_1030595_depmdbpf3yc.js',
    // 系统默认首页
    sysDefultPage: {
        pathname: '@/pages/index',
        state: {
            key: 'gitDataV',
            pathtitles: [{ title: 'gitDataV', icon: 'github' }],
        }
    },
};
