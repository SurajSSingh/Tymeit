<script lang="ts">
	import {
		AppShell,
		AppBar,
		getDrawerStore,
		getToastStore,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { notesStorage } from '$lib/store';
	import { page } from '$app/stores';

	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();
	let content: string = '';

	function drawerOpen(): void {
		drawerStore.open();
	}

	const t: ToastSettings = {
		message: 'New note successfully created!',
		background: 'variant-filled-success'
	};

	function createNote(): void {
		const trackers = [...content.matchAll(/#(?<name>\w+)(\((?<num>\d+(\.d+)?)\))?/g)].map((t) => ({
			name: t.groups?.name ?? 'NO NAME',
			data: t.groups?.num ?? 0
		}));
		const context = [...content.matchAll(/\+(?<name>\w+)(\((?<num>\d+)\))?/g)].map((t) => ({
			name: t.groups?.name ?? 'NO NAME',
			days: Number(t.groups?.num) || 0
		}));
		const people = [...content.matchAll(/@(?<name>\w+)/g)].map((t) => t.groups?.name || 'NO NAME');
		notesStorage.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				trackers: trackers ?? [],
				people,
				context,
				timestamp: new Date(Date.now())
			}
		]);
		content = '';
		toastStore.trigger(t);
	}
</script>

<!-- App Shell -->
<AppShell
	slotSidebarLeft="w-0 lg:w-48 bg-surface-500/10"
	slotPageHeader="fixed top-0 inset-x-2 lg:left-48 lg:right-0"
	slotPageContent="pt-16 pb-48 lg:pb-32 px-4"
	slotPageFooter="fixed bottom-0 inset-x-2 lg:left-48 lg:right-0"
>
	<svelte:fragment slot="sidebarLeft">
		<h1 class="text-6xl font-bold text-center">Tymit</h1>
		<Navigation />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<span>Tabs</span>
			</svelte:fragment>
			<svelte:fragment slot="trail">(tabs?)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		{#if $page.url.pathname !== '/settings'}
			<form class="flex flex-row gap-3 p-4 card">
				<textarea
					bind:value={content}
					rows="1"
					class="flex-grow textarea"
					placeholder="Note content..."
				/>
				<!-- on:focus={} -->
				<button type="button" class="btn variant-ghost-primary" on:click={createNote}>+</button>
			</form>
		{/if}
		<Navigation isVertical={false} />
	</svelte:fragment>
</AppShell>
