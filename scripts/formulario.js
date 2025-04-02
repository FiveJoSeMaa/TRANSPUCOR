var miBoton = document.querySelector("#enviar");
var miForm = document.querySelector(".formulario");

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault();

    valido = validar();

    if (valido == true) {
        miForm.submit();
    }
})

function validar() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("tlfn")
    var privacidad = document.getElementById("check");
    var correcto = true;
    var mensaje = "";


    /******************************* VALIDACION FORMULARIO ***********************************/

    /************* NOMBRE *********/

    if (nombre.value == null || nombre.value == "") {
        mensaje = "Campo Nombre no puede estar vacio.\n";
        correcto = false;

    }

    let name_re = /^[a-zA-Z ]{3,15}$/;

    if (!name_re.exec(nombre.value)) {
        mensaje += "Nombre no valido.\n";
        correcto = false;
    }

    /*************APELLIDOS***********/

    if (apellidos.value == null || apellidos.value == "") {
        mensaje = "Campo Apellidos no puede estar vacio.\n";
        correcto = false;
    }

    let apellidos_re = /^[a-zA-Z ]{3,40}$/;

    if (!apellidos_re.exec(apellidos.value)) {
        mensaje += "Apellidos no Validos.\n";
        correcto = false;
    }


    /*************E-MAIL**************/

    if (correo.value == null || correo.value == "") {
        mensaje = "Campo correo no puede estar vacio.\n";
        correcto = false;
    }

    let correo_re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!correo_re.exec(correo.value)) {
        mensaje += "Correo no valido.\n";
        correcto = false;
    }

    /************* DIRECCION *********/

    if (direccion.value == null || direccion.value == "") {
        mensaje += "Campo Direccion no puede estar vacio.\n";
        correcto = false;
    }



    /************* CHECKBOX ************/

    if (!privacidad.checked) {
        mensaje += "Tienes que aceptar los Terminos de Privacidad.\n";
        correcto = false;
    }

    /********** TELEFONO ***************/

    if (telefono.value == null || telefono.value == "") {
        mensaje += "Campo Telefono no puede estar vacio.\n";
        correcto = false;

    }

    let tlfn_re = /^[0-9]{9}$/

    if (!tlfn_re.exec(telefono.value)) {
        mensaje += "Telefono no valido.\n";
        correcto = false;
    }



    if (correcto == true) {
        return true;
    } else {
        alert(mensaje);
        return false;
    }


}

function setError(input) {
    const formControl = input.parentElement;
    formControl.className = "formulario error";
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "formulario success";
}

// MAPA DE OPENSTREETMAP

//primero creamos la variable mapa que contiene los datos

var map = L.map('mapa').setView([37.896004, -4.775876], 15);

// capa de mapa

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' }).addTo(map);



map.on("click", function (e) { var pixelPosition = e.layerPoint; var latLng = map.layerPointToLatLng(pixelPosition); alert("Position Pixel = " + pixelPosition + "\n LatLng = " + latLng); });




L.Routing.control({ waypoints: [L.latLng(37.896083, -4.775673), L.latLng(37.888599, -4.778414)], routeWhileDragging: true }).addTo(map);

var control = L.Routing.control({
    waypoints: [
      L.latLng(37.895846, -4.775802),  // Punto de inicio
      L.latLng(37.888666, -4.776749)  // Punto de destino
    ],
    routeWhileDragging: true  // Permite arrastrar la ruta
  }).addTo(map);

  // Hacer la interacción de crear rutas
  map.on('click', function(e) {
    var latlng = e.latlng;
    control.spliceWaypoints(control.getWaypoints().length - 1, 1, latlng);
  });
