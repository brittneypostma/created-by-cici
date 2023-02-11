<script>
	import Head from '@layout/Head.svelte'
	import Images from '@components/Images.svelte'
	export let data
	const images = data.images.resources
	console.log(images)
</script>

<Head title="Clothing" />

<section class="grid lg:block lg:masonry-3-col gap-8">
	<Images {images} />
</section>
