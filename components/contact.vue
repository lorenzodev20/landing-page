<script setup lang="ts">
const { checkToken, emailSend } = useLanding()
const sendingEmail = ref(true)
const name = ref(null)
const email = ref(null)
const subject = ref(null)
const message = ref(null)

onMounted(() => {
    localStorage.clear()
    checkToken()
})
onUpdated(() => {
    checkToken()
})

const dataForEmail = computed(() => ({
    get: () => ({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }),
    set: (value) => {
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
    }
}))

const sendEmail = async () => {
    sendingEmail.value = false
    const { name, email, subject, message } = dataForEmail.value.get()
    let response = await emailSend({ name, email, subject, message })
    if (!response.rps) {
        sendingEmail.value = true
        return swal('Oops', response.message, 'warning')
    }
    dataForEmail.value.set()
    sendingEmail.value = true
    return swal('Mensaje enviado', 'Gracias por contactarme, estaré respondiendo su mensaje a la mayor brevedad posible.', 'success')
}
</script>
<template>
    <!--Begin Contact Form-->
    <section id="contact" class="about-me bg-white-custom py-5 px-5" @submit.prevent="sendEmail">
        <div class="row mt-5 w-100">
            <div v-if="!sendingEmail" class="spinner-custom">
                <div class="spinner-custom-item"><img src="../assets/spinners/spinner-1s-200px.svg" alt="loading"></div>
                <div class="spinner-custom-item">
                    <h3>Enviando Email...</h3>
                </div>
            </div>
            <div v-else class="col-lg-12">
                <p class="title-two text-center">Contácteme</p>
                <p class="paragraph-two text-center">
                    Sí tienes una idea de algún proyecto web te puedo asesorar y ayudar a
                    implementar la solución que tengas en mente.
                </p>
                <div class="container-contact">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="name" v-model="name" placeholder="Tu nombre" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" v-model="email"
                                placeholder="Tu email" />
                        </div>
                        <!--            <div class="mb-3">-->
                        <!--              <input-->
                        <!--                type="text"-->
                        <!--                class="form-control"-->
                        <!--                id="subject"-->
                        <!--                v-model="subject"-->
                        <!--                placeholder="Asunto"-->
                        <!--              />-->
                        <!--            </div>-->
                        <div class="mb-3">
                            <textarea name="message" class="form-control" id="message" cols="20" rows="10"
                                placeholder="Escribe tu mensaje" v-model="message"></textarea>
                        </div>
                        <button v-if="sendingEmail" type="submit" class="btn btn btn-primary btn-lg btn-custom">
                            Envia tu mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--End Contact Form-->
</template>

<style>
.swal-text {
    text-align: center;
}

.swal-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.spinner-custom {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.spinner-custom-item {
    display: flex;
    justify-content: center;
}
</style>