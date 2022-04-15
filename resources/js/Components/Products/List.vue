<script setup>
import Product from '@/Components/Products/Product.vue'
import TraficBarrier from '@/Components/Icons/TraficBarrier.vue'
</script>

<template>
    <div class="product__list" v-if="products.length">
        <Product v-for="product in products" :product="product" :key="product.id"/>
    </div>

    <div class="not__found__container w-full py-6 my-6" v-else>
        <TraficBarrier />
        <h4 class="text-center">Não foi encontrado nenhum produto</h4>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            required: true,
            type: Array,
            default: []
        }
    },
}
</script>

<style lang="scss" scoped>
@mixin flexCenter() {
    display: flex;
    justify-content: center;
    align-items: center;
}

.product__list {
    @include flexCenter();
    flex-wrap: wrap;
    align-items: stretch;
    margin: 32px 0px;
}

.not__found__container {
    @include flexCenter();
    flex-direction: column;
    color: var(--primary);
    padding: 32px;

    h4 {
        font-size: 24px;
        font-weight: 600;
    }

    svg {
        width: 200px;
    }
}
</style>