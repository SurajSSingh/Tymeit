<script lang="ts">
	import { goto } from '$app/navigation';
	import { notesStorage, userSettings } from '$lib/store';
	import { getToastStore, type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const toastStore = getToastStore();
	const modalStore = getModalStore();

	onMount(() => {
		if (!$userSettings) {
			goto('/');
		}
	});

	function deleteNote(noteId: string): void {
		const confirmDelete: ModalSettings = {
			type: 'confirm',
			title: 'Delete Note',
			body: 'Are you sure you want to delete the note?',

			response: (resp: boolean) => {
				if (resp) {
					notesStorage.update((notes) => notes.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: 'Note deleted',
						background: 'variant-ghost-success'
					});
					return;
				}
				toastStore.trigger({
					message: 'Note not deleted',
					background: 'variant-ghost-error'
				});
			}
		};
		modalStore.trigger(confirmDelete);
	}
</script>

<div class="container flex flex-col gap-8 mx-auto h-full">
	<h3>History</h3>
	<div class="grid gap-4">
		{#each $notesStorage as note}
			<div class="flex relative flex-col gap-2 p-4 card variant-ghost-warning">
				<button
					class="absolute -top-1.5 -right-1.5 btn-icon btn-icon-sm variant-filled-error"
					on:click={() => deleteNote(note.id)}
				>
					X
				</button>
				<div>
					{note.content}
				</div>
				<p class="flex flex-wrap gap-1">
					{#each note.trackers as trackers}
						<span class="badge variant-filled-primary">
							{trackers.name}{#if trackers.data}
								({trackers.data})
							{/if}</span
						>
					{/each}
					<br />
					{#if note.people}
						{#each note.people as person}
							<span class="badge variant-filled-secondary"> {person}</span>
						{/each}
					{/if}
					{#if note.context}
						{#each note.context as context}
							<span class="badge variant-filled-tertiary">
								{context.name}{#if context.days}
									({context.days})
								{/if}</span
							>
						{/each}
					{/if}
				</p>
				<div>
					Date: {note.timestamp}
				</div>
			</div>
		{/each}
	</div>
</div>
