<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`./api/images`)
		const images = await res.json()
		return {
			props: {
				images
			}
		}
	}
</script>

<script>
	import Head from '@layout/Head.svelte'
	import Image from '@components/Image.svelte'
	export let images
</script>

<Head title="Home" />

<section class="grid lg:block lg:masonry-3-col gap-8">
	{#each images.reverse() as img}
		<Image {img} />
	{/each}
</section>
