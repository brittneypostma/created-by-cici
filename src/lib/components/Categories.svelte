<script>
	import Clothing from '@icons/clothing.png'
	import Creations from '@icons/creations.png'
	import Cuts from '@icons/cuts.png'
	import College from '@icons/college.png'
	import Cups from '@icons/cups.png'
	import Cards from '@icons/cards.png'
</script>

<section class="w-full border-basics-700 border-t-2 xl:border-none">
	<ul class="p-4 lg:p-8 flex space-x-4 lg:space-x-8 justify-center">
		<li>
			<a href="/clothing">
				<img src={Clothing} alt="clothing" />
			</a>
		</li>
		<li>
			<a href="/creations">
				<img src={Creations} alt="creations" />
			</a>
		</li>
		<li>
			<a href="/cuts">
				<img src={Cuts} alt="cuts" />
			</a>
		</li>
		<li>
			<a href="/college">
				<img src={College} alt="college" />
			</a>
		</li>
		<li>
			<a href="/cups">
				<img src={Cups} alt="cups" />
			</a>
		</li>
		<li>
			<a href="/cards">
				<img src={Cards} alt="cards" />
			</a>
		</li>
	</ul>
</section>
