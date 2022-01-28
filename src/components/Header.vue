<template>
  <header style="background-image: linear-gradient(to right, hsl(13, 100%, 72%), hsl(355, 100%, 74%));border-radius: 0 0 0 100px;" class="relative">
    <div style="background: ;" class="pb-40 max-w-6xl mx-auto">
      <div class="flex justify-between items-center px-6 pt-14">
        <div class="lg:flex items-center justify-between">
          <Logo class="lg:mr-14"/>
          <Dropdowns/>
        </div>
        <div>
          <button @click="isOpen = !isOpen" class="lg:hidden">
            <!-- Close -->
            <svg v-if="isOpen" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/></svg>
            <!-- Hambuger -->
            <svg v-if="!isOpen" width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>
          </button>

          <div class="hidden lg:block">
            <a href="#" class="text-gray-100 mr-6">Login</a>
            <a href="#" class="px-8 py-3 bg-white rounded-full font-extrabold text-red-light hover:text-gray-50 hover:bg-red-300">Sign Up</a>
          </div>
        </div>
      </div>

        <!-- Text -->
      <div class="text-center pt-28 px-6 md:px-0">
        <h1 class="text-4xl text-gray-100 lg:text-6xl">A modern <br class="md:hidden"> publishing platform</h1>
        <p class="mt-4 text-gray-200 text-lg px-1">Grow your audience and build your online platform</p>

        <!-- links -->
        <div class="mt-20">
          <a href="#" class="mr-3 px-4 py-3 bg-white rounded-full font-extrabold text-red-light hover:text-gray-50 hover:bg-red-300">Start For Free</a>
          <a href="#" class="border-2 border-gray-300 rounded-full text-gray-200 py-3 px-6 font-bold hover:bg-white hover:text-red-light
          ">Learn More</a>
        </div>
      </div>

    </div>

    <!--  -->
    <NavBar @closeNavBar="isOpen = false" v-if="isOpen"/>

  </header>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import Logo from '@/components/Logo'
  import Dropdowns from '@/components/Dropdowns'
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    components: {
      NavBar,
      Logo,
      Dropdowns
    },
  }
</script>

