<script setup lang="ts"></script>

<template>
	<main class="min-h-screen overflow-hidden bg-neutral-900 font-poppins text-white">
		<div class="flex min-h-screen flex-col items-center justify-center gap-y-8">
			<div class="h-48 w-48">
				<img class="rounded-full" src="../assets/images/logo.jpg" alt="George Avatar" />
			</div>

			<div class="flex flex-col items-center gap-y-3">
				<h1 class="text-4xl font-bold text-orange-600">Hi, I'm George.</h1>
				<span class="text-neutral-400">Backend Developer</span>
			</div>

			<div class="flex flex-col items-center gap-y-6">
				<span class="text-8xl font-bold">Debugging </span>
				<span class="text-8xl font-bold">is my cardio</span>
			</div>

			<div class="mt-6 cursor-pointer rounded-xl bg-orange-600 p-3 hover:bg-orange-500">
				<span><a href="mailto:me@t3ned.dev">Connect with me</a></span>
			</div>
		</div>
	</main>
</template>
