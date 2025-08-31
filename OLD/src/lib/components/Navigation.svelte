<script lang="ts">
	import { LightSwitch, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import NavLink from './NavLink.svelte';
	import { goto } from '$app/navigation';
	import { routes, userSettings } from '$lib/store';
	import { page } from '$app/stores';

	function onReset(): void {
		console.log('RESET');
		userSettings.set(null);
		goto('/');
	}
	export let isVertical: boolean = true;
</script>

{#if isVertical}
	<nav class="p-4 list-nav">
		<ul>
			{#each $routes as route}
				<NavLink link={route.path} text={route.name} />
			{/each}
		</ul>
	</nav>
	<div class="flex justify-center">
		<button on:click={onReset}>Reset</button>
		<LightSwitch />
	</div>
{:else}
	<TabGroup
		justify="justify-center"
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		flex="flex-1 lg:flex-none"
		rounded=""
		border=""
		class="w-full lg:hidden bg-surface-100-800-token"
	>
		{#each $routes as route}
			<TabAnchor href={route.path} selected={$page.url.pathname === route.path}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>{route.name}</span>
			</TabAnchor>
		{/each}
	</TabGroup>
{/if}
