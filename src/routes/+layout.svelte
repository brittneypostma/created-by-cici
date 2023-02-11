<script>
	// @ts-nocheck

	import '../app.css'
	import Head from '@layout/Head.svelte'
	import Header from '@layout/Header.svelte'
	import Banner from '@layout/Banner.svelte'
	import Categories from '@components/Categories.svelte'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	export let data
	const paypal = data.paypal

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

<div class="grid grid-cols-1 grid-rows-layout content-start min-h-full relative">
	<Header />
	<Categories />
	<main>
		{#if !$page.route.id === '/contact'}
			<Banner />
		{/if}
		<div id="paypal-button-container" class="flex justify-center" />
		<div class="max p-4 lg:p-8 overflow-y-auto mb-32 lg:mb-0">
			<slot />
		</div>
	</main>
</div>
