<script>
	import Logo from '@components/layout/Logo.svelte';
	// import Nav from '@components/layout/Nav.svelte'
	import Categories from '@components/Categories.svelte';
</script>

<header class="max flex space-x-2 items-center justify-between bg-basics-50 px-2 pt-2 pb-4 mb-5">
	<div class="logo flex space-x-2 items-end">
		<a href="/">
			<Logo />
		</a>
		<span class="text-2xl sm:text-4xl leading-none">Created by Cici</span>
	</div>
	<div class="hidden lg:flex">
		<!-- 	<Nav /> -->
		<Categories />
	</div>
	<div class="flex h-full items-end">
		<ul class="flex space-x-4 items-end text-xs font-bold">
			<li>
				<a href="/cart" class="grid grid-cols-1 justify-items-center">
					<img src="icons/bag.png" alt="Cart" />
					My Bag
				</a>
			</li>
		</ul>
	</div>
</header>

<style>
	header {
		display: flex;
		gap: var(--size-2);
		align-items: center;
		justify-content: space-between;
		background: var(--basics-50);
		padding: var(--size-2) var(--size-2) var(--size-4) var(--size-2);
		margin-bottom: var(--size-5);
	}

	.hidden {
		background: transparent;
		display: none;
	}

	.logo {
		display: flex;
		gap: var(--size-2);
		align-items: flex-end;
	}

	span {
		font-size: var(--font-size-5);
		line-height: var(--font-line-height-0);
	}

	@media (min-width: 1024px) {
		.hidden {
			display: flex;
		}
	}
</style>
