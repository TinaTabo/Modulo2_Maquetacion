//-------------------------------------------- Sección Películas ------------------------------------------------
//-- Peliculas que siempre van a estar en la web.
const pelicula1 = new Movie('Jumanji: Bienvenidos a la Jungla',2017,'Estados Unidos','Acción, aventura y comedia','https://www.pantalla90.es/wp-content/uploads/2017/12/1uQaSgtHyTN3r2fecL0mSs6geQO.jpg');
pelicula1.actors = ['Dwayne Johnson','Jack Black','Kevin Hart','Karen Gillan', 'Nick Jonas'];
pelicula1.director = 'Jake Kasdan';
pelicula1.writer = 'Chris Van Allsburg';
pelicula1.language = 'Inglés';
pelicula1.isMCU = false;
pelicula1.mainCharacterName = 'Spencer Gilpin';
pelicula1.producer = 'Matthew Tolmach';
pelicula1.distributor = 'Sony Pictures Releasing';

const pelicula2 = new Movie('Parasite',2019,'Corea del Sur','Drama y thriller psicológico','https://pics.filmaffinity.com/Par_sitos-406070218-large.jpg');
pelicula2.actors = ['Song Kang-ho','Lee Sun-kyun','Cho Yeo-jeong','Choi Woo-shik','Park So-dam'];
pelicula2.director = 'Bong Joon-ho';
pelicula2.writer = 'Han Jin-won';
pelicula2.language = 'Coreano';
pelicula2.isMCU = false;
pelicula2.mainCharacterName = 'Kim Ki-taek';
pelicula2.producer = 'Kwak Sin-ae';
pelicula2.distributor = 'CJ Entertainment';

const pelicula3 = new Movie('Spider-Man: No Way Home',2021,'Estados Unidos','Acción, aventura, ciencia ficción y superhéroes','https://pics.filmaffinity.com/Spider_Man_No_Way_Home-819449455-large.jpg');
pelicula3.actors = ['Tom Holland','Zendaya','Jacob Batalon','Marisa Tomei','Benedict Cumberbatch','Jon Favreau'];
pelicula3.director = 'Jon Watts';
pelicula3.writer = 'Chris McKenna';
pelicula3.language = 'Inglés';
pelicula3.isMCU = true;
pelicula3.mainCharacterName = 'Peter Parker';
pelicula3.producer = 'Kevin Feige';
pelicula3.distributor = 'Sony Pictures Releasing';
//-- Array registro de las peliculas de la web.
let registroPeliculas = [pelicula1,pelicula2,pelicula3];


//-- Funciones de la seccion peliculas.

//-- Mostrar seccion peliculas.
function mostrarPeliculas() {
    $('#seccion-peliculas').css("display","flex");
}

//-- Funcion de carga datos iniciales de la web
function htmlPelicula(i){
    $('#peliculas').append(`
        <div class="pelicula">
            <!-- card -->
            <div class="card" style="width: 18rem;">
                <img src="${registroPeliculas[i].photo}" class="card-img-top" alt="" id="card_img">
                <div class="card-body">
                    <h5 class="card-title text-light" id="titulo">${registroPeliculas[i].title}</h5>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#infoModal${i}">
                        VER FICHA
                    </button>
                </div>
            </div>
            <!-- modal -->
            <div class="modal fade" id="infoModal${i}" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="titulo">${registroPeliculas[i].title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="modal_info">
                            <span class="fw-bold">Año:</span> ${registroPeliculas[i].realiseYear}<br>
                            <span class="fw-bold">Reparto:</span> ${registroPeliculas[i].actors}<br>
                            <span class="fw-bold">Nacionalidad:</span> ${registroPeliculas[i].nacionality}<br>
                            <span class="fw-bold">Director:</span> ${registroPeliculas[i].director}<br>
                            <span class="fw-bold">Escritor:</span> ${registroPeliculas[i].writer}<br>
                            <span class="fw-bold">Idioma:</span> ${registroPeliculas[i].language}<br>
                            <span class="fw-bold">¿MCU?:</span> ${registroPeliculas[i].isMCU}<br>
                            <span class="fw-bold">Nombre del/la protagonista:</span> ${registroPeliculas[i].mainCharacterName}<br>
                            <span class="fw-bold">Productor:</span> ${registroPeliculas[i].producer}<br>
                            <span class="fw-bold">Distribuidor:</span> ${registroPeliculas[i].distributor}<br>
                            <span class="fw-bold">Género:</span> ${registroPeliculas[i].genre}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function cargarPeliculas(){
    for (let i = 0; i < registroPeliculas.length; i++) {
        htmlPelicula(i);
    }
}

//-- Funcion para añadir peliculas mediante el formulario
//-- contador del bucle que debe ir fuera del metodo para que cada vez que se añada una pelicula aumente una
//-- unidad sin resetearse.
let i = 3;
function añadirPelicula(){
    //-- Obtener entradas formulario
    let titulo = $('#input__titulo').val();
    let año = $('#input__año').val();
    let reparto = $('#input__reparto').val();
    let nacionalidad = $('#input__nacionalidad').val();
    let director = $('#input__director').val();
    let escritor = $('#input__escritor').val();
    let idioma = $('#input__idioma').val();
    let MCU = $('#input__MCU').val();
    let nombreProtagonista = $('#input__nombreProtagonista').val();
    let productor = $('#input__productor').val();
    let distribuidor = $('#input__distribuidor').val();
    let genero = $('#input__genero').val();
    let foto = $('#input__foto').val();

    //-- Crear registro de la nueva pelicula
    let nuevaPelicula = new Movie(titulo,año,nacionalidad,genero,foto);
    nuevaPelicula.actors = reparto.split(',');
    nuevaPelicula.director = director;
    nuevaPelicula.writer = escritor;
    nuevaPelicula.language = idioma;
    nuevaPelicula.isMCU = MCU;
    nuevaPelicula.mainCharacterName = nombreProtagonista;
    nuevaPelicula.producer = productor;
    nuevaPelicula.distributor = distribuidor;
    registroPeliculas.push(nuevaPelicula);

    //-- Mostrar en pantalla la pelicula añadida.
    for (i; i < registroPeliculas.length; i++) {
        htmlPelicula(i);
    }

}


//-------------------------------------------- Sección Profesionales ---------------------------------------------
//-- Profesionales que siempre van a estar en la web.
let profesional1 = new Professional('Steven Spielberg',75,80,173,false,'Estadounidense',4,'director','https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_FMjpg_UX1000_.jpg');
let profesional2 = new Professional('Tom Hanks',66,77,183,false,'Estadounidense',2,'actor','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YGO8YTyDatiTonJ3damPUajdHDodyvrz3OddSL5IdeZqYf0XZCKp48wTb0b4IfrT9no&usqp=CAU');
let profesional3 = new Professional('Kate Winslet',46,63,169,false,'Británica',1,'actriz','https://m.media-amazon.com/images/M/MV5BODgzMzM2NTE0Ml5BMl5BanBnXkFtZTcwMTcyMTkyOQ@@._V1_FMjpg_UX1000_.jpg');
let profesional4 = new Professional('Aaron Sorkin',61,70,185,false,'Estadounidense',2,'guionista','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP1ZooQou28O0BfSyzmBQoKvPCDlGURrxqS47RZ07HO5-DRWwtPlraaBAlHzg8_NH3Kg&usqp=CAU');
let profesional5 = new Professional('Kathleen Kennedy',68,67,165,false,'Estadounidense',8,'productora','https://m.media-amazon.com/images/M/MV5BOTQ4OTM5NzA0MF5BMl5BanBnXkFtZTcwMzE3MjA0Nw@@._V1_.jpg');
let profesional6 = new Professional('Roger Deakins',73,79,183,false,'Británico',15,'camarógrafo','https://m.media-amazon.com/images/M/MV5BMjA2ODk5MDE4Ml5BMl5BanBnXkFtZTcwMTkzMjgxNA@@._V1_.jpg');

let registroProfesionales = [profesional1,profesional2,profesional3,profesional4,profesional5,profesional6];

//-- Funciones de la seccion profesionales.

//-- Mostrar seccion peliculas.
function mostrarProfesionales() {
    $('#seccion-profesionales').css("display","flex");
}

//-- Funcion de carga datos iniciales de la web
function htmlProfesionales(i){
    $('#profesionales').append(`
        <div class="profesional">
            <!-- card -->
            <div class="card" style="width: 18rem;">
                <img src="${registroProfesionales[i].photo}" class="card-img-top" alt="" id="card_img">
                <div class="card-body">
                    <h5 class="card-title text-light fs-4" id="titulo">${registroProfesionales[i].name}</h5>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#infoProfModal${i}">
                        MOSTRAR PERFIL
                    </button>
                </div>
            </div>
            <!-- modal -->
            <div class="modal fade" id="infoProfModal${i}" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="titulo">${registroProfesionales[i].name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="modal_info">
                            <span class="fw-bold">Edad:</span> ${registroProfesionales[i].age}<br>
                            <span class="fw-bold">Peso:</span> ${registroProfesionales[i].weight}<br>
                            <span class="fw-bold">Altura:</span> ${registroProfesionales[i].height}<br>
                            <span class="fw-bold">¿Está retirado/a?:</span> ${registroProfesionales[i].isRetired}<br>
                            <span class="fw-bold">Nacionalidad:</span> ${registroProfesionales[i].nationality}<br>
                            <span class="fw-bold">Nº de Oscars ganados:</span> ${registroProfesionales[i].oscarsNumber}<br>
                            <span class="fw-bold">Profesión:</span> ${registroProfesionales[i].profession}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function cargarProfesionales(){
    for (let i = 0; i < registroProfesionales.length; i++) {
        htmlProfesionales(i);
    }
}

//------------------------------------------- Funcionalidades del Home -----------------------------------------
//-- Funcion para ocultar todas las secciones --> funcionalidad del link Home.
function ocultarTodo(){
    $('#seccion-peliculas').css("display","none");
    $('#seccion-profesionales').css("display","none");
}

function cargarDatos(){
    cargarPeliculas();
    cargarProfesionales();
}