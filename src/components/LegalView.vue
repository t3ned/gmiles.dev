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
		<a href="/" class="text-soft hover:text-ink block w-fit pt-12 text-sm">Back to home</a>

		<h1 class="mt-10 text-4xl font-semibold tracking-tight sm:text-5xl">{{ doc.title }}</h1>
		<p class="text-soft mt-3 text-sm">Last updated {{ doc.updated }}</p>

		<div class="mt-12 space-y-10">
			<section v-for="section in doc.sections" :key="section.heading">
				<h2 class="text-xl font-semibold">{{ section.heading }}</h2>
				<p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-soft mt-3 leading-relaxed">
					{{ paragraph }}
				</p>
			</section>
		</div>
	</article>
</template>
