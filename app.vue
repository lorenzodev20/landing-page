<script setup lang="ts">
// Import for Bootstrap 5
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// Import Custom Style
import '~/assets/css/app.css'
//Import Font
import '~/assets/fonts/roboto.css'

const title = 'Lorenzo Rojo'
useHead({
  titleTemplate: '%s %separator %siteName',
  templateParams: { separator: '|', siteName: title },
  meta: [
    { name: 'charset', content: 'UTF-8' },
    { name: 'keywords', content: 'desarrollador web freelance, diseño web personalizado, desarrollo de sitios web a medida, programador web independiente, desarrollo web profesional, diseño web adaptable, PHP developer, VueJS developer' },
    { name: 'autor', content: 'Lorenzo Rojo' }
  ],
})

useSeoMeta({
  description: 'Soy un desarrollador web freelancer especializado en desarrollo web personalizado. Ofrezco servicios de desarrollo web a medida para empresas y particulares.',
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>