<template>
    <div class="flex justify-center mx-2 my-4">
        <div class="rounded-lg shadow-lg bg-white max-w-sm flex flex-col justify-between">
            <a href="#!" class="product__image__container">
                <img class="rounded-t-lg" :src="product.image"/>
            </a>
            <div class="product__description__container">
                <div>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{{ product.title ? product.title : 'Sem título' }}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {{ product.description ? product.description : 'Sem descrição' }}
                    </p>
                </div>

                <div class="flex justify-end">
                    <button type="button" class="m-1 inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="uil uil-shopping-cart"/>
                    </button>

                    <button type="button" class="m-1 inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-sky-600 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="uil uil-usd-circle"/> Comprar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
            type: Object,
        }
    },
}
</script>

<style lang="scss" scoped>
.product__image__container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    img {
        height: 100%;
    }
}

.product__description__container {
    height: 100%;
    padding: 16px 8px 8px 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    p {
        max-height: 120px;
        overflow: auto;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>