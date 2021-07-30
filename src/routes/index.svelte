<script context="module">
	export const hydrate = false

	export async function load({ fetch }) {
		const { products } = await fetch('/product.json?').then((res) => res.json())

		return {
			props: {
				products
			}
		}
	}
</script>

<script>
	import PageHead from '@components/layout/PageHead.svelte'
	export let products
</script>

<PageHead
	title="Home"
	description="Created by Cici - Find the handcrafted creations you’ll love. From Cricut designs and patterns, to custom art, there is something for everyone."
/>
<ul>
	{#each products as product}
		<li>
			<a href="/product/{product.slug}">
				{product.name}
			</a>
		</li>
	{/each}
</ul>
