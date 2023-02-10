<script>
	export let img
	const name = /.*\//
</script>

<img
	src={img}
	alt={img.replace(name, '').split('.').slice(0, -1).join('.')}
	class="rounded-lg bg-cover mb-4"
/>
