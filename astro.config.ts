import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://gmiles.dev",
	// Emit privacy.html rather than privacy/index.html so /privacy is served without a trailing slash redirect
	build: { format: "file" },
	vite: { plugins: [tailwindcss()] },
});
