<script>
	import Head from '@layout/Head.svelte'
	import Image from '@components/Image.svelte'
	export let data
	const images = data.images.resources

	const classes = `h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[365px] lg:w-[365px]`
</script>

<Head title="Home" />

<section class="grid grid-cols-minmax gap-8">
	<!-- {#each images as img, i} -->
	<a href="/college">
		<span>College</span>
		<Image src={images[0].url} alt={images[0].public_id} {classes} />
	</a>
	<a href="/cards">
		<span>Cards</span>
		<Image src={images[1].url} alt={images[1].public_id} {classes} />
	</a>
	<a href="/creations">
		<span>Creations</span>
		<Image src={images[2].url} alt={images[2].public_id} {classes} />
	</a>
	<a href="/cuts">
		<span>Cuts</span>
		<Image src={images[3].url} alt={images[3].public_id} classes={`${classes} bg-white`} />
	</a>
	<a href="/cups">
		<span>Cups</span>
		<Image src={images[4].url} alt={images[4].public_id} {classes} />
	</a>
	<a href="/clothing">
		<span>Clothing</span>
		<Image src={images[5].url} alt={images[5].public_id} {classes} />
	</a>
	<!-- {/each} -->
</section>

<style lang="postcss">
	a {
		@apply grid justify-center gap-2 font-heading text-4xl text-center h-full;
	}
</style>
