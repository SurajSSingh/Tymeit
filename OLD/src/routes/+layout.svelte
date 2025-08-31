<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { Drawer, Modal, Toast, initializeStores} from '@skeletonlabs/skeleton';
    initializeStores();
</script>

<!-- 
    @component

    This is the general layout for the app. 
    Use only for importing CSS theme and also adding singletons components.
 -->

<Toast position="tr" />

<Modal />

<Drawer />

<slot />
