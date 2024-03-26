<template>
    <div class=" mt-[96px] max-sm:mt-12  flex flex-col space-y-8 slide-in">
        <div
            class="mx-[128px] flex flex-row space-x-6 max-sm:space-x-0 max-sm:mx-5 max-lg:mx-12 max-sm:flex-col max-lg:flex-col max-lg:space-x-0 max-lg:space-y-6 max-sm:space-y-6">
            <div class="w-1/3 max-sm:w-full flex flex-col space-y-4 max-lg:w-full slide-in from-left">
                <div class="">
                    <font-awesome-icon :icon="faRocket" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phonePara max-lg:text-tabH6">Je peux faire le design d'un
                    site web responsive et le développer
                </div>
                <div class=" text-deskH6 max-sm:text-phoneH6 max-lg:text-paraTab text-black-75">Mon but est de créer
                    des interfaces utilisateur accessibles et
                    responsive pour le web et
                    le mobile, tout en préservant les meilleures pratiques pour une bonne expérience utilisateur.
                </div>
            </div>
            <div class="w-1/3 max-sm:w-full flex flex-col space-y-4 max-lg:w-full slide-in from-right">
                <div class="">
                    <font-awesome-icon :icon="faShoppingCart" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phonePara max-lg:text-tabH6">Je peux faire le design d'un
                    site e-commerce responsive et le développer </div>
                <div class="text-deskH6 max-sm:text-phoneH6 max-lg:text-paraTab text-black-75">J'ai une connaissance
                    approfondie du développement front-end et back-end, ce qui me permet
                    de créer un site e-commerce entièrement fonctionnel.</div>
            </div>
            <div class="w-1/3 max-sm:w-full flex flex-col space-y-4 max-lg:w-full slide-in from-left">
                <div class="">
                    <font-awesome-icon :icon="faMobileAlt" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phonePara max-lg:text-tabH6">Je peux faire le design d'une
                    application mobile et le développer </div>
                <div class="text-deskH6 max-sm:text-phoneH6 max-lg:text-paraTab text-black-75">J'ai également des
                    compétence en développement mobile. C’est un processus différent de la
                    conception de sites Web traditionnels, mais jusqu’à présent, j’ai réussi tous les projets.</div>
            </div>
        </div>
        <div class="h-16 max-sm:mx-5 ">
            <div class="  w-full flex justify-center">
                <div class="w-[580px] bg-black-10 rounded-full max-lg:w-1/3 max-sm:w-1/2 flex justify-center items-center">
                    <div class="flex w-full flex-row space-x-6  max-sm:space-x-4 max-sm:p-2 max-lg:p-2">
                        <div
                            class=" max-sm:w-1/2 max-lg:w-full  rounded-full flex max-sm:justify-center max-lg:justify-center max-lg:items-center" @click="toogle" :class="[toggleTool ? 'bg-black text-white' : 'bg-black-10 text-black' ]">
                            <p class="m-4 max-sm:hidden max-lg:hidden">Techno utilisés pour le développement </p>
                            <font-awesome-icon :icon=" faCode" class="hidden max-sm:flex max-lg:flex text-white m-5" />
                        </div>
                        <div
                            class="max-sm:w-1/2 max-lg:w-full rounded-full flex max-sm:justify-center max-lg:justify-center max-lg:items-center" @click="toogle" :class="[!toggleTool ? 'bg-black text-white' : 'bg-black-10' ]">
                            <p class="m-4 max-sm:hidden  max-lg:hidden">Outils utilisés pour le design</p>
                            <font-awesome-icon :icon="faTools"
                                class="hidden max-sm:flex max-lg:flex text-white m-5 max-lg:m-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-[128px]  max-sm:mx-5  ">
            <div class="hidden max-sm:flex lg:flex w-full space-x-4 max-sm:space-x-0 max-sm:flex-col max-sm:space-y-6">

                <div class="w-1/4 max-sm:w-full bg-black-10  slide-in from-left ">
                    <div v-if="toggleTool"
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faLaravel" class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Laravel</p>
                    </div>
                    <div v-else
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faFigma" class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Figma</p>
                    </div>
                </div>
                <div class="w-1/4 max-sm:w-full bg-black-10 slide-in from-left " >
                    <div v-if="toggleTool"
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faPython" class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Django</p>
                    </div>
                </div>
                <div class="w-1/4 max-sm:w-full bg-black-10 slide-in from-right"  >
                    <div v-if="toggleTool"
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faVuejs" class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Vuejs</p>
                    </div>
                </div>
                <div class="w-1/4 max-sm:w-full bg-black-10 slide-in from-right" >
                    <div v-if="toggleTool"
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faCss3" class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Tailwind css</p>
                    </div>
                </div>
                <div class="w-1/4 max-sm:w-full bg-black-10 slide-in from-left" >
                    <div v-if="toggleTool"
                        class="flex flex-col my-6 space-y-3 max-sm:my-2 max-sm:space-y-1 max-sm:space-x-6 max-sm:items-center max-sm:flex-row max-sm:ml-4">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faMobileAlt"
                                class="text-primary w-10 h-14 max-sm:w-8 max-sm:h-8" />
                        </div>
                        <p class="text-center">Flutter</p>
                    </div>
                </div>

            </div>

            <div class="hidden max-sm:hidden max-lg:flex flex-col w-full space-y-6">
                <div class="flex flex-row justify-center  space-x-6 slide-in from-left">
                    <div class="w-1/4  bg-black-10 p-2">
                        <div class="flex flex-row space-x-4 "  v-if="toggleTool">
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faLaravel" class="text-primary  w-8 h-8" />
                            </div>
                            <p class="text-center">Laravel</p>
                        </div>
                        <div class="flex flex-row space-x-4 "  v-else>
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faFigma" class="text-primary  w-8 h-8" />
                            </div>
                            <p class="text-center">Figma</p>
                        </div>
                    </div>
                    <div class="w-1/4  bg-black-10 p-2" v-if="toggleTool">
                        <div class="flex flex-row space-x-4">
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faPython" class="text-primary  w-8 h-8" />
                            </div>
                            <p class="text-center">Django</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row space-x-6 justify-center slide-in from-right" >
                    <div class="w-1/3  bg-black-10 p-2" v-if="toggleTool">
                        <div class="flex flex-row space-x-4">
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faVuejs" class="text-primary  w-8 h-8" />
                            </div>
                            <p class="text-center">Vuejs</p>
                        </div>
                    </div>
                    <div class="w-1/3  bg-black-10 p-2" v-if="toggleTool">
                        <div class="flex flex-row space-x-4">
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faCss3" class="text-primary  w-8 h-8" />
                            </div>
                            <p class="text-center">Tailwind css</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row space-x-6 justify-center slide-in from-left">
                    <div class="w-1/4  bg-black-10 p-2" v-if="toggleTool">
                        <div class="flex flex-row space-x-4">
                            <div class="flex justify-center">
                                <font-awesome-icon :icon="faMobileAlt" class="text-primary w-8 h-8 " />
                            </div>
                            <p class="text-center">Fluter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { faCss3, faFigma, faLaravel, faPython, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMobileAlt, faRocket, faShoppingCart, faTools } from '@fortawesome/free-solid-svg-icons';

import { onMounted, ref } from 'vue';

const toggleTool = ref(true);

const toogle = () => {
    toggleTool.value = !toggleTool.value
}


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