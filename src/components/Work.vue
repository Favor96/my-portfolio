<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-[835px] mt-[46px]">
        <div class="w-full h-[685px]  flex justify-center"> 
            <div class="w-[1529px] h-[597px] bg-blue-600">
                <div class=" my-8 mx-[126px]">
                    <img :src="props.image" alt="" class="object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    image:{
        type:String
    }
})

</script>

<style></style>