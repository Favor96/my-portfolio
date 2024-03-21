<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full h-[485px] mt-[46px] max-sm:h-[400px] flex justify-center bg-emerald-500 ">
    <div class="w-full h-[385px] mx-32 flex  flex-col ">
      <div class="mt-12 max-sm:hidden flex justify-center relative ">
        <div class="w-[596px] h-72 relative z-10 from-top slide-in">
          <img :src="props.image1" alt="" class="object-cover">
        </div>
      </div>
      <div class="w-full max-sm:hidden flex flex-row  -mt-16  ">
        <div class="w-[596px] h-72 mt-4 relative z-10 from-left slide-in">
          <img :src="props.image2" alt="" class="object-cover">
        </div>
        <div class="w-[596px] h-72 relative -ml-10 z-10 from-right slide-in">
          <img :src="props.image3" alt="" class="object-cover">
        </div>
      </div>
      <div class="w-full hidden  max-sm:flex  flex-row  mt-12  ">
        <div class="w-[596px] h-72 mt-4 relative z-10 from-left slide-in">
          <img :src="props.image2" alt="" class="object-cover">
        </div>
        <div class="w-[596px] h-72 relative -ml-10 z-10 from-right slide-in">
          <img :src="props.image3" alt="" class="object-cover">
        </div>
      </div>
      <div class="hidden -mt-16 max-sm:flex justify-center relative ">
        <div class="w-[596px] h-72 relative z-10 from-top slide-in">
          <img :src="props.image1" alt="" class="object-cover">
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from "vue";


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
onMounted(() => {
  const sliders = document.querySelectorAll('.slide-in');
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
    appearOptions);

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

.from-top {
  transform: translateY(200%);
}


.from-left,
.from-right, .from-top {
  transition: transform 400ms ease-in;
}

.from-left.appear,
.from-right.appear {
  transform: translateX(0);
}

.from-top.appear{
  transform: translateY(0);
}
</style>