<!-- eslint-disa
  components: { WhoIam },ble vue/multi-word-component-names -->
<template>
      <div>
          <PictureVue class="fade-in"/>
          <think-i-can-do />
          <Cta class="mt-32 slide-in from-left" />
      </div>
</template>

<script setup>
import PictureVue from '@/components/Picture.vue';
import ThinkICanDo from '@/components/ThinkICanDo.vue';
import Cta from '@/components/Cta.vue';
import { onMounted } from 'vue';
onMounted(() => {
  const sliders = document.querySelectorAll('.slide-in');
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        console.log('position' , appearOnScroll.rootMargin);
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
.from-left {
  transform: translateX(-50%);
}

.from-right {
  transform: translateX(50%);
}

.from-left, .from-right {
  transition: opacity 750ms ease-in, -webkit-transform 750ms ease-in;
  transition: opacity 750ms ease-in, transform 750ms ease-in;
  transition: opacity 750ms ease-in, transform 750ms ease-in,
    -webkit-transform 750ms ease-in;
  opacity: 0;
}

.from-left.appear, .from-right.appear{
  transform: translateX(0);
  opacity: 1;
}
</style>
