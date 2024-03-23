<template>
  <div>
      <ClientList class="fade-in"/>
      <MyWork/>
      <Work :image="photo1" class="slide-in from-left"/>
      <Work :image="photo2" class="slide-in from-right"/>
      <WorkList :image1="photo3" :image2="photo4" :image3="photo3" />
      <Testimony class="fade-in"/>
      <Cta class="slide-in from-left"/>
  </div>
</template>

<script setup>
import ClientList from '@/components/ClientList.vue';
import MyWork from '@/components/MyWork.vue';
import Work from '@/components/Work.vue';
import Testimony from '@/components/Testimony.vue';
import Cta from '@/components/Cta.vue';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import WorkList from "@/components/WorkList.vue"

  const sliders = document.querySelectorAll('.slide-in');
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -800px 0px"
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

</script>

<style scoped>
.from-left {
  transform: translateX(-50%);
}



.from-left{
  transition: opacity 250ms ease-in, -webkit-transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in;
  transition: opacity 250ms ease-in, transform 400ms ease-in,
    -webkit-transform 400ms ease-in;
  opacity: 0;
}

.from-left.appear{
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}

</style>
