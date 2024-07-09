<script setup lang="ts">
definePageMeta({
  layout: 'primary'
})
const route = useRoute()
const { slug } = route.params
const { data } = await useFetch('/api/project', {
  params: { slug: slug }
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