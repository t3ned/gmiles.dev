<script setup lang="ts">
import { onMounted } from "vue";
import type { LegalDoc } from "@/legal";

const props = defineProps<{ doc: LegalDoc }>();

onMounted(() => {
	document.title = `${props.doc.title} · George Miles`;
});
</script>

<template>
	<article class="mx-auto max-w-3xl">
		<a
			href="/"
			class="text-soft hover:text-accent flex w-fit items-center gap-2 pt-12 font-mono text-sm transition-colors"
		>
			<svg
				class="size-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M19 12H5m7 7-7-7 7-7" />
			</svg>
			back to gmiles.dev
		</a>

		<p class="text-accent mt-10 font-mono text-sm">
			~/gmiles.dev <span class="text-soft">$ cat {{ doc.slug }}.md</span>
		</p>
		<h1 class="font-display mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{{ doc.title }}</h1>
		<p class="text-soft mt-3 font-mono text-xs">last updated: {{ doc.updated }}</p>

		<div class="mt-12 space-y-10">
			<section v-for="section in doc.sections" :key="section.heading">
				<h2 class="font-display text-xl font-bold">{{ section.heading }}</h2>
				<p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-soft mt-3 leading-relaxed">
					{{ paragraph }}
				</p>
			</section>
		</div>
	</article>
</template>
