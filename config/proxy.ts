/**
 * 请注意，在生产环境中，代理配置不会生效，因此未在此处进行生产环境的设置。
 * ---------------------------------------
 * 此代理配置不适用于生产环境，因此生产环境的相关配置未被包含在这里。
 * 详细说明请参考：https://pro.ant.design/docs.deploy
 */
export const proxy = {
    dev: {
        // localhost:8000/** -> https://preview.pro.ant.design/api/**
        '/api/': {
            // 开发环境
            target: "https://preview.pro.ant.design",
            // 从 http 代理到 https
            // 依赖 origin 的功能可能需要这个，比如 cookie
            changeOrigin: true,
            pathRewrite: { '^': '' },
        }
    },
    test: {
        '/api/': {
            // 测试环境
            target: "https://proapi.azurewebsites.net",
            changeOrigin: true,
            pathRewrite: { '^': '' },
        },
    },
    pre: {
        '/api/': {
            // 正式环境
            target: ""
        }
    }
}