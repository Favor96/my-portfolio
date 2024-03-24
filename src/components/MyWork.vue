<template>
    <div class="flex justify-center mt-[48px] max-sm:mt-12 fade-in">
        <div class="w-[636px] h-[143px] flex flex-col items-center justify-center slide-in">
            <p class="text-center text-deskH3 text-black font-bold max-lg:text-tabH3 max-sm:text-phoneH3">Projets réalisés</p>
            <p class="text-center text-paraH1 text-black-75 max-lg:text-paraTab max-sm:text-phonePara max-sm:container max-sm:mx-auto">Je suis spécialisé dans le développement web et mobile, je suis également web designer</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
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

    faders.forEach(fader => {
    appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

});
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
