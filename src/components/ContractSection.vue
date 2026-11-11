<script setup lang="ts">
import { contracting, profile } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="hire" class="scroll-mt-24">
		<SectionLabel title="Work with me" />

		<div class="border-line bg-surface grid overflow-hidden rounded-lg border lg:grid-cols-[1.2fr_1fr]">
			<div class="p-6 sm:p-8">
				<p class="max-w-lg text-lg leading-relaxed">{{ contracting.pitch }}</p>

				<p class="text-soft mt-6 max-w-lg text-sm leading-relaxed">{{ contracting.consultation }}</p>

				<a
					:href="`mailto:${profile.email}?subject=${encodeURIComponent(contracting.enquirySubject)}`"
					class="bg-accent text-bg mt-8 inline-flex h-11 items-center rounded-md px-5 text-sm font-semibold hover:opacity-90"
				>
					Email me to book
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
