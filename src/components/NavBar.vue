<template>
  <nav class="lg:hidden absolute top-32 w-full">
    <button @click="$emit('closeNavBar')" class="fixed inset-0 w-full h-full bg-transparent cursor-default z-10"></button>
    <div 
    class="text-gray-700 w-11/12 md:w-8/12 bg-gray-50 mx-auto flex flex-col items-stretch text-center py-5 gap-y-5 rounded-md shadow-2xl relative z-20">

      <div class="inline">
        <button @click="product = !product;" class="mr-6 font-semibold text-lg">Product
          <span>
            <svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': product}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4"/></svg></span>
          </button>

          <transition name="enter">
            <div v-if="product" class="bg-gray-200 mt-4 text-gray-800 w-11/12 mx-auto rounded-md">
              <div class="text-gray-800 flex flex-col text-center text-lg text-left pl-5 pr-16 gap-y-2 py-6">
                <a class="hover:font-semibold" href="#">Overview</a>
                <a class="hover:font-semibold" href="#">Pricing</a>
                <a class="hover:font-semibold" href="#">Marketplace</a>
                <a class="hover:font-semibold" href="#">Features</a>
                <a class="hover:font-semibold" href="#">Integrations</a>
              </div>
            </div>
          </transition>
        </div>

        <div class="inline">
          <button @click="company = !company" class="mr-6 font-semibold text-lg">Company
            <span>
              <svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': company}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4"/></svg></span>
            </button>

            <transition name="enter">
              <div v-if="company" class="bg-gray-200 mt-4 text-gray-800 w-11/12 mx-auto rounded-md">
                <div class="text-gray-800 flex flex-col text-center text-lg text-left pl-5 pr-16 gap-y-2 py-6">
                  <a class="hover:font-semibold" href="#">About</a>
                  <a class="hover:font-semibold" href="#">Team</a>
                  <a class="hover:font-semibold" href="#">Blog</a>
                  <a class="hover:font-semibold" href="#">Careers</a>
                </div>
              </div>
            </transition>
          </div>

          <div class="inline">
            <button @click="connect = !connect" class="mr-6 font-semibold text-lg">Connect
              <span>
                <svg class="inline fill-current align-middle ml-2" :class="{'transform rotate-180': connect}" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4"/></svg></span>
              </button>

              <transition name="enter">
                <div v-if="connect" class="bg-gray-200 mt-4 text-gray-800 w-11/12 mx-auto rounded-md">
                  <div class="text-gray-800 flex flex-col text-center text-lg text-left pl-5 pr-16 gap-y-2 py-6">
                    <a class="hover:font-semibold" href="#">Contact</a>
                    <a class="hover:font-semibold" href="#">Newsletter</a>
                    <a class="hover:font-semibold" href="#">LinkedIn</a>
                  </div>
                </div>
              </transition>
            </div>

            <div class="mt-2">
              <hr class="w-10/12 bg-gray-400 mx-auto mb-5">
              <a href="#" class="text-gray-800 text-xl block">Login</a>
              <a href="#" class="px-10 py-3 mt-4 inline-block rounded-full font-semibold text-gray-50 bg-red-light">Sign Up</a>
            </div>
          </div>

        </nav>
      </template>


      <script>
        export default {
          data() {
            return {
              product: false,
              company: false,
              connect: false,
            }
          },
          closeProduct() {
            // this.product = 
          }
        }
      </script>


      <style>
        .enter-enter-active {
          animation: enter 0.3s;
        }

        .enter-leave-active {
          animation: enter 0.2s reverse ease-out;
          transition: opacity 0.08s ease-out;
          opacity: 0;
        }

        @keyframes enter {
          0% {
            transform: translateY(50px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      </style>

