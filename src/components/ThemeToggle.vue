<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";

const { isDark, toggle } = useTheme();

const label = computed(() => (isDark.value ? "Switch to light theme" : "Switch to dark theme"));
</script>

<template>
	<button
		type="button"
		:title="label"
		:aria-label="label"
		class="border-line bg-surface text-soft hover:border-soft hover:text-ink flex size-9 items-center justify-center rounded-md border"
		@click="toggle"
	>
		<!-- sun (shown in dark mode: click for light) -->
		<svg
			v-if="isDark"
			class="size-4"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
		>
			<circle cx="12" cy="12" r="4" />
			<path
				d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"
			/>
		</svg>
		<!-- moon (shown in light mode: click for dark) -->
		<svg
			v-else
			class="size-4"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
		</svg>
	</button>
</template>
