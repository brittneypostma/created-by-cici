<script>
	import Head from '@layout/Head.svelte'
</script>

<Head title="Contact" />

<section class="max-w-lg grid justify-items-stretch gap-4 mx-auto">
	<h1 class="text-center">Get in Touch</h1>
	<form
		method="POST"
		class="grid"
		name="contact"
		action="/thank-you"
		netlify-honeypot="bot-field"
		data-netlify="true"
	>
		<input type="hidden" name="form-name" value="contact" />
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" placeholder="Your name" required />

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" placeholder="email@email.com" required />
		<label for="name">Phone:</label>
		<input type="number" id="number" name="number" placeholder="123-456-7890" />

		<label for="message">Message:</label>
		<textarea
			rows="5"
			cols="33"
			id="message"
			name="message"
			placeholder="Let me know any questions you have or items you would like to purchase."
			required
		/>

		<button type="submit" class="mt-4">Send</button>
	</form>
</section>
