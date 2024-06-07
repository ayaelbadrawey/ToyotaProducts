<template>
    <div class="mx-10">
        <div class="flex justify-center flex-row">
            <span class="font-bold text-3xl pb-2 border-b border-red-700">RANGES</span>
        </div>
        <div class="mt-10 flex flex-col md:flex-row gap-4">
            <SelectFilter v-for="(filter, index) in count.data['Select-Type']" :key="index" :filter="filter">
            </SelectFilter>
        </div>
        <div class="grid grid-cols-4 mt-10">
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
        </div>
    </div>
</template>
<script setup>
const { data: count } = await useFetch('https://api-forklift.code95.info/v1/products/filters');

</script>
<style></style>