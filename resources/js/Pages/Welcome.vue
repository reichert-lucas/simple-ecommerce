<script setup>
import NavBar from '@/Components/NavBar/NavBar.vue'
import Header from '@/Components/Header/Header.vue'
import Spin from '@/Components/Icons/Spin.vue'
import ProductList from '@/Components/Products/List.vue'

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <NavBar />

        <Header />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductList :products="products" v-if="!loadingProducts"/>

            <div class="not__found__container w-full py-6 my-6" v-else>
                <Spin class="animate-spin animate-spin"/>
                <h4 class="text-center">Carregando seus produtos...</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            loadingProducts: false
        }
    },

    methods: {
        loadAllProducts() {
            this.loadingProducts = true

            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    this.products = json
                })
                .finally(() => this.loadingProducts = false)
        }
    },

    created() {
        this.loadAllProducts()
    }
}
</script>

<style lang="scss" scoped>
@mixin flexCenter() {
    display: flex;
    justify-content: center;
    align-items: center;
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
        width: 120px;
    }
}
</style>