<template>
	<div class="hidden lg:block text-gray-200">
		<div class="inline relative">
		<button @click="product = !product" class="mr-6">Product<span>
			<svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': product}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg>
		</span></button>

		<transition name="flip">
			<div v-if="product" class="w-40 bg-white rounded-md absolute -left-6 top-10 z-20 text-gray-800">
				<div class="text-gray-800 flex flex-col text-left pl-5 pr-16 gap-y-2 py-6">
					<a class="hover:font-semibold" href="#">Overview</a>
					<a class="hover:font-semibold" href="#">Pricing</a>
					<a class="hover:font-semibold" href="#">Marketplace</a>
					<a class="hover:font-semibold" href="#">Features</a>
					<a class="hover:font-semibold" href="#">Integrations</a>
				</div>
			</div>
		</transition>

		<button @click="product = !product" v-if="product" class="fixed w-full h-full bg-transparent inset-0 z-10"></button>
		</div>

		<div class="inline relative">
		<button @click="company = !company" class="mr-6">Company<span>
			<svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': company}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg></span></button>

		<transition name="flip">
			<div v-if="company" class="w-40 bg-white rounded-md absolute -left-6 top-10 z-20">
				<div class="text-gray-800 flex flex-col text-left pl-5 pr-16 gap-y-2 py-6">
					<a class="hover:font-semibold" href="#">About</a>
					<a class="hover:font-semibold" href="#">Team</a>
					<a class="hover:font-semibold" href="#">Blog</a>
					<a class="hover:font-semibold" href="#">Careers</a>
				</div>
			</div>
		</transition>
		<button @click="company = !company" v-if="company" class="fixed w-full h-full bg-transparent inset-0 z-10"></button>
		</div>

		<div class="inline relative">
		<button @click="connect = !connect" class="mr-6">Connect<span>
		<svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': connect}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg></span></button>

		<transition name="flip">
			<div v-if="connect" class="w-40 bg-white rounded-md absolute -left-6 top-10 z-20">
				<div class="text-gray-800 flex flex-col text-left pl-5 pr-16 gap-y-2 py-6">
					<a class="hover:font-semibold" href="#">Contact</a>
					<a class="hover:font-semibold" href="#">Newsletter</a>
					<a class="hover:font-semibold" href="#">LinkedIn</a>
				</div>
			</div>
		</transition>

		<button @click="connect = !connect" v-if="connect" class="fixed w-full h-full bg-transparent inset-0 z-10"></button>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				product: false,
				company: false,
				connect: false,
			}
		}
	}
</script>

<style>
.flip-enter-active {
  animation: flip 0.2s;
}

.flip-leave-active {
  animation: flip 0.1s reverse;
}

@keyframes flip {
  0% {
    transform: scaleY(0.8);
  }

  100% {
    transform: scale(1);
  }
}
</style>