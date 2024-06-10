const emailValidate = (email:string) => {
    // Expresión regular para validar el formato del email
    var regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Validar el formato del email
    if (!regex.test(email)) {
        return {
            rps: false,
            message: 'El formato de email es inválido'
        };
    }

    // Separar el nombre de usuario y el dominio del email
    let partes = email.split("@");
    let usuario = partes[0];
    let dominio = partes[1];

    // Validar que el usuario y el dominio no estén vacíos
    if (usuario.length === 0 || dominio.length === 0) {
        return {
            rps: false,
            message: 'El email esta vació'
        };
    }

    // Validar que el usuario y el dominio no contengan caracteres especiales
    let caracteresEspeciales = /[!#$%&'*+/=?^_`{|}~]/;

    if (caracteresEspeciales.test(usuario) || caracteresEspeciales.test(dominio)) {
        return {
            rps: false,
            message: 'El formato de email es inválido'
        };
    }

    return {
        rps: true,
        message: 'El email es válido'
    };
}

export default emailValidate