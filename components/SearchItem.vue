<template>
    <div class="rounded-md p-5 border border-red-700 w-fit items-center">
        <div class="flex flex-row justify-between items-center">
            <span class="seft-center text-red-700 font-semibold">{{ props.item.name }}: {{ props.item.item }}</span>
            <Icon name="eva:close-fill" class="cursor-pointer mx-2 font-normal" color="#b91c1c"
                @click="removeItem(props.item)"></Icon>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item'])
const value = ref(0);
const emit = defineEmits(["remove"])

function removeItem(data) {
    emit("remove", data)
}

</script>
<style></style>