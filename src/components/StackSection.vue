<script setup lang="ts">
import { stack } from "@/data";
import SectionLabel from "./SectionLabel.vue";
</script>

<template>
	<section id="stack" class="scroll-mt-24">
		<SectionLabel title="Stack" />

		<!-- Terminal window: dark in both themes -->
		<div v-reveal class="overflow-hidden rounded-xl bg-[#191410] shadow-lg shadow-black/10">
			<!-- title bar -->
			<div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
				<span class="size-3 rounded-full bg-[#f26d5f]" aria-hidden="true" />
				<span class="size-3 rounded-full bg-[#f5bd4f]" aria-hidden="true" />
				<span class="size-3 rounded-full bg-[#59c26f]" aria-hidden="true" />
				<span class="ml-3 font-mono text-xs text-white/40">george@gmiles: ~/stack</span>
			</div>

			<!-- session -->
			<div class="overflow-x-auto p-5 font-mono text-sm leading-relaxed sm:p-6">
				<p class="text-white/50">
					<span class="text-[#ff8c42]">$</span> tree ./career
					<span class="text-white/30">--sort started</span>
				</p>

				<div class="mt-5 space-y-5">
					<div v-for="(layer, i) in stack" :key="layer.id">
						<p>
							<span class="text-white/30 select-none">{{
								i === stack.length - 1 ? "└── " : "├── "
							}}</span>
							<span class="font-semibold text-[#ff8c42]">{{ layer.name }}</span>
							<span class="text-white/35 italic"> # {{ layer.note }}</span>
						</p>
						<p class="mt-1 pl-8 text-white/70">
							<template v-for="(item, j) in layer.items" :key="item">
								<span v-if="j > 0" class="text-white/25 select-none"> · </span>
								<span class="whitespace-nowrap">{{ item }}</span>
							</template>
						</p>
					</div>
				</div>

				<p class="mt-5 text-white/50">
					<span class="text-[#ff8c42]">$</span> <span class="terminal-cursor" aria-hidden="true" />
				</p>
			</div>
		</div>
	</section>
</template>
