<script lang="ts">
	import { goto } from '$app/navigation';
	import { notesStorage } from '$lib/store';
	import { InputChip, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	let tags: string[] = [];
	let content: string = '';

	const t: ToastSettings = {
		message: 'New note successfully created!',
		background: 'variant-filled-success'
	};

	function createNote(): void {
		notesStorage.update((notes) => [
			...notes,
			{
				id: crypto.randomUUID(),
				content,
				tags
			}
		]);
		content = '';
		tags = [];
		toastStore.trigger(t);
		goto('/');
	}
</script>

<div class="container flex flex-col gap-8 mx-auto h-full">
	<form class="flex flex-col gap-3 p-4 card">
		<h2>New Note</h2>
		<textarea bind:value={content} rows="5" class="textarea" placeholder="Note content..." />
		<InputChip bind:value={tags} name="chips" placeholder="Enter any value..." />
		<button type="button" class="btn variant-ghost-primary" on:click={createNote}
			>Create Note</button
		>
	</form>
</div>
