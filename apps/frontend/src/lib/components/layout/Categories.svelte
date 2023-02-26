<script>
	import Clothing from '@icons/clothing.png'
	import Creations from '@icons/creations.png'
	import Cuts from '@icons/cuts.png'
	import College from '@icons/college.png'
	import Cups from '@icons/cups.png'
	import Cards from '@icons/cards.png'
</script>

<nav
	class="p-4 fixed bg-basics-50 bottom-0 w-full border-basics-700 border-t-2 flex space-x-4 lg:space-x-8 justify-center"
>
	<a href="/clothing">
		<img src={Clothing} alt="clothing" />
	</a>

	<a href="/creations">
		<img src={Creations} alt="creations" />
	</a>

	<a href="/cuts">
		<img src={Cuts} alt="cuts" />
	</a>

	<a href="/college">
		<img src={College} alt="college" />
	</a>

	<a href="/cups">
		<img src={Cups} alt="cups" />
	</a>

	<a href="/cards">
		<img src={Cards} alt="cards" />
	</a>
</nav>

<style lang="postcss">
	img {
		@apply max-w-[50px];
	}

	@media (min-height: 1025px) {
		img {
			@apply max-w-full;
		}
	}
</style>
