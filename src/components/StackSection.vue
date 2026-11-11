<script setup lang="ts">
import { stack } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="stack" class="scroll-mt-24">
		<SectionLabel title="Stack" />

		<!-- Ordered by when each layer entered the career -->
		<dl class="border-line bg-surface divide-line divide-y rounded-lg border">
			<div
				v-for="layer in stack"
				:key="layer.id"
				class="grid gap-2 px-5 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-6 sm:py-5"
			>
				<dt>
					<p class="font-semibold">{{ layer.name }}</p>
					<p class="text-soft text-sm">{{ layer.note }}</p>
				</dt>
				<dd class="flex flex-wrap gap-2 sm:items-center">
					<span
						v-for="item in layer.items"
						:key="item"
						class="border-line rounded border px-2 py-0.5 font-mono text-[13px]"
					>
						{{ item }}
					</span>
				</dd>
			</div>
		</dl>
	</section>
</template>
