<script context="module">
	export async function load({ fetch }) {
		const imageFiles = await import.meta.glob('../../static/images/**/*.*')
		const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]())
		const imageData = await Promise.all(imageDataPromises)
		const images = imageData.map((element) => element.default)
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
