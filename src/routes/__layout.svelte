<script>
	import '@styles/index.css';
	import Header from '@components/layout/Header.svelte';
	import Categories from '@components/Categories.svelte';
	// import Nav from '@components/layout/Nav.svelte'
</script>

<div class="grid grid-cols-1 grid-rows-layout content-start min-h-full">
	<Header />
	<main class="max overflow-y-auto">
		<slot />
	</main>
	<section class="flex justify-center lg:hidden bg-basics-50 lg:bg-transparent">
		<Categories />
		<!-- <div class="flex lg:hidden bg-basics-50 lg:bg-transparent">
			<Nav />
		</div> -->
	</section>
</div>

<style>
	main {
		overflow-y: auto;
	}
	section {
		display: flex;
		justify-content: center;
		background-color: var(--basics-50);
	}

	@media (min-width: 1024px) {
		section {
			background: transparent;
			display: none;
		}
	}
</style>
