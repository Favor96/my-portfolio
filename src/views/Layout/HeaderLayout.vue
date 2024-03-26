<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <div class="border border-b border-black-10 lg:fixed lg:w-full lg:top-0 ">
      <div class="bg-white ">

        <div class="lg:hidden flex top-0 pb-0 px-7 z-20 left-0 right-0 bg-white fixed flex-row justify-between items-center">
          <div>Logo</div>
          <div class="flex flex-row items-center space-x-16">
            <div class="flex max-sm:hidden flex-row space-x-8">
              <div>
                <font-awesome-icon icon="fab fa-linkedin" />
              </div>
              <div>
                <font-awesome-icon icon="fab fa-twitter" />
              </div>
              <div>
                <font-awesome-icon icon="fab fa-instagram" />
              </div>
            </div>
            <div class=" max-sm:block w-8 h-4 m-4 space-y-1 " @click="setNavBarOpen">
              <div class="w-full h-1 bg-black"></div>
              <div class="w-full h-1 bg-black"></div>
              <div class="w-full h-1 bg-black"></div>
            </div>
          </div>
        </div>
        <div class="  mb-0 mt-0 h-16 lg:flex " :class="[navbarOpen ? 'flex flex-col h-auto fixed top-10 left-0 right-0 px-14 py-2 z-20 bg-white' : 'hidden m-14 flex-row space-x-4']">
          <div class="items-center   flex" :class="[navbarOpen ? 'flex-col space-y-2' : ' flex-row space-x-8 w-1/2']">
            <div class="max-sm:hidden max-lg:hidden">Logo</div>
            <div class="text-deskH6 font-bold">
              <router-link :to="{ name: 'home' }">
                <a>Acceuil</a>
              </router-link>
            </div>
            <div class="text-deskH6 font-bold">
              <router-link :to="{ name: 'aboutMe' }">
                <a>A propos de moi</a>
              </router-link>
            </div>
            <div class="text-deskH6 font-bold">
              <router-link :to="{ name: 'contact' }">
                <a>Contact</a>
              </router-link>
            </div>
          </div>
          <div class="items-center   flex " :class="[navbarOpen ? 'flex-col space-y-2 w-full' : ' flex-row space-x-8 w-1/2 justify-end']">
            <div class="flex "  :class="[navbarOpen ? 'flex-col space-y-2 items-center justify-center w-full' : ' flex-row space-x-6']">
              <div class="text-deskH6 font-bold text-primary">
                abbeyfavor@gmail.com
              </div>
              <div class="text-deskH6 font-bold ">+228 96 42 99 14 </div>
            </div>
            <div class="flex flex-row space-x-4">
              <div>
                <a href="https://www.linkedin.com/in/favor-abbey-0100a1294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank">
                  <font-awesome-icon icon="fab fa-linkedin" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/favor.abbey.58" target="_blank">
                  <font-awesome-icon :icon="faFacebook" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/mfavor_19?igsh=YzdiaHA4ZmtyYTUw " target="_blank"><font-awesome-icon
                    icon="fab fa-instagram" /></a>
  
              </div>
            </div>
          </div>
        </div>
  
      </div>
      </div>

  
</template>

<script setup>
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { ref } from 'vue';

var navbarOpen = ref(false)

function setNavBarOpen() {
  navbarOpen.value = !navbarOpen.value
}
</script>

<style></style>