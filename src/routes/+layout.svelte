<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		Drawer,
		drawerStore,
		Toast,
		Modal,
		type ModalSettings,
		toastStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import { notesStorage } from '$lib/store';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Toast position="tr" />

<Modal />

<Drawer>
	<Navigation />
	<div class="flex justify-center">
		<LightSwitch />
	</div>
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="sidebarLeft">
		<h1 class="text-6xl font-bold text-center">Tymit</h1>
		<Navigation />
		<div class="flex justify-center">
			<LightSwitch />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="mr-4 md:hidden btn btn-sm" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="w-4 h-4 fill-token">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<span>Tabs</span>
			</svelte:fragment>
			<svelte:fragment slot="trail">(tabs?)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
