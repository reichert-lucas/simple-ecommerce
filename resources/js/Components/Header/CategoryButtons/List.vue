<script setup>
import Btn from './Button.vue';
</script>

<template>
    <div class="flex justify-center align-middle p-2 mt-8 mb-8 m-full flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" v-if="!loadingCategories">
        <btn v-for="(category, index) in categories" :key="index" @click.prevent="selectCategory(index)" :title="category" />
    </div>

    <div class="flex justify-center align-middle p-2 mt-8 mb-8 m-full flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white" v-else>
        Carregando categorias...
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

        loadAllCategories() {
            this.loadingCategories = true

            this.loadCategories()
                .finally(() => this.loadingCategories = false)
        },

        selectCategory(categoryId) {
            console.log(categoryId)
        }
    },

    computed: {
        ...mapState('categories', ['categories']),
    },

    created() {
        this.loadAllCategories()
    }
}
</script>