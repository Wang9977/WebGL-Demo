// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   base:'/WebGL-Demo/'   // 对应GitHub项目名称
// })

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/WebGL-Demo" : "/"
};