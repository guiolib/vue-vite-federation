import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3000/',
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'host-template',
      remotes: {
        core: {
          type: 'module',
          // name: "core",
          entry: "http://localhost:3001/mf-manifest.json"
        }
      },
      shared: {
        vue: {}
      }
    })
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       tailwindcss,
  //       autoprefixer,
  //     ],
  //   },
  // },
  build: {
    target: ['chrome100', 'firefox90',],
    rollupOptions: {
      // external:['app'],
      // output: {
      //   manualChunks: {
      //     vue: ['vue']
      //   }
      // }
    }
  },
  preview: {
    port: 3000
  }
})