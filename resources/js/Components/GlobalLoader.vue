<script setup>
import Spin from '@/Components/Icons/Spin.vue'
</script>

<template>
    <div class="global__loader__container" v-if="loading">
        <spin class="animate-spin animate-spin"/>
        Carregando...
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('loader', ['loading'])
    }
}
</script>

<style lang="scss" scoped>
.global__loader__container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.900);
    flex-direction: column;
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
    z-index: 10000;

    svg {
        width: 10vw;
    }
}
</style>