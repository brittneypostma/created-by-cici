<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('./api/images', {
			method: 'GET',
			credentials: 'same-origin'
		})
		return {
			props: {
				...(await res.json())
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
