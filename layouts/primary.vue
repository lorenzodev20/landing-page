<script setup>
const isMenuOpen = ref(false);
const showOption = ref(true);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style scoped>
nav {
    position: sticky;
    top: 0;
    left: 0;
}

nav.navbar.navbar-expand-lg.fixed-top.bg-blue-custom {
    border-bottom: 3px solid;
}
</style>
<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top bg-blue-custom">
            <div class="container-fluid">
                <NuxtLink to="/" class="navbar-brand" v-if="showOption">
                    <img src="../assets/logos/lorrenzorojo.png" alt="logotipo" width="150" height=""
                    class="d-inline-block align-text-top" />
                </NuxtLink>
                <NuxtLink to="/" class="navbar-brand" v-if="!showOption">
                    <img src="../assets/logos/lorrenzorojo.png" alt="logotipo" width="150" height=""
                        class="d-inline-block align-text-top" />
                </NuxtLink>
                <button class="navbar-toggler" type="button" @click="toggleMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div :class="['collapse', 'navbar-collapse', { 'show': isMenuOpen }]">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/" @click="toggleMenu" v-if="showOption">Inicio</NuxtLink>
                            <NuxtLink to="/" class="nav-link" v-if="!showOption">Inicio</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main class="flex-fill">
            <slot />
        </main>
        <Footer></Footer>
    </div>
</template>