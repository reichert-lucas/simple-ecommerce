<script setup>
import NavBar from '@/Components/NavBar/NavBar.vue'
import Header from '@/Components/Header/Header.vue'
import Products from '@/Components/Products/Products.vue'
import GlobalLoader from '@/Components/GlobalLoader.vue'

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <global-loader />

        <NavBar />

        <Header />

        <Products :loadingProducts="loadingProducts" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('products', ['loadProducts']),
        ...mapActions('loader', ['setLoading']),

        callLoadProducts() {
            this.loadingProducts = true
            this.setLoading(true)

            this.loadProducts()
                .finally(() => {
                    this.loadingProducts = false
                    this.setLoading(false)
                })
        }
    },

    data() {
        return {
            loadingProducts: false
        }
    },

    created() {
        this.callLoadProducts()
    }
}
</script>
