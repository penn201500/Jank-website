import { defineConfig } from 'umi';
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
    alias: {
        "@": path.resolve(__dirname, "../src"), // 源代码路径别名
        "@config": path.resolve(__dirname, "./"), // 基本系统配置路径别名
        "@versionsConfig": path.resolve(__dirname, './versions.config.json'), // 版本日志管理路径别名
    },

    // 插件配置
    plugins: [
        require.resolve('@umijs/plugins/dist/tailwindcss'),
    ],

    // Tailwind CSS 配置
    tailwindcss: {},
});
