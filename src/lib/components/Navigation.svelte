<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<nav class="p-4 list-nav">
	<ul>
		<NavLink link="?all=1" text="All" />
		<NavLink link="?active=1" text="Active" />
		<NavLink link="?settings=1" text="Settings" />
	</ul>
</nav>
