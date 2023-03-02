import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [Vue(), Components(), AutoImport({ imports: ["vue", "@vueuse/core"] })],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
