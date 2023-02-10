<script>
	import '../app.css'
	import Head from '@layout/Head.svelte'
	import Header from '@layout/Header.svelte'
	// import Nav from '@components/layout/Nav.svelte'
	import Categories from '@components/Categories.svelte'
</script>

<Head title="Created by Cici" />

<div class="grid grid-cols-1 grid-rows-layout content-start min-h-full">
	<Header />
	<main class="bg-basics-600 p-4 lg:p-8 max overflow-y-auto">
		<slot />
	</main>
	<section class="sticky bottom-0 flex justify-center lg:hidden bg-basics-50 lg:bg-transparent">
		<Categories />
		<!-- <div class="flex lg:hidden bg-basics-50 lg:bg-transparent">
			<Nav />
		</div> -->
	</section>
</div>
