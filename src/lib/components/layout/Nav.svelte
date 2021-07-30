<script>
	const item = `w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-transparent p-2 hover:bg-primary transition-colors grid grid-cols-1 justify-items-center content-start`
	const link = `grid grid-cols-1 justify-items-center content-start gap-1`
</script>

<nav class="px-2 pt-2 pb-4 w-full">
	<ul class="flex space-x-2 justify-around items-center max-w-sm mx-auto text-xs font-bold">
		<li class={item}><a href="" class={link}><img src="/icons/home.svg" alt="Home" />Home</a></li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/search.svg" alt="Search" />Search</a>
		</li>
		<li
			class="w-8 h-8 sm:w-12 sm:h-12 bg-basics-900 grid grid-cols-1 justify-items-center content-start rounded-full p-2 hover:bg-primary transition-colors"
		>
			<a href="" class={link}><img src="/icons/bag.png" alt="Cart" />Cart</a>
		</li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/heart.svg" alt="Favorites" />Favorites</a>
		</li>
		<li class={item}>
			<a href="" class={link}><img src="/icons/profile.svg" alt="Profile" />Profile</a>
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
