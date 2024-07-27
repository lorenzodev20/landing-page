import formData from 'form-data'
import Mailgun from 'mailgun.js'; // Importación estática

export default function () {
    const config = useRuntimeConfig();

    const client = async () => {
        // const { default: Mailgun } = await import('mailgun.js');
        const mailgun = new Mailgun(formData);
        return mailgun.client({
            username: config.mailgun.username,
            key: config.mailgun.apiKey || 'your-key'
        });
    };

    return {
        client
    };
}