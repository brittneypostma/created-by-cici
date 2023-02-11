<script>
	import Logo from '@components/Logo.svelte'
	// import Nav from '@components/layout/Nav.svelte'
	import Categories from '@components/Categories.svelte'
	import Bag from '@icons/bag.png'
</script>

<header
	class="sticky top-0 mt-2 bg-basics-50 max flex space-x-2 items-center justify-between border-basics-700 border-b-2 px-2 pt-2 pb-4"
>
	<a href="/" class="flex space-x-2 items-end">
		<Logo />
		<span class="font-heading text-2xl sm:text-4xl leading-none">Created by Cici</span>
	</a>
	<div
		class="hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex lg:absolute"
	>
		<!-- 	<Nav /> -->
		<Categories />
	</div>
	<div class="flex h-full items-center">
		<!-- <ul class="flex space-x-4 items-end text-xs font-bold">
			<li>
				- <a href="/cart" class="grid grid-cols-1 justify-items-center"> 
				 <img src={Bag} alt="Cart" />My Bag
				 </a> 
			</li> 
		</ul>-->
	</div>
</header>
