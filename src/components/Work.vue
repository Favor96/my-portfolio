<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-[835px] mt-[46px] max-lg:h-[436px] max-sm:h-72">
        <div class="w-full h-[685px] max-sm:h-64 max-lg:h-[336px] flex justify-center">
            <div class="w-[1529px] h-[597px] max-sm:h-52 max-lg:h-[320px] bg-blue-600">
                <div class=" my-8 mx-[126px] max-sm:my-14 max-sm:container max-lg:container max-lg:mx-auto max-sm:mx-auto ">
                    <img :src="props.image" alt="" class="object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    image: {
        type: String
    }
})

</script>

<style></style>