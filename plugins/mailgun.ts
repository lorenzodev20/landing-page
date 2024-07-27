// import formData from 'form-data'

// export default defineNuxtPlugin({
//     name: 'mailgun',
//     async setup() {
//         const config = useRuntimeConfig();
//         const Mailgun = (await import('mailgun.js')).default;
//         const mailgun = new Mailgun(formData);
//         const mg = mailgun.client({
//             username: config.mailgun.username,
//             key: config.mailgun.apiKey || 'your-key'
//         });
//         return {
//             provide:{
//                 mg
//             }
//         }
//     }
// })

// export default defineNuxtPlugin(async (nuxtApp) => {
//     const config = useRuntimeConfig();
//     const { default: Mailgun } = await import('mailgun.js');
//     const mailgun = new Mailgun(formData);
//     const mg = mailgun.client({
//         username: config.mailgun.username,
//         key: config.mailgun.apiKey || 'your-key'
//     });

//     return {
//         provide: {
//             mg
//         }
//     }
// });
// Dynamic import because vite not fount dependecy as a import Mailgun from 'mailgun.js';
export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
})