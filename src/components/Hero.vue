<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mx-auto mt-[96px] flex flex-col  items-center ">
        <div class="mx-4 flex flex-col items-center w-full">
            <div class="flex items-center justify-center">
                <p class="text-center text-color text-deskH4">Bonjour, Je suis ABBEY Favor</p>
            </div>
            <div class="flex items-center justify-center text-deskH1 text-black font-bold p-4">
                <p class="text-center">Développeur fulstack web & mobile</p>
            </div>
            <div class="flex items-center w-1/2 justify-center">
                <p class="text-center text-paraH1">I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that likes to get stuff done, let’s talk.</p>
            </div>
        </div>
        <div class="w-[207px] h-[40px] p-4 mt-[48px] rounded-full bg-brandGradiant flex flex-row items-center justify-between">
            <div class=""><p class="text-center text-white">Voir mes projets</p></div>
            <div class="">
                <font-awesome-icon :icon="['fas', 'arrow-down']" :style="{ color: '#FFFFFF' }" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.text-color {
    color: transparent; /* Rend le texte transparent */
    background: linear-gradient(90deg, #FE572E, #FC3A79);
    -webkit-background-clip: text; 
    background-clip: text;
}

</style>