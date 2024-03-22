<!-- eslint-disa
  components: { WhoIam },ble vue/multi-word-component-names -->
<template>
      <div>
          
          <PictureVue class="fade-in"/>
          <think-i-can-do class="slide-in from-left"/>
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
    rootMargin: "-100px 0px 0px 0px"
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
.from-left {
  transform: translateX(-50%);
}

.from-right {
  transform: translateX(50%);
}

.from-left,
.from-right {
  transition: transform 400ms ease-out;
}

.from-left.appear,
.from-right.appear {
  transform: translateX(0);
}
</style>
