<script lang="ts">
	import { goto } from '$app/navigation';
	import { userSettings } from '$lib/store';
	import { Step, Stepper } from '@skeletonlabs/skeleton';

	function onCompleteIntro(): void {
		userSettings.set({ confimered: true });
		goto('/track');
	}
</script>

<Stepper on:complete={onCompleteIntro} regionContent="p-10 h-full">
	<Step>
		<svelte:fragment slot="header">Welcome</svelte:fragment>
		<p>
			Tymeit is a privacy respecting time tracking web app that allows you to keep track of things.
			Since, this is your first time here, we will get something setup first.
		</p>
	</Step>
	<Step>
		<svelte:fragment slot="header">Settings</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">Storage</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">Templates</svelte:fragment>
		(content)
	</Step>
</Stepper>
