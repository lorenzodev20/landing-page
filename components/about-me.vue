<script setup lang="ts">
const { aboutMeContent } = useLanding()
const content = aboutMeContent
</script>
<template>
    <!--Begin About me White -->
    <section id="about-me" class="about-me bg-white-custom mt-7 py-5 px-5">
        <div class="row mt-5 w-100">
            <div class="description col-lg-6 py-2">
                <p class="title-two text-start text-break px-2">{{ content.title }}</p>
                <p class="paragraph-two text-start text-break px-2">
                    {{ content.textOne }}
                </p>
                <p class="paragraph-two text-start text-break px-2">
                    {{ content.textTwo }}
                </p>
                <p class="paragraph-two text-start text-break px-2">
                    {{ content.textThree }}
                </p>
            </div>
            <div class="col-lg-6">
                <img src:="~/assets/{{content.img}}" class="rounded mx-auto d-block aboutme-img" alt="Sobre mí" />
            </div>
        </div>
    </section>
    <!--End About me White -->
</template>