<script setup lang="ts">
import { schools } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="education" class="scroll-mt-24">
		<SectionLabel title="Education" />

		<div class="grid gap-4 sm:grid-cols-2">
			<article
				v-for="(school, i) in schools"
				:key="school.name"
				v-reveal="i * 80"
				class="border-line bg-surface hover:border-accent flex flex-col rounded-xl border p-6 transition-colors"
			>
				<div class="flex items-start justify-between gap-4">
					<div>
						<p class="text-soft font-mono text-xs">{{ school.period }}</p>
						<h3 class="font-display mt-2 text-xl font-bold">{{ school.name }}</h3>
						<p class="text-accent mt-0.5 text-sm font-medium">{{ school.qualification }}</p>
					</div>
					<div class="shrink-0 text-right">
						<p class="font-display text-accent text-4xl font-extrabold">{{ school.headline }}</p>
						<p class="text-soft mt-0.5 font-mono text-xs">{{ school.headlineNote }}</p>
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
						<span class="font-display text-accent text-base font-bold">{{ grade }}</span>
					</li>
				</ul>

				<ul v-if="school.awards?.length" class="border-line mt-4 space-y-2 border-t pt-4">
					<li
						v-for="award in school.awards"
						:key="award"
						class="text-ink flex items-center gap-2.5 text-sm font-medium"
					>
						<svg
							class="text-accent size-4 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="12" cy="8" r="6" />
							<path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
						</svg>
						{{ award }}
					</li>
				</ul>
			</article>
		</div>
	</section>
</template>
