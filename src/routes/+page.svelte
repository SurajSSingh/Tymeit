<script lang="ts">
	import { notesStorage } from '$lib/store';
	import { toastStore, type ModalSettings, modalStore } from '@skeletonlabs/skeleton';

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
	<div class="flex justify-between items-center">
		<h2>Notes</h2>
		<a href="/new" class="btn variant-ghost-primary"> New Note </a>
	</div>
	<div class="grid grid-cols-3 gap-4">
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
				<div class="flex flex-wrap gap-1">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary"> {tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
