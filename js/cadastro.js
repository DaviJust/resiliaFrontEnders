// BUSCA DE CEP
const cep = document.querySelector("#cep")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}




cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('Deu Erro: ' + e, message))
})

// BUSCA DE CEP

// VALIDAÇÃO DE DADOS
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});

function setError(index) {
    spans[index].style.color = 'OrangeRed';
    spans[index].style.display = 'block';
}

function removeError(index) {
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}


function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        comparePassword();
    }
}

function comparePassword() {
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    }
    else {
        setError(3);
    }
}

function rgValidate() {
    if (campos[4].value.length < 9) {
        setError(4);
    }
    else {
        removeError(4);
    }
}

// VALIDAÇÃO DE DADOS

function finalizar() {
    if (campos[0].value == "" || campos[1].value == "" || campos[2].value == "" || campos[3].value == "") {
        swal("Preencha os campos obrigatórios", "Por favor, verifique", "error");
        event.preventDefault();
    } else {
        swal("Cadastro criado com sucesso", "Bons estudos", "success");
    }
}
