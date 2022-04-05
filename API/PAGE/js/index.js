
// VALIDAÇÃO DE EMAIL E SENHA
// function de validação de caracteres de email retirada da internet
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateField() {
    toggleEmailErrors();
    toggleButtonErrors();
    togglePassword();

}

function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('email-error').style.display = "block";
    } else {
        document.getElementById('email-error').style.display = "none";
    }

    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block"
    }
}

function togglePassword() {
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-error').style.display = "block";
    } else {
        document.getElementById('password-error').style.display = "none"
    }
}

function toggleButtonErrors() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    document.getElementById('button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = document.getElementById('email').value;

    if (!email) {
        return false;
    }

    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true;
}


// AUTENTICAÇÃO SIMPLES

async function getLogin() {

    try {
        const users = await fetch('http://localhost:3000/all')
        const data = await users.json()

        showEmail(data)
        showPassword(data)
        const email = showEmail(data)
        const password = showPassword(data)
        console.log(email)
        console.log(password)


        const emailInput = document.getElementById('email').value
        console.log(emailInput)
        const passwordInput = document.getElementById('password').value
        console.log(passwordInput)
        if(emailInput == email && passwordInput == password) {

            window.location.href = 'cursos.html'
            
            console.log('deu bom')
        }else {
            window.location.href = "index.html"
            console.log('deu ruim')
            alert('Login inválido')
        }

    } catch (error) {
        console.error(error)
    }

}


function showEmail(users) {
    let email = ''

    for (let user of users) {
        email += `${user.email}`
    }
    return email
    

}

function showPassword(users) {
    let password = ''

    for (let user of users) {
        password += `${user.password}`
    }
    return password
}
