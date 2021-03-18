function showMaster(event) {
    console.log(event);
    var valor = event.getElementsByTagName("b")[0].childNodes[0].nodeValue;
    console.log("Valor: " + valor);
    document.getElementById("seleccion").innerHTML = valor;
    // var x= document.getElementById("1");
    // if (x.style.display == "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    mostrarUnMaster();
}


function mostrarUnMaster () {
    var mostrar = document.getElementById("seleccion").textContent;
    console.log("MOSTRAR UN MASTER --> master = " + mostrar);

    // seleccionamos el primer div con id="unidad"
    var m = document.querySelector("#unidad");

    var salir = false;
    var i = 0;
    do {
        // tratamos el master si tiene datos
        if (m==null) {
            salir = true;
        } else {
            // console.log(i + "# master: " + m.textContent);
            var nom = m.getElementsByTagName("h2")[0].childNodes[0].nodeValue;
            console.log(i + " #  master: " + nom);

            if (nom == mostrar) {
                m.style.display = "block"
            } else {
                m.style.display = "none"
            }

            // vamos al siguiente master
            m = m.nextElementSibling;
            // console.log("pre entrar --> master 2: " + m.textContent);
        }
        
    } while (!salir);

    // comprobar si masteres -> h1 es igual a mostrar
    // si no es así vamos al hermano de masteres

    // for (var i=0; i < masteres ; i++) {
    //     var nombreMaster = masteres[i].attributes.getNamedItem("nombre").nodeValue;
    //     console.log("masteres: " + nombreMaster);
    // }

}
