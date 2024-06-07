<template>
    <div>
        <div class="bg-gray-200	">
            <div class="flex flex-col md:flex-row justify-end md:gap-20 py-2 mx-10 items-center">
                <span class="cursor-pointer">
                    <Icon name="eva:pin-outline" class="mx-2 font-normal" color="#b91c1c"></Icon>Locations
                </span>
                <span class="cursor-pointer">
                    <Icon name="eva:email-outline" class="mx-2 font-normal" color="#b91c1c"></Icon>Contact Us
                </span>
                <span class="cursor-pointer">عربي</span>

            </div>
        </div>
        <div class="mx-10 flex md:flex-row flex-col justify-between my-5 pb-10 border-b-2 border-gray-100">
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
    <div class="mt-20">
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