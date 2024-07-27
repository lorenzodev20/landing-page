// import formData from 'form-data'

export default function () {
    const config = useRuntimeConfig();
    const { $mailgun } = useNuxtApp();
    const domain = config.mailgun.domain;

    const sendEmail = async () => {
        // try {

        //     const result = await $mailgun.messages.create(domain, {
        //         from:`My Website < ${domain}>`,
        //         to: 'lorenzodev2020@gmail.com',
        //         subject: 'Hello',
        //         text: 'Testing some Mailgun awesomeness!'
        //     });
        //     console.log(result);
        // } catch (error) {
        //     console.error('Error sending email:', error);
        // }
    };

    return {
        sendEmail
    }
}

