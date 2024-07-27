<script setup lang="ts">
import swal from 'sweetalert';

//const { checkToken, emailSend } = useLanding()
const config = useRuntimeConfig();
const sendingEmail = ref(true)
const name = ref('Pepito Perez')
const email = ref('yosoypepito@email.com')
const subject = ref('Contact Form LorenzoDev')
const message = ref(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
const { client } = useMailgun();

const sendEmail = async (event: any) => {
    event.preventDefault();
    sendingEmail.value = false
    const mg = await client();
    const response = await mg.messages.create(config.mailgun.domain, {
        from: `${name.value} <${email.value}>`,
        to: 'solucionesinformaticas960@gmail.com',
        subject: `${subject.value}`,
        text: `${message.value}`,
    });
    console.log(response)

    console.log('Enviando')
    // setTimeout(() => {
    //     console.log('Enviado')
    //     sendingEmail.value = true
    //     return swal('Mensaje enviado', 'Gracias por contactarme, estaré respondiendo su mensaje a la mayor brevedad posible.', 'success')
    // }, 2000);
}

</script>
<template>
    <!--Begin Contact Form-->
    <section id="contact" class="about-me bg-white-custom py-5 px-5">
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
                    <form @submit.prevent="sendEmail">
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
                        <!-- <button v-if="sendingEmail" type="submit" class="btn btn btn-primary btn-lg btn-custom">
                            Envía tu mensaje
                        </button> -->
                        <button v-if="sendingEmail" type="submit" class="btn btn btn-primary btn-lg btn-custom">
                            Envía tu mensaje
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