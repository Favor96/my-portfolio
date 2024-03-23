<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full mt-[96px] max-sm:mt-12 max-lg:mt-10 flex flex-row max-sm:flex-col max-sm:space-y-4 max-sm:space-x-0 space-x-4 max-lg:space-x-2">
    <div class="w-[578px] h-72 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96">
      <div class="h-full shadow-lg">
        <img :src="photo1" alt="" class="object-cover h-full ">
      </div>
    </div>
    <div class="w-[578px] h-72 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96">
      <div class="h-full shadow-lg">
        <img :src="photo2" alt="" class="object-cover h-full">
      </div>
    </div>
    <div class="w-[578px] h-72 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96">
      <div class="h-full shadow-lg">
        <img :src="photo3" alt="" class="object-cover h-full w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.jpg';
</script>

<style></style>