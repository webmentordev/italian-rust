<template>
    <div>
        <h1>Discord Redirect...</h1>
        <NuxtLink to="https://discord.gg/QX88qBeU">https://discord.gg/QX88qBeU</NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ['discord']
    })
</script>