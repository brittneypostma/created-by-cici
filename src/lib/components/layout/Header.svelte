<script>
	import Logo from '@components/layout/Logo.svelte'
	import Nav from '@components/layout/Nav.svelte'
</script>

<header
	class="flex space-x-2 items-center justify-between w-full max-w-7xl mx-auto bg-basics-50 p-2"
>
	<div class="flex space-x-2 items-end">
		<Logo />
		<h1 class="text-2xl sm:text-4xl leading-none">Created by Cici</h1>
	</div>
	<div class="hidden lg:flex">
		<Nav />
	</div>
	<div class="flex h-full items-end">
		<ul class="flex space-x-4 items-end text-xs font-bold">
			<li>
				<a href="" class="grid grid-cols-1 justify-items-center"
					><img src="icons/bag.png" alt="Cart" />My Bag</a
				>
			</li>
		</ul>
	</div>
</header>
