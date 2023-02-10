<script>
	import Head from '@layout/Head.svelte'
	import Image from '@components/Image.svelte'
	export let data
	const images = data.images
</script>

<Head title="Home" />

<section class="grid lg:block lg:masonry-3-col gap-8">
	{#each images.reverse() as img}
		<Image {img} />
	{/each}
</section>
