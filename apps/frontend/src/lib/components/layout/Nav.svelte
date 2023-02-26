<script>
	const item = `grid grid-cols-1 justify-items-center  bg-transparent hover:bg-primary transition-colors w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:underline`
	const link = `grid grid-cols-1 justify-items-center content-start gap-1 sm:gap-4`
	const icon = `w-12 h-12 sm:w-16 sm:h-16 p-2 rounded-full`
</script>

<nav class="px-2 pt-2 pb-8 mx-auto">
	<ul class="flex space-x-2 justify-around items-center max-w-sm mx-auto text-xs font-bold">
		<li class={item}>
			<img src="/icons/home.svg" alt="Home" class={icon} />
			Home
		</li>
		<li class={item}>
			<img src="/icons/search.svg" alt="Search" class={icon} />
			Search
		</li>
		<li class={`bg-basics-900 ${item}`}>
			<img src="/icons/bag.svg" alt="Cart" class={icon} />
			Cart
		</li>
		<li class={item}>
			<img src="/icons/heart.svg" alt="Favorites" class={icon} />
			Favorites
		</li>
		<li class={item}>
			<img src="/icons/profile.svg" alt="Profile" class={icon} />
			Profile
		</li>
	</ul>
</nav>

<style>
	@media (min-width: 1024px) {
		nav {
			position: absolute;
			top: 0px;
			left: 50%;
			transform: translate(-50%, 0%);
		}
	}
</style>
