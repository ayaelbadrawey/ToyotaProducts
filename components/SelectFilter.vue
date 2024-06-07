<template>
    <div class="bg-gray-100 rounded-md w-fit p-5 pb-10 border border-gray-200" v-if="props.filter.name != 'Power Type'">
        <span class>{{ props.filter.name }}</span>
        <div class="flex flex-row items-baseline mt-5">
            <div class="flex flex-row items-baseline" v-for="(level, index) in props.filter.values" :key="level.id">
                <div class="flex flex-col text-center items-center">
                    <button class="bg-gray-200 rounded-full p-5 w-1"></button>
                    <span class="w-fit font-semibold" v-if="index % 2 == 0">{{ level.fields.name }}</span>
                </div>
                <span v-if="index != props.filter.values.length - 1" class="border-b-2 px-4"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['filter'])
</script>

<style></style>