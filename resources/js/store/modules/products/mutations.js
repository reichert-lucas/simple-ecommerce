const LOAD_PRODUCTS = (state, products) => {
    state.products = products
    state.productsWithoutFilters = products
}

const LOAD_PRODUCT = (state, product) => {
    state.product = product
}

const SET_CATEGORY = (state, categoryName) => {
    state.categoryName = categoryName
}

const SEARCH_PRODUCT = (state, filters) => {
    if (!filters['query']) {
        state.products = state.productsWithoutFilters
    }

    if (filters['query']) {
        let query = filters['query'].toLowerCase()

        state.products = state.productsWithoutFilters.filter(product => {
            return product.title.toLowerCase().indexOf(query) > -1 ||
                    product.description.toLowerCase().indexOf(query) > -1;
        })
    }
}

const REMOVE_FILTERS = (state) => {
    state.products = state.productsWithoutFilters
}

export {
    LOAD_PRODUCTS,
    SEARCH_PRODUCT,
    REMOVE_FILTERS,
    SET_CATEGORY,
    LOAD_PRODUCT
}