<script>
	import '../app.css'
	import Header from '@components/layout/Header.svelte'
	import Nav from '@components/layout/Nav.svelte'
</script>

<div class="grid grid-cols-1 grid-rows-layout content-start min-h-full">
	<Header />
	<main>
		<slot />
	</main>
	<div class="flex lg:hidden bg-basics-50 lg:bg-transparent">
		<Nav />
	</div>
</div>
