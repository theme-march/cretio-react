import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layout': path.resolve(__dirname, 'src/layout'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // @ts-expect-error: vite's SassPreprocessorOptions doesn't include 'api' yet
        api: 'modern-compiler', // or "modern"
        silenceDeprecations: ['import', 'global-builtin'],
      },
    },
  },
})

