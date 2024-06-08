<template>
    <div class="bg-gray-100 rounded-md w-full p-5 pb-10 border border-gray-200">

        <label for="default-range" class="block mb-4 font-semibold text-lg">{{ props.filter.name }}</label>
        <input v-model="value" id="default-range" type="range" :min="props.filter.from" :max="props.filter.to"
            class="w-full h-4 bg-red-700 rounded-lg appearance-none cursor-pointer mb-4"
            @change="slideChanged({ name: props.filter.name, item: value })">
        <div class="grid grid-cols-3 gap-4 items-baseline">
            <span class="bg-gray-100 rounded-md p-3 border border-gray-700">{{ props.filter.from }}Kg</span>
            <div class="flex flex-row justify-center">
                <input type="number" class="bg-gray-100 text-center border-0 w-fit py-2 mx-auto"
                    :min="props.filter.from" :max="props.filter.to" v-model="value"
                    @change="slideChanged({ name: props.filter.name, item: value })">
            </div>
            <!-- <span class="text-center"> {{ value }}</span> -->
            <span class="bg-gray-100 rounded-md p-3 border border-gray-700">{{ props.filter.to }}Kg</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['filter'])
const min = ref(0);
const max = ref(10000);
const value = ref(0);

const emit = defineEmits(["slide"])

function slideChanged(data) {
    emit("slide", data)
}
</script>

<style>
input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 23px;
    height: 23px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    border: 3px solid #b91c1c;
}
</style>