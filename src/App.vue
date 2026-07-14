<script setup lang="ts">
import ContractSection from "./components/ContractSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import HeroSection from "./components/HeroSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import StackSection from "./components/StackSection.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
	<div class="min-h-screen">
		<!-- ambient accent glow -->
		<div
			class="pointer-events-none fixed inset-x-0 top-0 -z-10 h-96"
			style="background: radial-gradient(60% 100% at 50% 0%, var(--c-accent-soft), transparent)"
			aria-hidden="true"
		/>

		<header class="border-line/60 bg-bg/80 sticky top-0 z-10 border-b backdrop-blur-md">
			<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
				<a href="#" class="font-mono text-sm font-semibold"> <span class="text-accent">~/</span>gmiles.dev </a>
				<nav class="text-soft hidden items-center gap-6 font-mono text-xs md:flex">
					<a href="#stack" class="hover:text-accent transition-colors">stack</a>
					<a href="#experience" class="hover:text-accent transition-colors">experience</a>
					<a href="#education" class="hover:text-accent transition-colors">education</a>
					<a href="#hire" class="hover:text-accent transition-colors">hire</a>
					<a href="#contact" class="hover:text-accent transition-colors">contact</a>
				</nav>
				<div class="flex items-center gap-2">
					<a
						href="mailto:hi@gmiles.dev?subject=Resume%20request&body=Hi%20George%2C%0A%0AI%20found%20gmiles.dev%20and%20would%20like%20a%20copy%20of%20your%20resume.%0A%0AName%3A%0ACompany%3A%0ARole%20in%20mind%3A%0A%0AThanks"
						class="border-line bg-surface text-ink hover:border-accent hover:text-accent flex h-9 items-center gap-2 rounded-lg border px-3.5 font-mono text-xs transition-colors"
					>
						request resume
						<svg
							class="size-3.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m22 2-7 20-4-9-9-4Z" />
							<path d="M22 2 11 13" />
						</svg>
					</a>
					<ThemeToggle />
				</div>
			</div>
		</header>

		<main class="mx-auto max-w-5xl space-y-32 px-6 pb-8">
			<HeroSection />
			<StackSection />
			<ExperienceSection />
			<EducationSection />
			<ContractSection />
		</main>

		<SiteFooter />
	</div>
</template>
