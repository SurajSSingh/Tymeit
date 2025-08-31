<script>
	import { goto } from '$app/navigation';
	import Intro from '$lib/components/Intro.svelte';
	import { onMount } from 'svelte';
	import { userSettings } from '$lib/store';

	onMount(() => {
		if ($userSettings) {
			// Already went through introduction
			goto('/track');
		}
	});
</script>

<div class="flex flex-col h-full">
	<h1 class="p-4 text-center h1">
		<span
			class="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone"
			>Welcome</span
		>
		<br />
		<span
			class="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-yellow-500 box-decoration-clone"
			>To</span
		>
		<br />
		<span
			class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-violet-500 box-decoration-clone"
			>Tymeit</span
		>
	</h1>
	<Intro />
</div>
