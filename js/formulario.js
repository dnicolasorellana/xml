
// creamos un xml con la raiz master
var ini = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet href="mostrar.xsl" type="text/xsl" ?>
    <masteres xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="./masteres.xsd">
    <master id="0000" anio="2020-21" nombre="add">
    </master>
</masteres>`;

var MIXML;

window.onload = function() {
    // creamos un XML con la estructura / o el ele master solo ???
    MIXML = jQuery.parseXML(ini);
    console.log(MIXML.getRootNode());
}

/////////////////////////////////////////////////////////////////////////////////
// FUNCIONES PARA AÑADIR UNA ASIGNATURA AL MÁSTER

function comprobarAsignaturaRellena() {
    // comprobamos que los campos estén rellenos
    // console.log($('#asig-0-id').val());
    (($('#asig-0-id').val().length == 0)) ? $('#asig-0-id').css('border-color','red') : $('#asig-0-id').css('border-color','#ced4da');
    (($('#asig-0-nombre').val().length == 0)) ? $('#asig-0-nombre').css('border-color','red') : $('#asig-0-nombre').css('border-color','#ced4da');
    (($('#asig-0-desc').val().length == 0)) ? $('#asig-0-desc').css('border-color','red') : $('#asig-0-desc').css('border-color','#ced4da');
    (($('#asig-0-creditos').val().length == 0)) ? $('#asig-0-creditos').css('border-color','red') : $('#asig-0-creditos').css('border-color','#ced4da');

    // Al menos un profesor
    (($('#profesor-0-nombre').val().length == 0)) ? $('#profesor-0-nombre').css('border-color','red') : $('#profesor-0-nombre').css('border-color','#ced4da');
    (($('#profesor-0-apellidos').val().length == 0)) ? $('#profesor-0-apellidos').css('border-color','red') : $('#profesor-0-apellidos').css('border-color','#ced4da');    
    (($('#profesor-0-nacimiento').val().length == 0)) ? $('#profesor-0-nacimiento').css('border-color','red') : $('#profesor-0-nacimiento').css('border-color','#ced4da');

    // y alumnos no es necesario que haya un mínimo

    if ($('#asig-0-id').val().length == 0 || $('#asig-0-nombre').val().length == 0 || $('#asig-0-desc').val().length == 0 || $('#asig-0-creditos').val().length == 0
        || $('#profesor-0-nombre').val().length == 0 || $('#profesor-0-apellidos').val().length == 0 || $('#profesor-0-nacimiento').val().length == 0) return false;

    // comprobamos que no exista anteriormente
    return true;
}

// arrays que contendrán los datos de los nodos
var datos = [];     // datos generales y de la primera asignatura
var profes = [];
var alus = [];

function obtenerDatos() {

    datos.push($('#identificador').val());
    datos.push($('#anyo').val());
    datos.push($('#master').val());

    datos.push($('#asig-0-id').val());
    datos.push($('#asig-0-nombre').val());
    datos.push($('#asig-0-desc').val());
    datos.push($('#asig-0-creditos').val());

    // PROFESORES
    // obtenemos el primer div #unProfe a partir del cual recorreremos los siguientes
    var p = document.querySelector("#unProfe");
    if (p == null) {
        alertify.error("No hay profesores en la asignatura!");
        return false;
    }

    var salir = false;
    do {
        // tratamos el profe si tiene datos
        var pi = p.firstElementChild; // entramos en el primer elemento input hijo
        if (pi==null) {
            salir = true;
        } else {
            // console.log(i + "# master: " + m.textContent);
            var nom = pi.value; 
            pi = pi.nextElementSibling;
            var ape = pi.value; 
            pi = pi.nextElementSibling;
            var dat = pi.value; 
            pi = pi.nextElementSibling;
            console.log(nom + " " + ape + " " + dat);

            // subimos los datos de los profesores al array de profes
            profes.push(nom); profes.push(ape); profes.push(dat);
        
            // vamos al siguiente profe
            p = p.nextElementSibling;
            if (p == null) salir = true;
        }
        
    } while (!salir);

    // ALUMNOS
    // obtenemos el primer div #unAlumno a partir del cual recorreremos los siguientes
    var a = document.querySelector("#unAlumno");

    salir = false;
    do {
        // tratamos el alumno si tiene datos
        var ai = a.firstElementChild; // entramos en el primer elemento input hijo
        if (ai==null) {
            salir = true;
        } else {
            var nom = ai.value; 
            ai = ai.nextElementSibling;
            var ape = ai.value; 
            ai = ai.nextElementSibling;
            var dat = ai.value; 
            ai = ai.nextElementSibling;
            console.log(nom + " " + ape + " " + dat);

            // subimos los datos de los alumnos al array de alumnos
            alus.push(nom); alus.push(ape); alus.push(dat);
        
            // vamos al siguiente alumno
            a = a.nextElementSibling;
            if (a == null) salir = true;
        }
        
    } while (!salir);

    console.log("datos: " + datos);
    console.log("profes: " + profes);
    console.log("alus: " + alus);
}

// añadimos datos del master, de la primera asignatura y de los profes y alus si hay
// además bloqueamos la parte del master
function addMasteryAsig() {

    var root = MIXML.getRootNode();
    console.log(root);

    root = root.firstElementChild.firstElementChild;

    // modificamos los atributos:
    root.setAttribute("id", datos[0]);
    root.setAttribute("anio", datos[1]);
    root.setAttribute("nombre", datos[2]);

    console.log("Ahora el xml tocado: ");
    console.log(root);


    // bloqueamos los input generales del máster
    $('#identificador').prop("disabled", true);
    $('#anyo').prop("disabled", true);
    $('#master').prop("disabled", true);

    esprimera = false; // si todo ha ido bien
}

// añadimos sólo la nueva asignatura si no está duplicada
function addAsig() {
    
}

var esprimera = true;
function addAsignatura2() {
    if (comprobarAsignaturaRellena()) {
        // añadimos la asignatura al máster
        obtenerDatos();

        if (esprimera) addMasteryAsig(); 
        else addAsig();
        
        alertify.success("Asignatura añadida con éxito!");
    } else {
        alertify.error("Faltan campos por rellenar");
    }

}

////////////////////////////////////////////////////////////////////////////////
