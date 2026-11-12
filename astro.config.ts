import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://gmiles.dev",
	// Emit privacy.html rather than privacy/index.html so /privacy is served without a trailing slash redirect
	build: { format: "file" },
	vite: { plugins: [tailwindcss()] },
	// Downloaded at build time and served from this site, so visitors never hit Google
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Schibsted Grotesk",
			cssVariable: "--font-schibsted",
			weights: ["400 800"],
			styles: ["normal", "italic"],
		},
		{
			provider: fontProviders.google(),
			name: "JetBrains Mono",
			cssVariable: "--font-jetbrains",
			weights: [400, 500],
			styles: ["normal"],
		},
	],
});
