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

    return {
        socialLinks,
        mainText,
        buttonText,
        aboutMeContent
    }
}
