<template>
    <div class="mx-10">
        <div class="flex justify-center flex-row">
            <span class="font-bold text-4xl pb-2 border-b border-red-700">RANGES</span>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-10 mt-10">
            <SelectFilter v-for="(filter, index) in filters.data['Select-Type']" :key="index" :filter="filter"
                @select="handleSelect">
            </SelectFilter>
            <SliderFilter v-for="(filter, index) in filters.data['Numeric-Type']" :key="index" :filter="filter"
                @slide="handleSlide">
            </SliderFilter>
        </div>
        <div class="flex flex-col xl:flex-row justify-center my-10 gap-4">
            <SearchItem v-if="SearchItems" v-for="(item, index) in SearchItems" :item="item" @remove="handleRemove">
            </SearchItem>
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
const SearchItems = ref([]);


function handleSlide(data) {
    SearchItems.value.push(data);
}

function handleSelect(data) {
    if (SearchItems.value.length < 1) {
        SearchItems.value.push(data)
    }
    const index = SearchItems.value.findIndex(obj => obj.name === data.name);
    if (index !== -1) {
        SearchItems.value[index].item = data.item;
    } else {
        SearchItems.value.push(data)
    }
    console.log('data: ' + JSON.stringify(SearchItems.value))
    filterProducts();
}
function filterProducts() {
    filteredProducts.value = products._rawValue.data.filter((product) => {
        if (checkProduct(product.selectTypes, SearchItems.value)) { return product }
    })
}
function checkProduct(productFeatures, filters) {
    var matched = false;
    if (filters.length > 0) {
        productFeatures.forEach((feature) => {
            if (SearchItems.value.findIndex(obj => obj.name === feature.name && obj.item === feature.values.name) != -1) {
                matched = true;
            } else {
                return false
            }
        })
        return matched ? true : false
    } else {
        return true
    }
}

function handleRemove(data) {
    SearchItems.value = SearchItems.value.filter(obj => {
        return obj.name !== data.name || obj.item !== data.item;
    });
    filterProducts();
}


</script>
<style></style>