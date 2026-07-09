import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import nunjucksPlugin from 'vite-plugin-nunjucks';
import nunjucks from 'nunjucks';
import { resolve } from 'path';

// Construct custom Nunjucks Environment pointing to src as search path
const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(resolve(__dirname, 'src')),
  { noCache: true }
);

export default defineConfig({
  root: 'src',
  plugins: [
    tailwindcss(),
    nunjucksPlugin({
      nunjucksEnvironment: env
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        cards: resolve(__dirname, 'src/cards.html'),
        texts: resolve(__dirname, 'src/texts.html'),
        buttons: resolve(__dirname, 'src/buttons.html'),
        tables: resolve(__dirname, 'src/tables.html'),
        badges: resolve(__dirname, 'src/badges.html'),
        dropdowns: resolve(__dirname, 'src/dropdowns.html'),
        'list-groups': resolve(__dirname, 'src/list-groups.html'),
        progress: resolve(__dirname, 'src/progress.html'),
        tabs: resolve(__dirname, 'src/tabs.html'),
        toasts: resolve(__dirname, 'src/toasts.html'),
        alerts: resolve(__dirname, 'src/alerts.html'),
        forms: resolve(__dirname, 'src/forms.html'),
        wizard: resolve(__dirname, 'src/wizard.html'),
        datatables: resolve(__dirname, 'src/datatables.html'),
        modals: resolve(__dirname, 'src/modals.html'),
        charts: resolve(__dirname, 'src/charts.html')
      }
    }
  }
});
