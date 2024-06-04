<template>
    <div class="mx-10">
        <div class="flex flex-row justify-between my-5">
            <div class="flex flex-col w-fit">
                <span class="border-b-2 border-gray-200 font-bold text-rose-700 text-lg">TOYOTA</span>
                <span class="text-gray-600 pt-2">TOYOTA MATERIAL HANDLING INTERNATIONAL</span>
            </div>
            <div class="flex flex-row justify-between items-center">
                <nuxt-link class="px-5 font-semibold" to="/products">PRODUCTS</nuxt-link>
                <nuxt-link class="px-5 font-semibold" to="/">SERVICES</nuxt-link>
                <nuxt-link class="px-5 font-semibold" to="/">TRAINING</nuxt-link>
                <nuxt-link class="px-5 font-semibold" to="/">ABOUT US</nuxt-link>
                <span class="px-5">
                    <Icon name="eva:search-fill" color="black" />
                </span>
                <button class="px-5 mx-5 rounded-2xl py-2 bg-red-700 text-white">GET QUOTE</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>