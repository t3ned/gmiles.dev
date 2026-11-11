<script setup lang="ts">
import ContractSection from "./components/ContractSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import HeroSection from "./components/HeroSection.vue";
import LegalView from "./components/LegalView.vue";
import SiteFooter from "./components/SiteFooter.vue";
import StackSection from "./components/StackSection.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import { legalDocs } from "./legal";

// Path-based rendering without a router. The worker serves index.html for
// every path (single-page-application fallback), so /privacy, /terms and
// /refunds resolve here
const path = window.location.pathname.replace(/\/+$/, "");
const legalDoc = legalDocs.find((doc) => `/${doc.slug}` === path);
</script>

<template>
	<div class="min-h-screen">
		<header class="border-line bg-bg sticky top-0 z-10 border-b">
			<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
				<a href="/" class="font-semibold">George Miles</a>
				<nav v-if="!legalDoc" class="text-soft hidden items-center gap-6 text-sm md:flex">
					<a href="#stack" class="hover:text-ink">Stack</a>
					<a href="#experience" class="hover:text-ink">Experience</a>
					<a href="#education" class="hover:text-ink">Education</a>
					<a href="#hire" class="hover:text-ink">Hire</a>
					<a href="#contact" class="hover:text-ink">Contact</a>
				</nav>
				<div class="flex items-center gap-2">
					<a
						href="mailto:hi@gmiles.dev?subject=Resume%20request&body=Hi%20George%2C%0A%0AI%20found%20gmiles.dev%20and%20would%20like%20a%20copy%20of%20your%20resume.%0A%0AName%3A%0ACompany%3A%0ARole%20in%20mind%3A%0A%0AThanks"
						class="border-line bg-surface hover:border-soft flex h-9 items-center rounded-md border px-3.5 text-sm font-medium"
					>
						Request resume
					</a>
					<ThemeToggle />
				</div>
			</div>
		</header>

		<main v-if="legalDoc" class="mx-auto max-w-5xl px-6 pb-8">
			<LegalView :doc="legalDoc" />
		</main>
		<main v-else class="mx-auto max-w-5xl space-y-28 px-6 pb-8">
			<HeroSection />
			<StackSection />
			<ExperienceSection />
			<EducationSection />
			<ContractSection />
		</main>

		<SiteFooter />
	</div>
</template>
