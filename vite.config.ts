import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

export default defineConfig({
  plugins: [svelteFluent(), sveltekit(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
