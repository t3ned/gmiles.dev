<script setup lang="ts">
import headshot from "@/assets/headshot.jpg";
import { profile } from "@/data";
</script>

<template>
	<section class="pt-16 sm:pt-24">
		<div class="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
			<div>
				<h1 class="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">{{ profile.name }}</h1>
				<p class="mt-5 max-w-xl text-xl leading-snug text-balance sm:text-2xl">{{ profile.tagline }}</p>
				<p class="text-soft mt-6 max-w-xl text-lg leading-relaxed">{{ profile.summary }}</p>
				<p class="text-soft mt-8 text-sm">{{ profile.location }}</p>
				<div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
					<a :href="`mailto:${profile.email}`" class="text-accent underline-offset-4 hover:underline">
						{{ profile.email }}
					</a>
					<a
						:href="profile.linkedin"
						target="_blank"
						rel="noopener"
						class="text-accent underline-offset-4 hover:underline"
					>
						LinkedIn
					</a>
				</div>
			</div>

			<img
				:src="headshot"
				alt="George Miles"
				width="640"
				height="640"
				class="border-line mx-auto aspect-square w-56 rounded-lg border object-cover sm:w-64"
			/>
		</div>
	</section>
</template>
