<script setup lang="ts">
const { socialLinks } = useLanding()
</script>
<template>
    <footer class="bg-blue-custom text-center text-white">
        <!-- Grid container -->
        <div class="container p-4">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- twitter -->
                <a class="btn btn-outline-light btn-floating m-1" :href="socialLinks.twitter" target="_blank"
                    role="button"><img src="../assets/icons/twitter.png" alt="imagen de twitter" /></a>

                <!-- Medium -->
                <a class="btn btn-outline-light btn-floating m-1" :href="socialLinks.medium" target="_blank"
                    role="button"><img src="../assets/icons/medium.png" alt="imagen de medium" /></a>

                <!-- Linkedin -->
                <a class="btn btn-outline-light btn-floating m-1" :href="socialLinks.linkedin" target="_blank"
                    role="button"><img src="../assets/icons/linkedin.png" alt="imagen de linkedin" /></a>

                <!-- Github -->
                <a class="btn btn-outline-light btn-floating m-1" :href="socialLinks.github" target="_blank"
                    role="button"><img src="../assets/icons/github.png" alt="imagen de github" /></a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3">
            © 2022 (Lorenzodev) Lorenzo Rojo | Desarrollador Web | Todos los derechos
            reservados
        </div>
        <!-- Copyright -->
    </footer>
</template>