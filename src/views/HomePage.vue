<template>
  <div class="overflow-hidden">
    <header-layout class="header"></header-layout>
    <main>
      <Hero class="fade-in intro"/>
      <ClientList class="fade-in"/>
      <MyWork/>
      <Work :image="photo1" class="slide-in from-left"/>
      <Work :image="photo2" class="slide-in from-right"/>
      <WorkList :image1="photo3" :image2="photo4" :image3="photo3" />
      <Testimony class="fade-in"/>
      <Cta class="slide-in from-left"/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import HeaderLayout from './Layout/HeaderLayout.vue';
import Footer from './Layout/Footer.vue';
import Hero from "@/components/Hero.vue"
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
import { onMounted } from 'vue';

onMounted(() => {
  const sliders = document.querySelectorAll('.slide-in');
  const faders = document.querySelectorAll('.fade-in');
  const header = document.querySelector('.header'); // Change to querySelector

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
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

  const intro = document.querySelector('.intro'); // Change to querySelector
  
  const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  }, sectionOneOptions);

  sectionOneObserver.observe(intro);
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

.fade-in {
  opacity: 0;
  transition: opacity 250ms ease-in;
}

.fade-in.appear {
  opacity: 1;
}

.nav-scrolled {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 20;
}
</style>
