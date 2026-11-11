<script setup lang="ts">
import { schools } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="education" class="scroll-mt-24">
		<SectionLabel title="Education" />

		<div class="grid gap-4 sm:grid-cols-2">
			<article
				v-for="school in schools"
				:key="school.name"
				class="border-line bg-surface flex flex-col rounded-lg border p-6"
			>
				<div class="flex items-start justify-between gap-4">
					<div>
						<p class="text-soft text-sm">{{ school.period }}</p>
						<h3 class="mt-1 text-lg font-semibold">{{ school.name }}</h3>
						<p class="text-soft text-sm">{{ school.qualification }}</p>
					</div>
					<div class="shrink-0 text-right">
						<p class="text-3xl font-semibold tracking-tight">{{ school.headline }}</p>
						<p class="text-soft text-sm">{{ school.headlineNote }}</p>
					</div>
				</div>

				<p v-if="school.detail" class="text-soft mt-4 text-sm leading-relaxed">{{ school.detail }}</p>

				<ul
					v-if="school.subjects?.length"
					class="border-line mt-4 flex flex-1 flex-col divide-y divide-(--c-line) border-t"
				>
					<li
						v-for="{ subject, grade } in school.subjects"
						:key="subject"
						class="flex flex-1 items-center justify-between py-2.5 text-sm"
					>
						<span class="text-soft">{{ subject }}</span>
						<span class="font-semibold">{{ grade }}</span>
					</li>
				</ul>

				<div v-if="school.awards?.length" class="border-line mt-4 border-t pt-4">
					<h4 class="text-sm font-semibold">Awards</h4>
					<ul class="text-soft mt-2 space-y-1.5 text-sm">
						<li v-for="award in school.awards" :key="award">{{ award }}</li>
					</ul>
				</div>
			</article>
		</div>
	</section>
</template>
