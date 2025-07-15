<script setup lang="ts"></script>

<template>
	<main class="min-h-screen bg-neutral-900 font-poppins text-white">
		<div class="flex min-h-screen flex-col items-center justify-center gap-y-8">
			<div class="h-36 w-36 rounded-full bg-neutral-800 sm:h-48 sm:w-48">
				<img class="rounded-full" src="../assets/images/logo.png" alt="George Avatar" />
			</div>

			<div class="flex flex-col items-center gap-y-3">
				<h1 class="text-3xl font-bold text-orange-600 md:text-4xl">Hi, I'm George.</h1>
				<span class="text-sm text-neutral-400 md:text-base">Backend Developer</span>
			</div>

			<div class="flex flex-col items-center gap-y-6 text-5xl sm:text-6xl md:text-8xl">
				<span class="font-bold">Debugging</span>
				<span class="font-bold">is my cardio</span>
			</div>

			<div
				class="mt-6 cursor-pointer rounded-xl bg-orange-600 p-3 text-sm hover:bg-orange-500 md:text-base"
			>
				<span><a href="mailto:hi@gmiles.dev">Connect with me</a></span>
			</div>
		</div>
	</main>
</template>
