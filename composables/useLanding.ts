export default function () {
    let mainText = ref(`Hola me llamo Lorenzo Rojo <br> Soy Desarrollador Full Stack`)
    let buttonText = ref('Descubre más.')
    let aboutMeContent = ref(aboutMe)
    const socialLinks = ref({
        linkedin: 'https://www.linkedin.com/in/lorenzorojo12/',
        twitter: 'https://twitter.com/lorenzodev20',
        github: 'https://github.com/lorenzodev20',
        medium: 'https://medium.com/@lorenzodev2020'
    })

    const emailSend = async ({ name, email, subject, message }) => {
        const result = emailValidate(email)
        if (!result.rps) {
            return result
        }
        if (!name || name.length === 0) {
            return {
                rps: false,
                message: 'El nombre no puede estar vació'
            };
        }
        if (!message || message.length === 0) {
            return {
                rps: false,
                message: 'El mensaje no puede estar vació'
            };
        }
        const data = await store.dispatch('sendEmail', { name, email, subject, message })
        data['rps'] = true
        return data
    }
    return {
        socialLinks,
        mainText,
        buttonText,
        aboutMeContent
    }
}
