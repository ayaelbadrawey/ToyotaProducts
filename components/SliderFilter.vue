<template>
    <div class="bg-gray-100 rounded-md w-full p-5 pb-10 border border-gray-200">

        <label for="default-range" class="block mb-4 font-semibold text-lg">{{ props.filter.name }}</label>
        <input v-model="value" id="default-range" type="range" value="50" :min="props.filter.from"
            :max="props.filter.to" class="w-full h-4 bg-red-700 rounded-lg appearance-none cursor-pointer mb-4">
        <div class="grid grid-cols-3 gap-4 items-baseline">
            <span class="bg-gray-100 rounded-md p-3 border border-gray-700">{{ props.filter.from }}Kg</span>
            <span class="text-center">{{ value }}Kg</span>
            <span class="bg-gray-100 rounded-md p-3 border border-gray-700">{{ props.filter.to }}Kg</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['filter'])
const value = ref(0);

// const emit = defineEmits(["select"])

// function selectClicked(data) {
//     emit("select", data)
// }

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