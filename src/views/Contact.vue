<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <Cta :is-contact-page="$route.meta.isContactPage"></Cta>
        <ContactForm/>
    </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
import Cta from '@/components/Cta.vue';


</script>

<style></style>