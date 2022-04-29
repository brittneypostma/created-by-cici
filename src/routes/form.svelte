<script>
	const URL = import.meta.env.SHEETS_URL

	export let shipping = false

	const onSubmit = async (e) => {
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)
		const res = await fetch(URL, {
			method: 'POST',
			body: data
		})
		const json = await res.json()
		console.log(json)
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<!-- order date/ auto timestamp -->
	<!-- invoice items -->
	<!-- total -->
	<input name="First Name" type="text" placeholder="First Name" required />
	<input name="Last Name" type="text" placeholder="Last Name" required />
	<input name="Email" type="email" placeholder="Email" required />
	<input name="Phone" type="tel" placeholder="Phone" required />

	{#if shipping}
		<input name="Address" type="text" placeholder="Address" required />
	{/if}
	<button type="submit">Send</button>
</form>
