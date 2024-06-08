<template>
    <div class="bg-gray-100 rounded-md w-full p-5 pb-10 border border-gray-200"
        v-if="props.filter.name != 'Power Type'">
        <span class="font-semibold text-lg">{{ props.filter.name }}</span>
        <div class="flex flex-row items-baseline mt-5 flex-wrap">
            <div class="flex flex-row items-baseline" v-for="(level, index) in props.filter.values" :key="index">
                <div class="flex flex-col text-center items-center">
                    <button class="bg-gray-200 rounded-full p-5 cursor-pointer w-1 hover:bg-red-700 transition ease-out"
                        @click="selectClicked({ name: props.filter.name, item: level.fields.name, index: level.fields.id }); handleButtonClick(index)"
                        :key="index"
                        :class="{ 'active-button': activeIndex == index && !props.isRemoved.includes(level.fields.id) }"></button>
                    <span span v-if="index % 2 == 0">{{ level.fields.name }}</span>
                </div>
                <hr v-if="index != props.filter.values.length - 1" class="border-b-2 px-4">
                </hr>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['filter', 'isRemoved'])
const emit = defineEmits(["select"])

var activeIndex = ref(null);

function selectClicked(data) {
    const index = props.isRemoved.indexOf(data.index);
    if (index > -1) {
        props.isRemoved.splice(index, 1);
    }
    props.isRemoved = props.isRemoved.filter(function (el) {
        return el.dex !== data.index;
    });
    props.isRemoved
    emit("select", data)
}
function handleButtonClick(index) {
    activeIndex.value = index;
}
</script>

<style>
.active-button {
    background-color: #b91c1c;
}
</style>