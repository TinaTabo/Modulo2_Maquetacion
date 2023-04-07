/* Función para recoger la información obtenida a través del
formulario en formato JSON, y crear un array con el registro
de todas las solicitudes.
Se llama a la función cada vez que se pulse el botón
"Solicitar información" */

//-- Declaración de la variable registro (se declara fuera de las
//-- funciones para que sea accesible en todo el código)
let register = [];

function saveRequest(){
    let name = document.getElementById("name");
    let origin = document.getElementById("origin");
    let destination = document.getElementById("destination");
    let numPeople = document.getElementById("numPeople");
    let date = document.getElementById("date");

    let request = {
        name_request: name.value,
        origin_request: origin.value,
        destination_request: destination.value,
        numPeople_request: numPeople.value,
        date_request: date.value
    };
    register.push(request);
    console.log(request);
}