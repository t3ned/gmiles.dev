<script setup lang="ts">
import { profile } from "@/data";
</script>

<template>
	<footer id="contact" class="border-line mt-28 scroll-mt-16 border-t">
		<div class="mx-auto max-w-5xl px-6 py-14 sm:py-16">
			<p class="text-soft">Get in touch</p>
			<a
				:href="`mailto:${profile.email}`"
				class="hover:text-accent mt-2 inline-block text-3xl font-semibold tracking-tight break-all sm:text-5xl"
			>
				{{ profile.email }}
			</a>
			<div class="text-soft mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
				<p>© {{ new Date().getFullYear() }} George Miles</p>
				<nav class="flex items-center gap-4">
					<a href="/privacy" class="hover:text-ink">Privacy</a>
					<a href="/terms" class="hover:text-ink">Terms</a>
					<a href="/refunds" class="hover:text-ink">Refunds</a>
				</nav>
				<a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-ink">
					linkedin.com/in/gtmmiles
				</a>
			</div>
		</div>
	</footer>
</template>
