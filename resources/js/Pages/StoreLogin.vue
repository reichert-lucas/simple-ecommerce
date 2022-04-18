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

        <Header :withCategoriesFilter="false" :withSearchInput="false" :title="isLogin ? 'Login' : 'Cadastro'" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-8" v-if="isLogin">
            <div class="flex justify-center mx-2 my-4">
                <form class="w-1/2">
                    <div class="flex justify-center m-4">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" v-model="loginForm.username" type="text" placeholder="usuário">
                    </div>
                    <div class="flex justify-center m-4">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" v-model="loginForm.password" type="password" placeholder="senha">
                    </div>
                    
                    <div class="flex justify-end m-4">
                        <button class="font-bold py-2 px-8 rounded" @click.prevent="changeIsLogin">
                            Não tenho cadastro
                        </button>
                        
                        <button class="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="submit" :disabled="!canLogin">
                            Entrar
                        </button>
                    </div>
                    </form>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-8" v-else>
            <div class="flex justify-center mx-2 my-4">
                <form class="w-1/2">
                    <div class="flex justify-center m-4">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" v-model="registerForm.email" type="text" placeholder="e-mail">
                    </div>

                    <div class="flex justify-center m-4">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"  v-model="registerForm.username" type="text" placeholder="usuário">
                    </div>

                    <div class="flex justify-center m-4">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" v-model="registerForm.password" type="password" placeholder="senha">
                    </div>
                    
                    <div class="flex justify-end flex-wrap m-4">
                        <button class="font-bold py-2 px-8 rounded" @click.prevent="changeIsLogin">
                            Já tenho uma conta
                        </button>
                        
                        <button class="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded" type="submit" :disabled="!canRegister">
                            Criar conta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            isLogin: true,
            loginForm: {
                username: null,
                password: null,
            },
            registerForm: {
                email: null,
                username: null,
                password: null,
            },
        }
    },

    computed: {
        canLogin() {
            return this.loginForm.username && this.loginForm.password
        },

        canRegister() {
            return this.registerForm.username && this.registerForm.password && this.registerForm.email
        }
    },

    methods: {
        changeIsLogin() {
            this.isLogin = !this.isLogin
        },

        callLogin() {
            console.log(this.loginForm)
        },

        callRegister() {
            console.log(this.registerForm)
        }
    }
}
</script>