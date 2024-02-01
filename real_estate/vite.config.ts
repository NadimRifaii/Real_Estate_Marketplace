import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: "http://localhost:5000",//each time you make a request to /api , add this at the beginning
  //       secure: false
  //     },
  //   },
  // },
  plugins: [react()],
})
