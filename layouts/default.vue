<template>
    <div class="mx-10 mb-20">
        <div class="flex md:flex-row flex-col justify-between my-5">
            <div class="flex flex-col w-fit">
                <nuxt-link to="/" class="border-b-2 border-gray-200 font-bold text-rose-700
                    text-lg">TOYOTA</nuxt-link>
                <span class="text-gray-600 pt-2 md:block hidden">TOYOTA MATERIAL HANDLING INTERNATIONAL</span>
            </div>
            <div class="flex md:flex-row flex-col justify-between items-center gap-10 font-semibold">
                <nuxt-link class="transition ease-out hover:scale-110 hover:text-red-700"
                    to="/products">PRODUCTS</nuxt-link>
                <nuxt-link class="cursor-pointer transition ease-out hover:scale-110 hover:text-red-700"
                    to="">SERVICES</nuxt-link>
                <nuxt-link class="cursor-pointer transition ease-out hover:scale-110 hover:text-red-700"
                    to="">TRAINING</nuxt-link>
                <nuxt-link class="cursor-pointer transition ease-out hover:scale-110 hover:text-red-700" to="">ABOUT
                    US</nuxt-link>
                <span class="cursor-pointer">
                    <Icon name="eva:search-fill" color="black" />
                </span>
                <button class="px-5 rounded-2xl py-2 bg-red-700 text-white">GET QUOTE</button>
            </div>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style>
.router-link-exact-active {
    color: rgb(185 28 28);
    border-bottom: 2px solid rgb(229 231 235)
}
</style>