import solid from '@solidjs/vite-plugin'
import UnoCSS from '@unocss/vite'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    plugins: [UnoCSS(), solid()],
  },
})
