<script>
	/**
	 * @type {Array.<Image>}
	 */

	export let images
	import Image from '@components/Image.svelte'
</script>

{#each images as img}
	<Image src={img.url} alt={img.public_id} />
{/each}
