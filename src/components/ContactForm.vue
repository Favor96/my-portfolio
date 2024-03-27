<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="flex flex-row max-sm:flex-col max-sm:space-x-0 max-sm:space-y-16 space-x-4 mx-32 max-lg:mx-12 max-lg:flex-col max-lg:space-y-16 h-auto  ">
        <div class="w-1/2 max-lg:w-full max-sm:w-full">
            <Cta :contact-form="true" class="w-full max-sm:w-full max-lg:w-full max-lg:ml-0" />
        </div>
        <form class="w-1/2 h-full flex flex-col  space-y-4 max-sm:w-full max-lg:w-full " @submit.prevent="sendEmail()">
            <div class="flex flex-row max-sm:flex-col max-sm:space-y-4 space-x-4 max-sm:space-x-0 w-full">
                <div class="flex flex-col space-y-2 w-1/2 max-sm:w-full">
                    <label for="name" class="text-deskH6 font-bold">Nom</label>
                    <input type="text" class="rounded-md bg-black-10 border-none" placeholder="Entrez votre nom" v-model="senderName"/>
                </div>
                <div class="flex flex-col space-y-2  w-1/2  max-sm:w-full">
                    <label for="name" class="text-deskH6 font-bold">Email</label>
                    <input type="email" class="rounded-md bg-black-10 border-none" placeholder="Entrez votre email" v-model="senderEmail" />
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <label for="name" class="text-deskH6 font-bold">Details du projet</label>
                <textarea class="rounded-md bg-black-10 border-none"
                    placeholder="Decrivez nous votre projet" v-model="senderDetail"></textarea>
            </div>
            <!-- <div class="flex flex-row max-sm:flex-col max-sm:space-y-4 space-x-4 max-sm:space-x-0 w-full">
                <div class="flex flex-col space-y-2 w-1/2 max-sm:w-full">
                    <label for="name" class="text-deskH6 font-bold">Votre budget</label>
                    <input type="text" class="rounded-md bg-black-10 border-none" placeholder="Entrez votre budget" />
                </div>
                <div class="flex flex-col space-y-2 w-1/2 max-sm:w-full">
                    <label for="name" class="text-deskH6 font-bold">Deadline</label>
                    <input type="date" class="rounded-md bg-black-10 border-none" />
                </div>
            </div> -->
            <div class="w-full h-10 bg-brandGradiant flex justify-center shadow-md rounded-full">
                <button type="submit" class="text-center text-white font-bold">Envoyer</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import Cta from './Cta.vue';
import { ref } from 'vue';

const senderName = ref('');
const senderEmail = ref('');
const senderDetail = ref('');

const sendEmail = () => {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "abbeyfavor@gmail.com",
    Password : "ACBB3282D3F2D51D010CF8D0944F21056F2C",
    To : 'hamr27383@gmail.com',
    From : 'hamr27383@gmail.com',
    Subject : "senderDetail.value",
    Body: "Nom: " + senderName.value + "<br/>E-mail: " + senderEmail.value + "<br/><br/>Message: " + senderDetail.value
}).then(
    message => {
      alert("Message envoyé avec succès !");
      // Réinitialiser les champs du formulaire après l'envoi
      senderName.value = '';
      senderEmail.value = '';
      senderDetail.value = '';
    }
);
};
</script>

<style>

</style>