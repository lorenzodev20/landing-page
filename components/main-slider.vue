<script setup lang="ts">
const { mainText, buttonText } = useLanding()
</script>
<template>
    <!--Begin Slides Home-->
    <section class="section-container bg-blue-custom" id="container-slider">
        <div class="home-section-one">
            <h1 class="white-text text-center" v-html="mainText"></h1>
            <hr class="my-4" />
            <div class="container-button">
                <a href="#about-me" class="btn btn-lg btn-withe-custom">{{ buttonText }}
                </a>
            </div>
        </div>
        <div class="home-section-two">
            <img src="../assets/img/undraw_programming.svg" class="img-fluid" alt="Developer" />
        </div>
    </section>
    <!--End Slides Home-->
</template>
<style scoped>
/* div img {
  width: 100%;
  filter: blur(2px);
} */
.section-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}

.home-section-one {
    width: 40%;
    text-align: center;
}

.home-section-two {
    width: 60%;
    text-align: center;
}

.white-text {
    color: var(--text-menu);
}

.container-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 640px) {
    h1 {
        margin-top: 10%;
        font-size: 22px;
    }

    .section-container {
        flex-direction: column-reverse;
    }

    a.btn.btn-lg.bg-white-custom {
        font-size: 20px;
    }

    .container-button {
        margin-bottom: 5%;
    }

    a.btn.btn-lg.btn-withe-custom {
        font-size: large;
    }
}
</style>