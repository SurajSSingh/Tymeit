<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}

	export let link: string = '/';
	export let text: string = '';
</script>

<li><a href={link} on:click={drawerClose}>{text}</a></li>
