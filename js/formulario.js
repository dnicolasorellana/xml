
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
var MAINXML;

window.onload = function() {
    // creamos un XML con la estructura / o el ele master solo ???
    MIXML = jQuery.parseXML(ini);
    // console.log(MIXML.getRootNode());

    console.log("zzz");
    $.get("../xml/nuestroxml.xml",null,function(xml){
        console.log("se ha leido bine el fichero! ");
        // console.log(x);
        copiar(xml);
    }, "xml");
}

function copiar(x) {
    let nuevo = x.cloneNode(true);
    MAINXML = nuevo;
    console.log(nuevo);
    var masteres = MAINXML.getRootNode().firstElementChild;
    console.log(masteres);
}

function crearMaster () {
    console.log("probando probando");
    var newDocument = MAINXML.implementation.createDocument(
        MAINXML.namespaceURI, //namespace to use
        null,                     //name of the root element (or for empty document)
        null                      //doctype (null for XML)
    );
    var newNode = newDocument.importNode(
        MAINXML.documentElement, //node to import
        true                         //clone its descendants
    );
    newDocument.appendChild(newNode);
    console.log(newDocument);
    newDocument.firstElementChild.appendChild(MIXML.firstElementChild.firstElementChild);

    window.location.href = "../xml/nuestroxml.xml";
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
var master = [];     // datos generales del master 
var asig = [];      // de la primera asignatura
var profes = [];
var alus = [];

function obtenerDatos() {

    asig = [];      // de la primera asignatura
    profes = [];
    alus = [];
    if (esprimera) {
        let datos = {};
        datos.id = $('#identificador').val();
        datos.anyo = $('#anyo').val();
        datos.nombre = $('#master').val();
    
        master.push(datos);
    }

    let datosAsig = {};
    datosAsig.id = $('#asig-0-id').val();
    datosAsig.nombre = $('#asig-0-nombre').val();
    datosAsig.desc = $('#asig-0-desc').val();
    datosAsig.creditos = $('#asig-0-creditos').val();

    asig.push(datosAsig);

    // PROFESORES
    // obtenemos el todos lo elementos con clase unProfe a partir del cual recorreremos los siguientes
    var profesEl = document.querySelectorAll(".unProfe");

    if (profesEl == null) {
        alertify.error("No hay profesores en la asignatura!");
        return false;
    }

    for (let i = 0; i < profesEl.length; i++) {
        let div = profesEl[i].children;
        console.log(div);
        let profe = {};
        for (let j = 0; j < div.length; j++) {
            profe.nombre = div[0].value;
            profe.apellidos = div[1].value;
            profe.nacimiento = div[2].value;
        }
        profes.push(profe);
    }
    // ALUMNOS
    // obtenemos el primer div #unAlumno a partir del cual recorreremos los siguientes
    var alumnosEl = document.querySelectorAll(".unAlumno");
    if (alumnosEl == null) {
        alertify.error("No hay alumnos matriculados!");
        return false;
    }

    for (let i = 0; i < alumnosEl.length; i++) {
        let div = alumnosEl[i].children;
        console.log(div);
        let alu = {};
        for (let j = 0; j < div.length; j++) {
            alu.nombre = div[0].value;
            alu.apellidos = div[1].value;
            alu.nacimiento = div[2].value;
        }
        alus.push(alu);
    }
}

// añadimos datos del master y bloqueamos la parte del master
function addDatosMaster() {
    var root = MIXML.getRootNode();
    // console.log(root);

    root = root.firstElementChild.firstElementChild;

    // modificamos los atributos:
    root.setAttribute("id", master[0].id);
    root.setAttribute("anio", master[0].anyo);
    root.setAttribute("nombre", master[0].nombre);

    // console.log("- - - -");     console.log("- - - -");     console.log("- - - -");
    // console.log("Ahora el xml tocado: ");
    // console.log(root);


    // bloqueamos los input generales del máster
    $('#identificador').prop("disabled", true);
    $('#anyo').prop("disabled", true);
    $('#master').prop("disabled", true);

}

function limpiarDatosAsig() {
    console.log("hay que reiniciar los inputs de las asignaturas");
    $('#asig-0-id').val("");
    $('#asig-0-nombre').val("");
    $('#asig-0-desc').val("");
    $('#asig-0-creditos').val("");

    borrarDivsDinamicos();
}

// añadimos sólo la nueva asignatura si no está duplicada
function addAsig() {
    var root = MIXML.getRootNode();
    root = root.firstElementChild.firstElementChild;

    // creación y asignación elementos de la nueva asignatura
    if (esprimera) {
        var ass = document.createElement("asignaturas");
    } else {
        var ass = root.getElementsByTagName('asignaturas')[0];
    }

    var as = document.createElement("asignatura"); as.setAttribute("id", asig[0].id);
    var a_nom = document.createElement("nombre"); a_nom.innerHTML = asig[0].nombre;
    var a_des = document.createElement("descripcion"); a_des.innerHTML = asig[0].desc;
    var a_cre = document.createElement("creditos"); a_cre.innerHTML = asig[0].creditos;

    var p = document.createElement("profesores");
    for (let i = 0; i < profes.length; i++) {
        var prof = document.createElement("profesor");
        var prof_nom = document.createElement("nombre"); prof_nom.innerHTML = profes[i].nombre;
        var prof_des = document.createElement("apellidos"); prof_des.innerHTML = profes[i].apellidos;
        var prof_cre = document.createElement("nacimiento"); prof_cre.innerHTML = profes[i].nacimiento;
        prof.appendChild(prof_nom);
        prof.appendChild(prof_des);
        prof.appendChild(prof_cre);
        p.appendChild(prof);

    }

    var al = document.createElement("alumnos");
    for (let i = 0; i < alus.length; i++) {
        var alu = document.createElement("alumno");
        var al_nom = document.createElement("nombre"); al_nom.innerHTML = alus[i].nombre;
        var al_des = document.createElement("apellidos"); al_des.innerHTML = alus[i].apellidos;
        var al_cre = document.createElement("nacimiento"); al_cre.innerHTML = alus[i].nacimiento;
        alu.appendChild(al_nom);
        alu.appendChild(al_des);
        alu.appendChild(al_cre);
        al.appendChild(alu);
    }

    as.appendChild(a_nom);
    as.appendChild(a_des);
    as.appendChild(a_cre);
    as.appendChild(p);
    as.appendChild(al);
    ass.appendChild(as);
    root.appendChild(ass);
}

var esprimera = true;
function addAsignatura2() {
    if (comprobarAsignaturaRellena()) {
        // añadimos la asignatura al máster
        obtenerDatos();

        if (esprimera) addDatosMaster(); 
        
        addAsig();

        limpiarDatosAsig();
        
        esprimera = false; // si todo ha ido bien
        alertify.success("Asignatura añadida con éxito!");
    } else {
        alertify.error("Faltan campos por rellenar");
    }

}

////////////////////////////////////////////////////////////////////////////////
