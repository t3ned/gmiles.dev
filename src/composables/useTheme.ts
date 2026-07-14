import { computed, ref, watchEffect } from "vue";

export type Theme = "light" | "dark" | "system";

const stored = localStorage.getItem("theme") as Theme | null;
const theme = ref<Theme>(stored === "light" || stored === "dark" || stored === "system" ? stored : "system");

const media = window.matchMedia("(prefers-color-scheme: dark)");
const systemDark = ref(media.matches);
media.addEventListener("change", (event) => (systemDark.value = event.matches));

const isDark = computed(() => theme.value === "dark" || (theme.value === "system" && systemDark.value));

watchEffect(() => {
	localStorage.setItem("theme", theme.value);
	document.documentElement.classList.toggle("dark", isDark.value);
});

/**
 * Provides the current theme preference, the resolved dark state, and a toggle
 */
export function useTheme() {
	/**
	 * Flips to the opposite of whatever is currently showing. System resolves to its effective theme first
	 */
	const toggle = () => {
		theme.value = isDark.value ? "light" : "dark";
	};

	return { theme, isDark, toggle };
}
