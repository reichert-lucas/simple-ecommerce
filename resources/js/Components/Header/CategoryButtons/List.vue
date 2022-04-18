<script setup>
import Btn from './Button.vue'
import { Link } from '@inertiajs/inertia-vue3'
</script>

<template>
    <div class="flex justify-center align-middle p-2 mt-8 mb-8 m-full flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" v-if="!loadingCategories">
        <btn v-for="(category, index) in categories" 
                :key="index" 
                :title="category" 
                @click="callLoadProductsByCategory(category)" 
                :class="{ active: categoryName == category }"
        />
    </div>

    <div class="flex justify-center align-middle p-2 mt-8 mb-8 m-full flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white" v-else>
        Carregando categorias...
    </div>

    <div class="flex justify-center align-middle mb-8 m-full flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" v-if="!loadingCategories && categoryName">
        <Link :href="route('category', [categoryName])" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Acessar {{ categoryName }} >
        </Link>
    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            loadingCategories: false
        }
    },

    methods: {
        ...mapActions('categories', ['loadCategories']),
        ...mapActions('products', ['loadProductsByCategory']),
        ...mapActions('loader', ['setLoading']),

        loadAllCategories() {
            this.loadingCategories = true

            this.loadCategories()
                .finally(() => this.loadingCategories = false)
        },

        callLoadProductsByCategory(category) {
            this.setLoading(true)

            this.loadProductsByCategory(category)
                .finally(() => this.setLoading(false))
        },

        selectCategory(categoryId) {
            console.log(categoryId)
        }
    },

    computed: {
        ...mapState('categories', ['categories']),
        ...mapState('products', ['categoryName']),

    },

    created() {
        this.loadAllCategories()
    }
}
</script>