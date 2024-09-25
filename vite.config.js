import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

export default defineConfig({
  server: {
    port: 5555,
    host: '0.0.0.0',
  },
  define: {
    global: 'globalThis',
  },
  build: {
    target: ['esnext', 'chrome89', 'edge89', 'firefox89', 'safari15'], // Modern browser versions
  },
  plugins: [
    nodePolyfills(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'Aliased',
        short_name: 'aliased',
        description: 'Decentralized identity manager',
        theme_color: '#0099F1',
      },

      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        globIgnores: [
          'assets/icons/**'
        ],
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,svg,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      }
    })
  ]
})
