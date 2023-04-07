/* Función para recoger la información obtenida a través del formulario en formato JSON,
y crear un array con el registro de todas las solicitudes. Se llama a la función cada vez
que se pulse el botón "Solicitar información" */

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

/* Función para filtrar y mostrar los datos de aquellos registros que tengan como destino
    Canarias, Mallorca o Galicia*/
function filterRequest(){
    let tabla = document.getElementById("request");
    let aside = document.querySelector(".aside2");

    if (aside.classList.contains("aside")) {
        aside.classList.remove("aside");
    }

    tabla.innerHTML = `
        <tr class="table__head">
            <th>Nombre</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Nº de Personas</th>
            <th>Fecha</th>
        </tr>
    `

    for (let i = 0; i < register.length; i++) {
        if (register[i].destination_request.toLowerCase() == "canarias"||
            register[i].destination_request.toLowerCase() == "mallorca"||
            register[i].destination_request.toLowerCase() == "galicia") {
                tabla.innerHTML += `
                    <tr>
                        <th>${register[i].name_request}</th>
                        <th>${register[i].origin_request[0].toUpperCase() + register[i].origin_request.substring(1).toLowerCase()}</th>
                        <th>${register[i].destination_request[0].toUpperCase() + register[i].destination_request.substring(1).toLowerCase()}</th>
                        <th>${register[i].numPeople_request}</th>
                        <th>${register[i].date_request}</th>
                    </tr>
                `
        }
    }
}