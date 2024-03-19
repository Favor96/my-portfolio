<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-[485px] mt-[46px] flex justify-center bg-emerald-500 ">
      <div class="w-full h-[385px] mx-32 flex  flex-col ">
        <div class="mt-12 flex justify-center relative z-30">
          <div class="w-[596px] h-72 relative z-20">
            <img :src="props.image1" alt="" class="object-cover">
          </div>
        </div>
        <div class="w-full flex flex-row  -mt-16">
          <div class="w-[596px] h-72 mt-4 relative z-20">
            <img :src="props.image2" alt="" class="object-cover">
          </div>
          <div class="w-[596px] h-72 relative -ml-10 z-10">
            <img :src="props.image3" alt="" class="object-cover">
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script setup>

const props = defineProps({
    image1: {
        type: String
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
})

</script>

<style></style>