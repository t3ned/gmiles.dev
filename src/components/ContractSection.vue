<script setup lang="ts">
import { contracting } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="hire" class="scroll-mt-24">
		<SectionLabel title="Work with me" />

		<div class="border-line bg-surface grid overflow-hidden rounded-xl border lg:grid-cols-[1.2fr_1fr]">
			<!-- pitch + booking -->
			<div v-reveal class="p-6 sm:p-8">
				<p class="text-ink max-w-lg text-lg leading-relaxed">{{ contracting.pitch }}</p>

				<ul class="text-soft mt-6 space-y-3 text-sm leading-relaxed">
					<li v-for="(point, i) in contracting.points" :key="point" class="flex gap-3">
						<span class="text-accent font-mono" aria-hidden="true">0{{ i + 1 }}</span>
						{{ point }}
					</li>
				</ul>

				<a
					:href="contracting.bookingUrl"
					target="_blank"
					rel="noopener"
					class="bg-accent mt-8 inline-flex h-11 items-center gap-2 rounded-lg px-5 font-mono text-sm font-semibold text-white transition-opacity hover:opacity-85"
				>
					book a free consultation
					<svg
						class="size-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M5 12h14m-7-7 7 7-7 7" />
					</svg>
				</a>
			</div>

			<!-- terms -->
			<div v-reveal="100" class="border-line bg-accent-soft/50 border-t p-6 sm:p-8 lg:border-t-0 lg:border-l">
				<h3 class="text-accent font-mono text-xs font-semibold tracking-wider uppercase">The terms</h3>
				<dl class="mt-4 space-y-4">
					<div v-for="item in contracting.terms" :key="item.term">
						<dt class="text-ink flex items-center gap-2 text-sm font-semibold">
							<svg
								class="text-accent size-3.5 shrink-0"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M20 6 9 17l-5-5" />
							</svg>
							{{ item.term }}
						</dt>
						<dd class="text-soft mt-0.5 pl-5.5 text-sm">{{ item.detail }}</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>
</template>
