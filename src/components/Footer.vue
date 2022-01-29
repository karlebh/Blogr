<template>
	<footer style="border-radius: 0 100px 0 0;" class="bg-blue-darkest py-16">
		<div class="flex flex-col items-center max-w-6xl mx-auto px-6 lg:px-0 md:flex-row md:justify-between md:items-stretch">
			
			<Logo/>

			<div class="text-gray-400 mt-16 md:mt-0 text-center">
				<h1 class="text-gray-200">Products</h1>

				<div class="mt-6">
					<a href="#" class="block mt-1 hover:underline">Overview</a>
					<a href="#" class="block mt-1 hover:underline">Pricing</a>
					<a href="#" class="block mt-1 hover:underline">Marketplace</a>
					<a href="#" class="block mt-1 hover:underline">Features</a>
					<a href="#" class="block mt-1 hover:underline">Integrations</a>
				</div>
			</div>

			<div class="text-gray-400 mt-10 md:mt-0 text-center">
				<h1 class="text-gray-200">Company</h1>

				<div class="mt-6">
					<a href="#" class="mt-1 block hover:underline">About</a>
					<a href="#" class="mt-1 block hover:underline">Team</a>
					<a href="#" class="mt-1 block hover:underline">Blog</a>
					<a href="#" class="mt-1 block hover:underline">Careers</a>
				</div>
			</div>

			<div class="text-gray-400 mt-10 md:mt-0 text-center">
				<h1 class="text-gray-200">Connet</h1>

				<div class="mt-6">
					<a href="#" class="mt-1 block hover:underline">Contact</a>
					<a href="#" class="mt-1 block hover:underline">Newsletter</a>
					<a href="#" class="mt-1 block hover:underline">LinkedIn</a>
				</div>
			</div>

			<!-- Nothing Div -->
			<div></div>
			
		</div>

	</footer>
</template>

<script>
	import Logo from '@/components/Logo'
	export default {
		components: { Logo }
	}
</script>