<script context="module">
	export async function load({ fetch }) {
		const imageFiles = await import.meta.glob('../../static/images/**/*.png')
		const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]())
		const imageData = await Promise.all(imageDataPromises)
		const imageDataArray = imageData.map((element) => element.default)

		return {
			props: {
				images: imageDataArray
			}
		}
	}
</script>

<script>
	import PageHead from '@components/PageHead.svelte'
	const name = /.*\//
	export let images
</script>

<PageHead title="Home" />

<section class="grid lg:block lg:masonry-3-col gap-8">
	{#each images.reverse() as img}
		<img
			src={img}
			alt={img.replace(name, '').split('.').slice(0, -1).join('.')}
			class="rounded-lg bg-cover mb-4"
		/>
	{/each}
</section>
