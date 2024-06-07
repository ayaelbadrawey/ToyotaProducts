<template>
    <div class="rounded-md border border-gray-200 overflow-hidden w-full">
        <div class="flex flex-col items-center h-full gap-2">
            <div class="w-full h-3/5">
                <img :src="props.product.featured_image" class="h-full object-contain mx-auto size-6/12"
                    alt="product-image">
            </div>
            <span class="text-rose-700 font-semibold text-2xl text-center">{{ props.product.name }}</span>
            <span class="text-xl font-semibold">{{ props.product.code }}</span>
            <div class="flex-flex-row">
                <span class="text-xl font-semibold"> CAPACITY: </span>
                <span class="text-xl font-semibold text-rose-700">{{ props.product.numericTypes[0].value }}</span>
            </div>
            <button class="px-5 rounded-2xl py-3 bg-red-700 text-white my-5 font-semibold">VIEWPRODUCT</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product'])

</script>

<style></style>