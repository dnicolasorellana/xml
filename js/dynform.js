const removeBtnAsig = document.getElementById('btn-borrarAsignatura');
const removeBtnProf = document.getElementById('btn-borrarProfesor');
const removeBtnAlu = document.getElementById('btn-borrarAlumno');

const form = document.getElementById('formulario');
let idProfesor;
let idAlumno;
let idAsig;
document.addEventListener('DOMContentLoaded', () => {
    idProfesor=0;
    idAlumno=0;
    idAsig=0;
    removeBtnAsig.classList.add('disabled');
    removeBtnProf.classList.add('disabled');
    removeBtnAlu.classList.add('disabled');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
//     let masteres = MIXML.getElementsByTagName('masteres')[0];
//     console.log(masteres);
});

function addProfesor() {

    idProfesor++;
    let tags = ['nombre','apellidos','nacimiento'];
    const inputDyn = document.getElementById('input-profesor');
    let newInput = inputDyn.firstElementChild.cloneNode(true);
    let inputs = newInput.getElementsByTagName('input');
    console.log(inputs);
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].id = `profesor-${idProfesor}-${tags[index]}`;
        inputs[index].value = "";
    }

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
    idAsig++;
    let tags = ['id','nombre','desc','creditos','loc'];
    const inputDyn = document.getElementById('input-asignatura');
    let newInput = inputDyn.firstElementChild.cloneNode(true);

    let inputs = newInput.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].id = `asig-${idAsig}-${tags[index]}`;
        inputs[index].value = "";
    }
    
    inputDyn.appendChild(newInput);
    removeBtnAsig.classList.remove('disabled');
}

// Para duplicar el elemento asignatuara
// function addAsignatura2() {
//     const inputDyn = document.getElementById('nuevaAsignatura');
//     let newInput = inputDyn.firstElementChild.cloneNode(true);
//     newInput.lastElementChild.value = "";
//     inputDyn.appendChild(newInput);
//     //removeBtnAsig.classList.remove('disabled');
// }

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

    idAlumno++;
    let tags = ['nombre','apellidos','nacimiento'];
    const inputDyn = document.getElementById('input-alumnos');
    let newInput = inputDyn.firstElementChild.cloneNode(true);

    let inputs = newInput.getElementsByTagName('input');
    console.log(inputs);
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].id = `alumno-${idAlumno}-${tags[index]}`;
        inputs[index].value = "";
    }

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

function borrarDivsDinamicos(){
    // hay que borrar los divs #unProfe y #unAlumno excepto uno
    var a = document.querySelector("#unAlumno");

    // entramos en el primer elemento input hijo
    // a este elemento le borraremos los datos del input, a los siguientes los eliminaremos
    var ai = a.firstElementChild;
    ai.value = "";
    ai = ai.nextElementSibling; ai.value = "";
    ai = ai.nextElementSibling; ai.value = "";

    // vamos al segundo elemento #unAlumno
    a = a.nextElementSibling;
    salir = false;
    do {
        // tratamos el alumno si tiene datos
        if (a==null) {
            salir = true;
        } else {
            // vamos al siguiente alumno
            var b = a.nextElementSibling;
            a.parentNode.removeChild(a);    // borramos el nodo a
            a = b;
            if (a == null) salir = true;
        }
        
    } while (!salir);

    // lo mismo para profes
    var a = document.querySelector("#unProfe");

    // entramos en el primer elemento input hijo
    // a este elemento le borraremos los datos del input, a los siguientes los eliminaremos
    var ai = a.firstElementChild;
    ai.value = "";
    ai = ai.nextElementSibling; ai.value = "";
    ai = ai.nextElementSibling; ai.value = "";

    // vamos al segundo elemento #unAlumno
    a = a.nextElementSibling;
    salir = false;
    do {
        // tratamos el alumno si tiene datos
        if (a==null) {
            salir = true;
        } else {
            // vamos al siguiente alumno
            var b = a.nextElementSibling;
            a.parentNode.removeChild(a);    // borramos el nodo a
            a = b;
            if (a == null) salir = true;
        }
        
    } while (!salir);

}