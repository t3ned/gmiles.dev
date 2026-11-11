<script setup lang="ts">
import { roles } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="experience" class="scroll-mt-24">
		<SectionLabel title="Experience" />

		<ol class="border-line relative ml-1 space-y-12 border-l pl-8">
			<li v-for="(role, i) in roles" :key="role.company + role.period" class="relative">
				<!-- timeline marker -->
				<span
					class="absolute top-2 -left-[37px] size-2 rounded-full"
					:class="i === 0 ? 'bg-accent' : 'bg-soft'"
					aria-hidden="true"
				/>

				<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
					<h3 class="text-xl font-semibold">{{ role.company }}</h3>
					<p class="text-soft text-sm">{{ role.period }}, {{ role.location }}</p>
				</div>
				<p class="mt-0.5 font-medium">{{ role.title }}</p>
				<p class="text-soft mt-3 max-w-2xl leading-relaxed">{{ role.summary }}</p>
				<ul class="text-soft mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-soft">
					<li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
				</ul>
			</li>
		</ol>
	</section>
</template>
