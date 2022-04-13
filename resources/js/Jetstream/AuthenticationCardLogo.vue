<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import Logo from './ApplicationLogo';
</script>

<template>
    <Link :href="'/'">
        <Logo />
    </Link>
</template>

<style scoped>
    svg {
        width: 120px;
    }
</style>