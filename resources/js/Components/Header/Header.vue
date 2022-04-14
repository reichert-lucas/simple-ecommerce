<script setup>
import Search from '@/Components/Header/Search.vue';
import ApplicationLogo from '@/Jetstream/ApplicationLogo.vue';
</script>

<template>
<header>
        <div class="container__logo">
            <ApplicationLogo />
        </div>

        <h1 class="text-4xl font-bold mt-0 mb-6 text-primary">Simple Store</h1>
        <p class="text-2xl font-bold mb-8">A melhor plataforma para comprar online</p>

        <Search />
</header>
</template>

<style lang="scss" scoped>
    header {
        background-position: 50%;
        background: #0075AD;
        height: 420px;
        padding: 64px 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            color: white;
        }

        .container__logo {
            width: 136px;
            margin-bottom: 16px;
        }
    }
</style>