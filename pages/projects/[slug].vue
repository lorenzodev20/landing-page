<script setup lang="ts">
definePageMeta({
  layout: 'primary'
})
const route = useRoute()
const { slug } = route.params
const { data } = await useFetch('/api/project', {
  params: { slug: slug }
})

const gtm = useGtm()

function triggerEvent(title: string) {
  gtm.trackEvent({
    event: 'View Project',
    category: 'portfolio',
    action: 'load-page',
    label: 'Detail project',
    value: title
  })
}

onMounted(() => {
  if (data?.value?.project?.title) {
    triggerEvent(data.value.project.title)
  } else {
    console.error('No se encontró el título del proyecto')
  }
})

</script>
<template>
  <section>
    <div class="container justify-content-center mt-5">
      <h1 class="text-black-100 text-center">{{ data?.project.title }}</h1>
      <hr>
      <p class="detail-extract">{{ data?.project.extract }}</p>
      <p v-html="data?.project.description"></p>
      <gallery-project :gallery="data?.project.images" />
      <div class="mx-auto">
        <NuxtLink to="/" class="btn btn-blue-custom mb-5 mt-5"> Volver </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped>
nav {
  position: sticky;
  top: 0;
  left: 0;
}

section {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-height: 71vh;
  /** Min heigh for display */
}

.detail-extract {
  font-style: italic;
  text-align: center;
}
</style>