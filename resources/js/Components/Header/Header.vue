<script setup>
import Search from '@/Components/Header/Search.vue';
import CategoryButtons from '@/Components/Header/CategoryButtons/List.vue';
import ApplicationLogo from '@/Jetstream/ApplicationLogo.vue';
</script>

<template>
<header>
    
        <div class="container__logo">
            <ApplicationLogo />
        </div>

        <h1 class="text-4xl font-bold mt-0 mb-6 text-primary">Simple Store</h1>
        <p class="text-2xl font-bold mb-8">A melhor plataforma para comprar online</p>

        <Search v-if="withSearchInput" />

        <CategoryButtons v-if="withCategoriesFilter"/>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="container__category__title" v-if="title">
                <h2>{{ title }}</h2>
            </div>

            <div class="container__category__title" v-else-if="!withCategoriesFilter && categoryName">
                <h2>{{ categoryName }}</h2>
            </div>
        </div>
</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        withCategoriesFilter: {
            type: Boolean,
            required: false,
            default: true
        },
        withSearchInput: {
            type: Boolean,
            required: false,
            default: true
        },
        title: {
            type: String,
            required: false,
            default: false
        }
    },

    computed: {
        ...mapState('products', ['categoryName']),

    }

}
</script>

<style lang="scss" scoped>
    header {
        background-position: 50%;
        background: #0075AD;
        min-height: 420px;
        padding: 64px 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            color: white;
        }

        .container__logo {
            width: 136px;
            margin-bottom: 16px;
        }

        .container__category__title {
            margin-top: 32px;

            h2 {
                font-size: 22px;
                font-weight: 700;
                color: var(--primary);
                text-transform: uppercase;
                background: rgba(255, 255, 255, 0.692);
                padding: 8px 32px;
                border-radius: 6px;
                max-width: 400px;
                text-align: center;

                @media (max-width: 400px) {
                    width: 80%;
                }
            }
        }
    }
</style>