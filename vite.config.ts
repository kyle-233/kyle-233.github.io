import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer as rollupPluginVisualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': 'src',
      'pages': 'src/pages',
      'request': 'src/request'
    },
  },
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    rollupPluginVisualizer({ open: true })
  ],
})
