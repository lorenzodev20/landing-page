<script setup lang="ts">
definePageMeta({
   layout: 'default'
})
const gtm = useGtm()

function triggerEvent() {
  gtm.trackEvent({
    event: 'Home Site',
    category: 'landing',
    action: 'load page',
    label: 'Home Landing Page'
  })
}

onMounted(() => triggerEvent())
</script>
<template>
   <MainSlider></MainSlider>
   <AboutMe></AboutMe>
   <JobsCarousel></JobsCarousel>
   <!-- <Contact></Contact> -->
    <ContactWs></ContactWs>
</template>