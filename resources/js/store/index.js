import { createStore } from 'vuex'
import Vuex from 'vuex'

import products from './modules/products'

const modules = { 
    products,
}

const store = new createStore({
    modules
})

export default store