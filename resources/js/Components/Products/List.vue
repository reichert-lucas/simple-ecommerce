

<template>
    <div class="product__list" v-if="products.length">
        <Product v-for="product in products" :product="product" :key="product.id"/>
    </div>

    <div class="products__list alert" v-else>
        Não foi encontrado nenhum produto
    </div>
</template>

<script setup>
import Product from '@/Components/Products/Product.vue';
</script>

<script>
export default {
    data() {
        return {
            products: []
        }
    },

    methods: {
        loadAllProducts() {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    this.products = json
                })
        }
    },

    created() {
        this.loadAllProducts()
    }
}
</script>

<style lang="scss" scoped>
.product__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 32px 0px;
}
</style>