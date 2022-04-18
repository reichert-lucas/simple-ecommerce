import routes from "@/domain/fakeStoreApi.json"
import { api } from '@/configs/fakeStoreApi'

const loadProducts = async ({ commit }) => { 
    let url = `${routes.products.url}`

    return api.get(url)
                .then(res => {
                    commit('LOAD_PRODUCTS', res.data)
                })
                .catch(() => console.log('erro ao buscar produtos'))    
}

const loadProductsByCategory = async ({ commit }, categoryName) => { 
    let url = `${routes.productsByCategory.url}${categoryName}`

    commit('SET_CATEGORY', categoryName)

    return api.get(url)
                .then(res => {
                    commit('LOAD_PRODUCTS', res.data)
                })
                .catch(() => console.log('erro ao buscar produtos por categoria'))    
}

const searchProduct = async ({ commit }, filters) => { 
    commit('SEARCH_PRODUCT', filters)
}

export {
    loadProducts,
    searchProduct,
    loadProductsByCategory
}