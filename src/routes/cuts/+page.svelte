<script>
	import Head from '@layout/Head.svelte'
	import Images from '@components/Images.svelte'
	export let data
	const images = data.images.resources
</script>

<Head title="Cuts" />

<Images {images} />
