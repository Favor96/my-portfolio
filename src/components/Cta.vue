<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class=" flex flex-col w-4/12 max-lg:ml-12 max-lg:w-1/2 max-sm:w-full  justify-between "
        :class="[props.isContactPage ? 'mt-[192px] max-sm:mt-28 max-lg:mt-28' : '', props.contactForm ? 'mx-0' : 'mx-32 max-sm:container max-sm:mx-auto h-72']">
        <div class="flex flex-col max-lg:pl-4  justify-start max-sm:justify-center max-sm:items-center space-y-3 "
            :class="[props.contactForm ? 'mx-0 max-sm:pl-0' : 'mx-2 ']">
            <div class="w-full flex justify-start">
                <p class=" text-deskH5 font-bold max-sm:text-start text-black max-sm:text-phoneH5 max-lg:text-tabH5"
                    v-if="!props.contactForm">Je
                    suis disponible pour la conception de vos projets</p>
                <p class=" text-deskH5 font-bold max-sm:text-start text-black max-sm:text-phoneH5 max-lg:text-tabH5"
                    v-else>Avez-vous des projets en tête et vous voulez les réalisés? Parlons en.</p>
            </div>
            <div class="">
                <p class="text-paraH1 max-sm:text-phonePara max-lg:text-paraTab max-sm:text-start text-black-75 "
                    v-if="!props.contactForm">
                    Si vous recherchez un designeur et un développeur pour vos projet informatique, parlons-en.</p>
                <p class="text-paraH1 max-sm:text-phonePara max-lg:text-paraTab max-sm:text-start text-black-75" v-else>
                    Utilisez le formulaire pour me donner le plus de détails possible et je vous répondrai dans les plus
                    brefs délais.<br /> vous pouvez également nous contacter en utilisant les informations ci-dessous ou
                    me contacter via les réseaux sociaux.</p>
            </div>
            <div class="flex  justify-start max-sm:justify-center max-sm:items-center space-x-6"
                :class="[props.contactForm ? 'w-full max-sm:flex-col' : 'flex-row']">
                <p class="text-[15px] text-center "
                    :class="[props.isContactPage ? 'w-1/2 text-white p-4 bg-primary ' : 'text-primary']">
                    abbeyfavor@gmail.com</p>
                <p class="text-[15px] text-center text-black font-bold"
                    :class="[props.isContactPage ? 'w-1/2 p-4 bg-black-25' : '']">+228 96 42 99 14</p>
            </div>
        </div>
        <div class="rounded-full h-16 w-[70%] max-lg:w-[80%] max-sm:w-full justify-start bg-brandGradiant  items-center shadow-lg"
            :class="[props.isContactPage || props.contactForm ? 'hidden' : 'flex']">
            <p class="px-4 text-center font-bold text-white">Avez vous des projets en tête? Parlons-en.</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    isContactPage: {
        type: Boolean,
        default: false
    },
    contactForm: {
        type: Boolean,
        default: false
    }
});

</script>

<style></style>