<template>
    <div class="mx-10">
        <div class="flex justify-center flex-row">
            <span class="font-bold text-4xl pb-2 border-b border-red-700">RANGES</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
            <SelectFilter v-for="(filter, index) in filters.data['Select-Type']" :key="index" :filter="filter"
                @select="handleSelect">
            </SelectFilter>
            <SliderFilter v-for="(filter, index) in filters.data['Numeric-Type']" :key="index" :filter="filter">
            </SliderFilter>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 my-10 gap-10">
            <ProductCard v-for="(product, index) in filteredProducts" :key="index" :product="product">
            </ProductCard>
        </div>
    </div>
</template>
<script setup>

const { data: filters } = await useFetch('https://api-forklift.code95.info/v1/products/filters');
const { data: products } = await useFetch('https://api-forklift.code95.info/v1/products/getJson');

const filteredProducts = ref(products._rawValue.data);
function handleSelect(data) {
    filteredProducts.value = products._rawValue.data.filter((product) => {
        if (checkProduct(product.selectTypes, data)) { return product }
    })
}
function checkProduct(productFeatures, filters) {
    var matched = false
    productFeatures.forEach((feature) => {
        if (feature.name == filters.name && feature.values.name == filters.item) {
            matched = true;
        }
    })
    return matched ? true : false
}


</script>
<style></style>