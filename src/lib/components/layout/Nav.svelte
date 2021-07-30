<script>
	const item = `transition-colors grid grid-cols-1 justify-items-center content-start`
	const link = `grid grid-cols-1 justify-items-center content-start gap-1`
	const icon = `bg-transparent w-8 h-8 sm:w-12 sm:h-12 p-2 hover:bg-primary transition-colors rounded-full`
</script>

<nav class="px-2 pt-2 pb-4 w-full">
	<ul class="flex space-x-2 justify-around items-center max-w-sm mx-auto text-xs font-bold">
		<li class={item}><a href="" class={link}><img src="/icons/home.svg" alt="Home" class={icon} />Home</a></li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/search.svg" alt="Search" class={icon} />Search</a>
		</li>
		<li
			class="grid grid-cols-1 justify-items-center content-start"
		>
			<a href="" class={link}><img src="/icons/bag.png" alt="Cart" class={`bg-basics-900 ${icon}`} />Cart</a>
		</li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/heart.svg" alt="Favorites" class={icon} />Favorites</a>
		</li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/profile.svg" alt="Profile" class={icon} />Profile</a>
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
