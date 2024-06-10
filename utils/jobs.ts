import transferenciaImg from '~/assets/img/projects/transferencias.co/01_home_admin.jpg'
import opticaImg from '~/assets/img/projects/consulta-pedidos/optica.png'
import landingImg from '~/assets/img/projects/lorenzorojo/landing-mini.jpg'

const jobs = [
    {
        id: 1,
        img: transferenciaImg,
        title: "App web para el control de cambios de divisas (transferencias.co)",
        slug: "app-web-para-el-control-de-cambios-de-divisas-transferencias-co",
        extract: "Utilizado para gestionar las solicitudes de envió de dinero entre una moneda y otra.",
        description: "Utilizado para gestionar las solicitudes de envió de dinero entre una moneda y otra.",
        images: ["https://picsum.photos/id/1/200/300", "https://picsum.photos/id/1/200/300", "https://picsum.photos/id/1/200/300"]
    },
    {
        id: 2,
        img: opticaImg,
        title: "Portal de consulta de estado de pedidos",
        extract: "Es un sistema en el que se registran todos los pedidos realizados a la óptica y luego el cliente puede acceder a través de una url y consultar el estado del trabajo.",
        slug: "portal-de-consulta-de-estado-de-pedidos",
    },
    {
        id: 3,
        img: landingImg,
        title: "Landing page desarrollador fullstack",
        extract: "Sitio web de presentación de desarrollador web con formulario de contacto. Realizada con Vue3, nodeJS y PostgreSQL.",
        slug: "landing-page-desarrollador-fullstack",
    }
]

export default jobs