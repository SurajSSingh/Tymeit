<script lang="ts">
	import { getDrawerStore, getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { notesStorage } from '$lib/store';
	import AddTracker from '$lib/components/AddTracker.svelte';

	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();
	let content: string = '';

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
				context
			}
		]);
		content = '';
		toastStore.trigger(t);
	}
</script>

<div class="gap-8 columns-2 md:columns-3xs">
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
	<AddTracker />
</div>
