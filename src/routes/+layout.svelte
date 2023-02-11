<script>
	import '../app.css'
	import Head from '@layout/Head.svelte'
	import Header from '@layout/Header.svelte'
	// import Nav from '@components/layout/Nav.svelte'
	import Categories from '@components/Categories.svelte'
	import { onMount } from 'svelte'
	export let data
	const paypal = data.paypal
	console.log(data)

	const style = {
		layout: 'horizontal'
	}

	onMount(async () => {
		if (paypal) {
			try {
				const buttons = await paypal.Buttons({
					style
				})
				const render = await buttons.render('#paypal-button-container')
				return render
			} catch (error) {
				console.error('failed to render the PayPal Buttons', error)
			}
		}
	})
</script>

<Head title="Created by Cici" />

<div class="grid grid-cols-1 grid-rows-layout content-start min-h-full">
	<Header />
	<main class="p-4 lg:p-8 max overflow-y-auto">
		<div id="paypal-button-container" class="flex justify-center mb-8" />
		<slot />
	</main>
	<section class="sticky bottom-0 flex justify-center lg:hidden bg-basics-50 lg:bg-transparent">
		<Categories />
		<!-- <div class="flex lg:hidden bg-basics-50 lg:bg-transparent">
			<Nav />
		</div> -->
	</section>
</div>
