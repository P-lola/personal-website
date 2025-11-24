import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './src/crapsgame/crapsgame.js',
          dest: './src/crapsgame/', 
        },
        {
          src: './src/randomquotegenerator/randomquotegenerator.js',
          dest: './src/randomquotegenerator/', 
        },
      ],
    }),
  ],
})
