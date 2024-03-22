<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full mt-[96px] max-sm:mt-12 flex flex-row space-x-4">
    <div class="w-[578px] h-72 ">
      <div class="h-full shadow-lg">
        <img :src="photo1" alt="" class="object-cover h-full ">
      </div>
    </div>
    <div class="w-[578px] h-72 ">
      <div class="h-full shadow-lg">
        <img :src="photo2" alt="" class="object-cover h-full">
      </div>
    </div>
    <div class="w-[578px] h-72 ">
      <div class="h-full shadow-lg">
        <img :src="photo3" alt="" class="object-cover h-full">
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