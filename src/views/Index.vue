<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header-layout class="header"></header-layout>
    <main  class="overflow-hidden">
      <Hero class="intro" v-if="$route.meta.showFirstChild"/>
      <who-iam class="fade-in intro " v-if="$route.meta.showFirstChild2"/>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import HeaderLayout from './Layout/HeaderLayout.vue';
import Footer from './Layout/Footer.vue';
import Hero from '@/components/Hero.vue';
import WhoIam from '@/components/WhoIam.vue';
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  initIntersectionObserver();
});

onUpdated(() => {
  initIntersectionObserver();
});

const initIntersectionObserver = () => {
  const header = document.querySelector('.header');

  const sectionOneOptions = {
    rootMargin: "0px 0px -100px 0px"
  };

  const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  }, sectionOneOptions);

  const introElement = document.querySelector('.intro');

  // Si l'élément intro est trouvé, observer ses changements d'intersection
  if (introElement) {
    sectionOneObserver.observe(introElement);
  }
};
</script>

<style scoped>
.nav-scrolled {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  z-index: 20;
}
</style>