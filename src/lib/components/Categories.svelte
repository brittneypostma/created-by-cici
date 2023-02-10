<script>
	import Clothing from '@icons/clothing.png'
	import Creations from '@icons/creations.png'
	import Cuts from '@icons/cuts.png'
	import College from '@icons/college.png'
	import Cups from '@icons/cups.png'
</script>

<section class="w-full border-basics-700 border-t-2 xl:border-none">
	<ul class="p-4 flex space-x-4 lg:space-x-8 justify-center">
		<li>
			<!-- <a href=""> -->
			<img src={Clothing} alt="clothing" />
			<!-- </a> -->
		</li>
		<li>
			<!-- <a href=""> -->
			<img src={Creations} alt="creations" />
			<!-- </a> -->
		</li>
		<li>
			<!-- <a href=""> -->
			<img src={Cuts} alt="cuts" />
			<!-- </a> -->
		</li>
		<li>
			<!-- <a href=""> -->
			<img src={College} alt="college" />
			<!-- </a> -->
		</li>
		<li>
			<!-- <a href=""> -->
			<img src={Cups} alt="cups" />
			<!-- </a> -->
		</li>
	</ul>
</section>

<style>
	img {
		@apply w-16;
	}
</style>
