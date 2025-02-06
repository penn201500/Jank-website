import { defineConfig } from 'umi';
import { theme } from './theme.config';
import { proxy } from './proxy';
import path from 'path';
import { routes } from './routes';

export default defineConfig({
    base: '/', // 设置路由前缀，通常用于部署到非根目录
    hash: true, // 配置是否让生成的文件包含 hash 后缀，用于增量发布和避免浏览器加载缓存
    outputPath: 'dist', // 打包输出路径
    npmClient: 'pnpm', // 指定 npm 客户端
    routes, // 路由配置
    proxy, // 代理配置
    // theme, // 主题配置
    alias: {
        "~": path.resolve(__dirname, "../"),
        "@": path.resolve(__dirname, "../src"),
        "@assets": path.resolve(__dirname, "../src/assets"),
        '@utils': path.resolve(__dirname, "../src/utils"),
        // 组件库
        '@components': path.resolve(__dirname, "../src/components"),
        // 系统配置
        '@detailsConfig': path.resolve(__dirname, "./details.config"),
        // 全局services
        '@services': path.resolve(__dirname, "../src/services"),
        // 菜单配置项
        "@menuConfig": path.resolve(__dirname, "./menu.config.js"),
        // 版本日志管理
        "@versionsConfig": path.resolve(__dirname, './versions.config.json'),
    },

    // 插件配置
    plugins: [
        require.resolve('@umijs/plugins/dist/tailwindcss'),
    ],

    // Tailwind CSS 配置
    tailwindcss: {},
});
