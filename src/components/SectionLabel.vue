<script setup lang="ts">
defineProps<{
	title: string;
}>();
</script>

<template>
	<div class="mb-10 flex items-baseline gap-4">
		<h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">{{ title }}</h2>
		<span class="bg-line hidden h-px flex-1 sm:block" aria-hidden="true" />
	</div>
</template>
