<script setup>
import Spin from '@/Components/Icons/Spin.vue'
import List from '@/Components/Products/List.vue'
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <List :products="products" v-if="!loadingProducts"/>

        <div class="not__found__container w-full py-6 my-6" v-else>
            <Spin class="animate-spin animate-spin"/>
            <h4 class="text-center">Carregando seus produtos...</h4>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        loadingProducts: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        ...mapState('products', ['products']),
    },
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