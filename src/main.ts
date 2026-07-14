import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

const app = createApp(App);

// v-reveal fades elements in as they scroll into view. Optional value is the stagger delay in ms
app.directive<HTMLElement, number | undefined>("reveal", {
	mounted(el, binding) {
		el.classList.add("reveal");
		if (binding.value) el.style.transitionDelay = `${binding.value}ms`;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					el.classList.add("revealed");
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);
	},
});

app.mount("#app");
