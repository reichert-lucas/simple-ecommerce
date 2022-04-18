import { createStore } from 'vuex'
import Vuex from 'vuex'

import products from './modules/products'
import categories from './modules/categories'
import loader from './modules/loader'

const modules = { 
    products,
    categories,
    loader,
}

const store = new createStore({
    modules
})

export default store