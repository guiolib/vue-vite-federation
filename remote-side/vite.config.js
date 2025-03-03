import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3001/',
  plugins: [
    tailwindcss(),
    vue(),
    federation({
      name: 'App',
      manifest: true,
      // filename: 'app.js',
      exposes: {
        './App': './src/App.vue'
      },
    })
  ],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss, autoprefixer]
  //   }
  // },
  server: {
    port: 3001
  },
  preview: {
    port: 3001
  }
})
