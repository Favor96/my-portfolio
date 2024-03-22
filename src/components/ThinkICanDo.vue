<template>
    <div class=" mt-[96px] max-sm:mt-12 flex flex-col space-y-8">
        <div class="mx-[128px] flex flex-row space-x-6">
            <div class="w-1/3 flex flex-col space-y-4 ">
                <div class="">
                    <font-awesome-icon :icon="faRocket" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phoneH6 max-lg:text-tabH6">Je peux faire le design d'un
                    site web responsive et le développer
                </div>
                <div class=" text-deskH6 max-sm:text-phonePara max-lg:text-paraTab text-black-75">Mon but est de créer
                    des interfaces utilisateur accessibles et
                    responsive pour le web et
                    le mobile, tout en préservant les meilleures pratiques pour une bonne expérience utilisateur.</div>
            </div>
            <div class="w-1/3 flex flex-col space-y-4 ">
                <div class="">
                    <font-awesome-icon :icon="faShoppingCart" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phoneH6 max-lg:text-tabH6">Je peux faire le design d'un
                    site e-commerce responsive et le développer </div>
                <div class="text-deskH6 max-sm:text-phonePara max-lg:text-paraTab text-black-75">J'ai une connaissance
                    approfondie du développement front-end et back-end, ce qui me permet
                    de créer un site e-commerce entièrement fonctionnel.</div>
            </div>
            <div class="w-1/3 flex flex-col space-y-4 ">
                <div class="">
                    <font-awesome-icon :icon="faMobileAlt" style="width: 40px; height: 60px;" />
                </div>
                <div class="text-paraH1 font-bold max-sm:text-phoneH6 max-lg:text-tabH6">Je peux faire le design d'une
                    application mobile et le développer </div>
                <div class="text-deskH6 max-sm:text-phonePara max-lg:text-paraTab text-black-75">J'ai également des
                    compétence en développement mobile. C’est un processus différent de la
                    conception de sites Web traditionnels, mais jusqu’à présent, j’ai réussi tous les projets.</div>
            </div>
        </div>
        <div class=" h-16 flex justify-center">
            <div class="w-[580px] bg-black-10 rounded-full  flex justify-center items-center">
                <div class="flex flex-row space-x-6 ">
                    <div class=" bg-black rounded-full">
                        <p class="text-white m-4">Outils utilisés pour le design</p>
                    </div>
                    <div class="">
                        <p class="m-4">Techno utilisés pour le développement</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="mx-[128px] flex flex-row space-x-4">
                <div class="w-1/4  bg-black-10">
                    <div class="flex flex-col my-6 space-y-3">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faLaravel" class="text-primary w-10 h-14" />
                        </div>
                        <p class="text-center">Laravel</p>
                    </div>
                </div>
                <div class="w-1/4  bg-black-10">
                    <div class="flex flex-col my-6 space-y-3">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faPython" class="text-primary w-10 h-14" />
                        </div>
                        <p class="text-center">Djang</p>
                    </div>
                </div>
                <div class="w-1/4  bg-black-10">
                    <div class="flex flex-col my-6 space-y-3">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faVuejs" class="text-primary w-10 h-14" />
                        </div>
                        <p class="text-center">Vuejs</p>
                    </div>
                </div>
                <div class="w-1/4  bg-black-10">
                    <div class="flex flex-col my-6 space-y-3">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faCss3" class="text-primary w-10 h-14"/>
                        </div>
                        <p class="text-center">Tailwind css</p>
                    </div>
                </div>
                <div class="w-1/4  bg-black-10">
                    <div class="flex flex-col my-6 space-y-3">
                        <div class="flex justify-center">
                            <font-awesome-icon :icon="faMobileAlt" class="text-primary w-10 h-14 " />
                        </div>
                        <p class="text-center">Flutter</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { faCss3, faLaravel, faPython, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faRocket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



</script>

<style></style>