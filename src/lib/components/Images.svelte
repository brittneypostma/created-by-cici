<script>
	/**
	 * @type {Array.<Image>}
	 */

	export let images
	import Image from '@components/Image.svelte'
</script>

<section class="grid grid-cols-minmax gap-8 items-stretch">
	{#each images as img}
		<Image src={img.url} alt={img.public_id} />
	{/each}
</section>
