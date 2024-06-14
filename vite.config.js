'use strict'
// import { defineConfig, loadEnv } from 'vite'
const { createVuePlugin } = require('vite-plugin-vue2')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      "^/api/": {
        target: "http://116.211.148.80:8081/fast-service",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\//, ""),
        cookieDomainRewrite: {
          '*': '',
        },
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
}
