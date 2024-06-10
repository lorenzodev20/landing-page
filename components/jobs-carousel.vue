<script setup lang="ts">
const projects = ref([])
</script>
<template>
    <section id="my-jobs" class="jobs bg-blue-custom py-5 px-5">
        <div class="row mt-5 w-100">
            <div>
                <p class="title text-center text-break px-5">Portafolio</p>
                <p v-if="projects.length > 0" class="paragraph text-center text-break px-5">
                    Muestro algunos de mis trabajos realizados.
                </p>
                <p v-else class="paragraph text-center text-break px-5">
                    Mostraré mis proyectos lo más pronto posible ...
                </p>
            </div>
            <div class="carrousel-jobs">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="col-md-4 p-3" style="float: left" v-for="project in projects" :key="project.id">
                                <div class="card mb-3">
                                    <img :src="project.img" class="card-img-top custom-image" :alt="project.title" />
                                    <div class="card-body">
                                        <h5 class="card-title" @click="redirectProjectDetail(project.slug, project.id)">
                                            <a>{{ project.title }}</a>
                                        </h5>
                                        <p class="card-text">
                                            {{ project.extract }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> -->
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
h5.card-title:hover {
    font-weight: bold;
    cursor: pointer;
}

.custom-image {
    width: 100%;
    height: 200px;
}
</style>