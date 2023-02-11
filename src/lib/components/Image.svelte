<script>
	/**
	 * @type {string}
	 */
	export let src
	/**
	 * @type {string}
	 */
	export let alt
	/**
	 * @type {?string}
	 */
	export let classes = ''

	// const name = /.*\//
	// img.replace(name, '').split('.').slice(0, -1).join('.')
</script>

<img {src} {alt} class={`${classes} rounded-lg object-cover`} />
