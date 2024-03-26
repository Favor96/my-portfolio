<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-full mt-[96px] max-sm:mt-12 max-lg:mt-10 flex flex-row max-sm:flex-col max-sm:space-y-4 max-sm:space-x-0 space-x-4 max-lg:space-x-2">
    <div class="w-[578px] h-96 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96 fade-in">
      <div class="h-full shadow-lg">
        <img :src="Me1" alt="" class="object-cover w-full h-full ">
      </div>
    </div>
    <div class="w-[578px] h-96 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96 fade-in">
      <div class="h-full shadow-lg">
        <img :src="Me3" alt="" class="object-cover w-full h-full">
      </div>
    </div>
    <div class="w-[578px] h-96 max-sm:w-full max-sm:h-1/3 max-lg:w-96 max-lg:h-96 fade-in">
      <div class="h-full shadow-lg">
        <img :src="Me2" alt="" class="object-cover h-full w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
import Me1 from '../assets/Me1.jpg'
import Me2 from '../assets/Me2.jpg'
import Me3 from '../assets/Me3.jpg'
import { onMounted } from 'vue';


onMounted(() => {
  const sliders = document.querySelectorAll('.slide-in');
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 750ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}

</style>