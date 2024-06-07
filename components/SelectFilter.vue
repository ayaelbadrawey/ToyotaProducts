<template>
    <div class="bg-gray-100 rounded-md w-full p-5 pb-10 border border-gray-200"
        v-if="props.filter.name != 'Power Type'">
        <span class="font-semibold text-lg">{{ props.filter.name }}</span>
        <div class="flex flex-row items-baseline mt-5 flex-wrap">
            <div class="flex flex-row items-baseline" v-for="(level, index) in props.filter.values" :key="level.id">
                <div class="flex flex-col text-center items-center">
                    <button class="bg-gray-200 rounded-full p-5 cursor-pointer w-1"
                        @click="selectClicked({ name: props.filter.name, item: level.fields.name })"></button>
                    <span v-if="index % 2 == 0">{{ level.fields.name }}</span>
                </div>
                <hr v-if="index != props.filter.values.length - 1" class="border-b-2 px-4">
                </hr>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['filter'])
const emit = defineEmits(["select"])

function selectClicked(data) {
    emit("select", data)
}

</script>

<style></style>