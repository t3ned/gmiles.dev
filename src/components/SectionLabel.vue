<script setup lang="ts">
defineProps<{
	title: string;
}>();
</script>

<template>
	<h2 class="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">{{ title }}</h2>
</template>
