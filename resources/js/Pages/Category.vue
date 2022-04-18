<script setup>
import NavBar from '@/Components/NavBar/NavBar.vue'
import Header from '@/Components/Header/Header.vue'
import Products from '@/Components/Products/Products.vue'
import GlobalLoader from '@/Components/GlobalLoader.vue'

defineProps({
    categoryName: String,
});

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <global-loader />

        <NavBar />

        <Header :withCategoriesFilter="false" :categoryName="categoryName" />

        <Products :loadingProducts="loadingProducts" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('products', ['loadProductsByCategory']),
        ...mapActions('loader', ['setLoading']),

        callLoadProductsByCategory() {
            this.loadingProducts = true
            this.setLoading(true)

            this.loadProductsByCategory(this.categoryName)
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
        this.callLoadProductsByCategory()
    }
}
</script>
