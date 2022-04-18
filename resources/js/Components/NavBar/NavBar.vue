<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/inertia-vue3'
import JetApplicationMark from '@/Jetstream/ApplicationMark.vue'
import JetBanner from '@/Jetstream/Banner.vue'
import JetDropdown from '@/Jetstream/Dropdown.vue'
import JetDropdownLink from '@/Jetstream/DropdownLink.vue'
import JetNavLink from '@/Jetstream/NavLink.vue'
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue'
import NavShoppingCart from '@/Components/NavShoppingCart.vue'
import ProductList from '@/Components/Products/List.vue'
import Header from '@/Components/Header/Header.vue'
import Spin from '@/Components/Icons/Spin.vue'
import NavBtn from './NavBtn.vue'

const showingNavigationDropdown = ref(false);

</script>

<template>
    <nav class="bg-white border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('welcome')">
                            <JetApplicationMark class="block h-9 w-auto" />
                        </Link>
                    </div>

                    <div class="nav__desk__menu">
                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <JetNavLink :href="route('welcome')" :active="route().current('welcome')">
                                Produtos
                            </JetNavLink>
                        </div>
                    </div>
                </div>

                <div class="search-container">

                </div>

                <NavShoppingCart />

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition" @click="showingNavigationDropdown = !showingNavigationDropdown">
                        <svg
                            class="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                :class="{'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown}" class="sm:hidden">
            <JetResponsiveNavLink :href="route('welcome')" :active="route().current('welcome')">
                Produtos
            </JetResponsiveNavLink>
            
            <div>
                <nav-btn @click.prevent="openCloseCategoriesMenu">
                    Categorias
                </nav-btn>
                <div class="p-2" v-if="isOpenedCategoriesMenu">
                    <JetResponsiveNavLink>
                        Categoria 1
                    </JetResponsiveNavLink>
    
                    <JetResponsiveNavLink>
                        Categoria 2
                    </JetResponsiveNavLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpenedCategoriesMenu: false
        }
    },

    methods: {
        openCloseCategoriesMenu() {
            this.isOpenedCategoriesMenu = !this.isOpenedCategoriesMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.nav__desk__menu {
    display: flex;
    justify-content: center;
    max-width: 500px;
    overflow-x: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>