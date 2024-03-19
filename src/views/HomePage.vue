<template>
  <div >
    <header-layout></header-layout>
    <main>
      <Hero />
      <ClientList/>
      <MyWork/>
      <Work :image="photo1"/>
      <Work :image="photo2"/>
      <WorkList :image1="photo3" :image2="photo4" :image3="photo3" />
      <Testimony/>
      <Cta/>
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
</script>

<style>

</style>