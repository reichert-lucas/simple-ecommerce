import routes from "@/domain/fakeStoreApi.json"
import { api } from '@/configs/fakeStoreApi'

const loadCategories = async ({ commit }) => { 
    let url = `${routes.categories.url}`

    return api.get(url)
                .then(res => {
                    console.log(res.data)
                    commit('LOAD_CATEGORIES', res.data)
                })
                .catch(() => console.log('erro ao buscar categorias'))    
}

export {
    loadCategories,
}