<script setup>
import NavBar from '@/Components/NavBar/NavBar.vue'
import Header from '@/Components/Header/Header.vue'
import GlobalLoader from '@/Components/GlobalLoader.vue'

defineProps({
    productId: Number,
});

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <global-loader />

        <NavBar />

        <Header :withCategoriesFilter="false" :withSearchInput="false" :title="product.title" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-8">
            <div class="flex justify-center mx-2 my-4">
                <div class="rounded-lg shadow-lg bg-white">
                    <div class="container__product">
                        <a href="#!" class="container__product__image__container">
                            <img class="rounded-t-lg" :src="product.image"/>
                        </a>
                        <div class="container__product__description__container">
                            <div>
                                <p class="text-gray-700 text-base mb-4">
                                    {{ product.description ? product.description : 'Sem descrição' }}
                                </p>
                            </div>

                            <div class="container__product__description__container__action__btns">
                                <div class="text-green-600 text-xl font-bold">
                                    R$ {{ product.price }}
                                </div>

                                <div class="flex m-4">
                                    <div class="shopping__cart__amount__qtd">
                                        <a href="" class="uil uil-minus"></a>
                                        <input type="number" min="1">
                                        <a href="" class="uil uil-plus"></a>
                                    </div>

                                    <button type="button" class=" inline-block px-6 py-2.5 bg-yellow-500 text-white font-lg text-sm leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
                                        <i class="uil uil-shopping-cart"/>
                                    </button>
                                </div>

                                <div>    
                                    <button type="button" class="m-1 inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-600 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                                        <i class="uil uil-usd-circle"/> Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    methods: {
        ...mapActions('products', ['loadProduct']),
        ...mapActions('loader', ['setLoading']),

        callLoadProduct() {
            this.setLoading(true)

            this.loadProduct(this.productId)
                .finally(() => this.setLoading(false))
        }
    },

    computed: {
        ...mapState('products', ['product']),

    },

    created() {
        this.callLoadProduct()
    }
}
</script>


<style lang="scss" scoped>
    .container__product {
        padding: 32px 32px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        img {
            max-width: 200px;
        }

        &__image__container {
            padding: 0px 24px;
        }

        &__description__container {
            width: 400px;

            @media (max-width: 600px) {
                width: 100%;
            }

            &__action__btns {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
        }

        .shopping__cart__amount__qtd{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 8px;

            a {
                display: inline-block;
                width: 24px;
                height: 24px;
                background: #eab308;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                color: white;
                font-weight: 800;
            }

            input {
                width: 48px;
                height: 24px;
                border: 1px solid gray;
                border-radius: 6px;
                margin: 4px;
                outline: 0;
                text-align: center;
                color: gray;
                background: whitesmoke;

                &:hover, &:focus {
                    color: var(--primary);
                    border-color: var(--primary);
                }

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                &[type=number] {
                    -moz-appearance:textfield;
                }
            }

            &__value {
                font-weight: 700;
                font-size: 16px;
                color: var(--primary);
            }
        }

    }
</style>