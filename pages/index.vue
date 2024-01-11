<template>
    <section class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('/background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 px-4">
            <img src="/transparent-animated.gif" class="m-auto mb-6 max-w-[350px] 480px:max-w-[150px]" alt="Italian Rust Logo">
            <h1 class="text-6xl text-white/90 mb-3 480px:text-4xl text-center">Benvenuti in Italian Rust</h1>
            <ul class="m-auto flex items-center justify-center">
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-[#C83741] link text-white text-xl inline-block" to="steam://connect/141.95.116.215:26968" target="_blank"><Icon name="bi:steam" class="text-2xl mr-1" /> Connect</NuxtLink>
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-[#248B46] link text-white text-xl inline-block" to="https://discord.gg/QX88qBeU" target="_blank"><Icon name="fa6-brands:discord" class="text-2xl mr-1" /> Discord</NuxtLink>
            </ul>
        </div>
    </section>
</template>