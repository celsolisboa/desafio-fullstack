const addCursoForm = document.querySelector('.box');
const url = "http://localhost:3000/cursos";


function formCurso() {
    let selectDisc = document.getElementById("dis");
    let itemDisc = selectDisc.value;
    console.log(itemDisc);

    var selectProf = document.getElementById("post-prof");
    var itemsProf = [];
    for (let i = 1; i < selectProf.options.length; i++) {
        if (selectProf.options[i].selected) {
            itemsProf.push(selectProf.options[i].text);
        }
    }
    objProf = { professores: itemsProf };
    console.log(objProf);

    var selectSala = document.getElementById("post-sala");
    var itensSala = [];
    for (let i = 1; i < selectSala.options.length; i++) {
        if (selectSala.options[i].selected) {
            itensSala.push(selectSala.options[i].text);
        }
    }
    objSala = { salas: itensSala };
    console.log(objSala);



    let selectHi = document.getElementById('horai').value;
    let itemHi = selectHi;
    console.log(itemHi)

    let selectHf = document.getElementById('horaf').value;
    let itemHf = selectHf;
    console.log(itemHf)

    function Curso(disciplina, professor, sala, hora_i, hora_f) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.sala = sala;
        this.hora_i = hora_i;
        this.hora_f = hora_f;
    }

    let curso = new Curso(
        itemDisc,
        itemsProf,
        itensSala,
        itemHi,
        itemHf
    )
    return curso;
}

// Buttons

addCursoForm.addEventListener('click', (e) => {
    e.preventDefault()
    let saveButtonIsPressed = e.target.id == 'button-save';
    let editButtonIsPressed = e.target.id == 'button-edit';
    let selectDisc = document.getElementById("dis");
    let itemDisc = selectDisc.value;

    if (editButtonIsPressed) {
        fetch(`${url}/${itemDisc}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formCurso()),
        })
            .then((response) => response.json())
            .then((curso) => {
                console.log('Update OK', curso)
                window.location.href = "cursos.html"
            })

    }
    if (saveButtonIsPressed) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formCurso()),
        })
            .then((response) => response.json())
            .then((curso) => {
                console.log('Save OK', curso)
                window.location.href = 'cursos.html'
            })
    }
})


// Validação de campos

function toggleButtonErrors() {
    const discValid = isDiscIsValid();
    const profValid = isProfIsValid();
    const salaValid = isSalaIsValid();
    const horaiValid = isHoraiIsValid();
    const horafValid = isHorafIsValid();
    document.getElementById('button-save').disabled = !discValid || !profValid || !salaValid || !horaiValid || !horafValid;
    document.getElementById('button-edit').disabled = !discValid || !profValid || !salaValid || !horaiValid || !horafValid;
}

function isDiscIsValid() {
    const selectDisc = document.getElementById("dis").value;

    if (!selectDisc) {
        return false;
    }
    return true;

}

function isProfIsValid() {
    var selectProf = document.getElementById("post-prof");
    var itemsProf = [];
    for (let i = 1; i < selectProf.options.length; i++) {
        if (selectProf.options[i].selected) {
            itemsProf.push(selectProf.options[i].text);
        }
    }

    if (itemsProf.length != 0) {
        return true;
    }
    return false;
}

function isSalaIsValid() {
    var selectSala = document.getElementById("post-sala");
    var itensSala = [];
    for (let i = 1; i < selectSala.options.length; i++) {
        if (selectSala.options[i].selected) {
            itensSala.push(selectSala.options[i].text);
        }
    }
    if (itensSala.length != 0) {
        return true;
    }
    return false;
}


function isHoraiIsValid() {
    let selectHi = document.getElementById('horai').value;

    if (!selectHi) {
        return false;
    }
    return true;

}

function isHorafIsValid() {
    let selectHf = document.getElementById('horaf').value;

    if (!selectHf) {
        return false;
    }
    return true;

}


