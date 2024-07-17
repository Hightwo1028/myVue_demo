<script setup>
    const props = defineProps({
        user: Number,
        url: {
            type: String,
            required: false,
            default: 'hightwo.com'  //默認值
        }
    })
    console.log(props);
</script>

<template>
    <h3>footer</h3> {{ props.user }}
</template>

<style scoped>

</style>