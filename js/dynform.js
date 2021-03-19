const removeBtnAsig = document.getElementById('btn-borrarAsignatura');
const removeBtnProf = document.getElementById('btn-borrarProfesor');
const removeBtnAlu = document.getElementById('btn-borrarAlumno');

document.addEventListener('DOMContentLoaded', () => {
    removeBtnAsig.classList.add('disabled');
    removeBtnProf.classList.add('disabled');
    removeBtnAlu.classList.add('disabled');
});

function addProfesor() {
    const inputDyn = document.getElementById('input-profesor');
    let newInput = inputDyn.firstElementChild.cloneNode(true);
    newInput.lastElementChild.value = "";
    newInput.lastElementChild.id = "nuevo";
    inputDyn.appendChild(newInput);
    removeBtnProf.classList.remove('disabled');
}

function removeProfesor() {
    const inputDyn = document.getElementById('input-profesor');
    inputDyn.removeChild(inputDyn.lastElementChild);
    if (inputDyn.hasChildNodes() && inputDyn.childElementCount === 1) {
        removeBtnProf.classList.add('disabled');
    } else {
        removeBtnProf.classList.remove('disabled');
    }
}

// Para duplicar el elemento asignatuara
function addAsignatura() {
    const inputDyn = document.getElementById('input-asignatura');
    let newInput = inputDyn.firstElementChild.cloneNode(true);
    newInput.lastElementChild.value = "";
    inputDyn.appendChild(newInput);
    removeBtnAsig.classList.remove('disabled');
}

function removeAsignatura() {
    const inputDyn = document.getElementById('input-asignatura');
    inputDyn.removeChild(inputDyn.lastElementChild);
    if (inputDyn.hasChildNodes() && inputDyn.childElementCount === 1) {
        removeBtnAsig.classList.add('disabled');
    } else {
        removeBtnAsig.classList.remove('disabled');
    }
}

// Para duplicar el elemento alumno
function addAlumno() {
    const inputDyn = document.getElementById('input-alumnos');
    let newInput = inputDyn.firstElementChild.cloneNode(true);
    newInput.lastElementChild.value = "";
    inputDyn.appendChild(newInput);
    removeBtnAlu.classList.remove('disabled');
}

function removeAlumno() {
    const inputDyn = document.getElementById('input-alumnos');
    inputDyn.removeChild(inputDyn.lastElementChild);
    if (inputDyn.hasChildNodes() && inputDyn.childElementCount === 1) {
        removeBtnAlu.classList.add('disabled');
    } else {
        removeBtnAlu.classList.remove('disabled');
    }
}