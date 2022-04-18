<template>
    <a href="" @click.prevent="$emit('click')" class="m-1 inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-md leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">
        {{ title }}
    </a>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>