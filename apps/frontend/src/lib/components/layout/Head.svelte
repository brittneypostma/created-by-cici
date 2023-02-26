<script>
	export let title
	export let description =
		'Created by Cici - Find the handcrafted creations you’ll love. From Cricut designs and patterns, to custom art, there is something for everyone.'
	export let ogImage = null
	export let siteUrl = null

	const siteTitle = 'Created by Cici'
	const formattedTitle = title ? `${title} · ${siteTitle}` : siteTitle
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	<meta itemprop="description" content={description} />
	<meta itemprop="image" content={ogImage || '/og.png'} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage || '/og.png'} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage || '/og.png'} />
</svelte:head>
