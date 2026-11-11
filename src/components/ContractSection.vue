<script setup lang="ts">
import { contracting } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="hire" class="scroll-mt-24">
		<SectionLabel title="Work with me" />

		<div class="border-line bg-surface grid overflow-hidden rounded-lg border lg:grid-cols-[1.2fr_1fr]">
			<div class="p-6 sm:p-8">
				<p class="max-w-lg text-lg leading-relaxed">{{ contracting.pitch }}</p>

				<div class="text-soft mt-6 max-w-lg space-y-3 text-sm leading-relaxed">
					<p>
						Engagements start from
						<span class="text-ink font-medium">{{ contracting.minimum }}</span>.
					</p>
					<p>
						{{ contracting.consultation }}
						<a href="/refunds" class="text-accent underline underline-offset-4">Refund policy</a>
					</p>
					<p>{{ contracting.capacity }}</p>
				</div>

				<a
					:href="contracting.bookingUrl"
					target="_blank"
					rel="noopener"
					class="bg-accent mt-8 inline-flex h-11 items-center rounded-md px-5 text-sm text-bg font-semibold hover:opacity-90"
				>
					Book a consultation
				</a>
			</div>

			<div class="border-line border-t p-6 sm:p-8 lg:border-t-0 lg:border-l">
				<h3 class="font-semibold">Terms</h3>
				<dl class="mt-4 space-y-4">
					<div v-for="item in contracting.terms" :key="item.term">
						<dt class="text-sm font-medium">{{ item.term }}</dt>
						<dd class="text-soft mt-0.5 text-sm">{{ item.detail }}</dd>
					</div>
				</dl>
			</div>
		</div>
	</section>
</template>
