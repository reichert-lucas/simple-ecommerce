import { createStore } from 'vuex'
import Vuex from 'vuex'

import products from './modules/products'
import categories from './modules/categories'

const modules = { 
    products,
    categories,
}

const store = new createStore({
    modules
})

export default store