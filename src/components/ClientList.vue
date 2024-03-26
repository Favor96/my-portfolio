<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-[160px] mt-[96px] max-sm:mt-12 flex items-center justify-center bg-black-10">
        <div class="h-[117px] w-[542px] m-8 flex flex-col justify-between">
            <div class="flex items-center justify-center ">
                <p class="text-black-50 text-center">J'ai eu le privilège de travailler pour certaines entreprises</p>
            </div>
            <div class="flex flex-row items-center justify-center">
                <div class="w-14  h-12">
                    <img :src="kalamar" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import kalamar from '../assets/kalamar.jpg'
</script>

<style></style>