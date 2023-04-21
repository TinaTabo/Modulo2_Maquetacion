//-- Definición de clases
class Movie {
    //-- Constructor
    constructor(title,realiseYear,nacionality,genre,photo){
        this.title = title;
        this.realiseYear = realiseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director = "";
        this.writer = "";
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
        this.photo = photo;
    }

    //-- Methods
    printArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
    printAttributes(){
        console.log(`
        Título: ${this.title}
        Año de estreno: ${this.realiseYear}
        Actores: ${this.printArray(this.actors)}
        Nacionalidad: ${this.nacionality}
        Director: ${this.director}
        Escritor: ${this.writer}
        Idioma: ${this.language}
        Plataforma: ${this.plataforma}
        ¿MCU?: ${this.isMCU}
        Nombre del/la protagonista: ${this.mainCharacterName}
        Productor: ${this.producer}
        Distribuidor: ${this.distributor}
        Género: ${this.genre}`);
    }
}

class Professional{
    //-- Constructor
    constructor(name,age,weight,height,isRetired,nationality,oscarsNumber,profession,photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }

    //-- Methods
    printAttributes(){
        console.log(`
        Nombre: ${this.name}
        Edad: ${this.age}
        Peso: ${this.weight}
        Altura: ${this.height}
        ¿Está retirado/a?: ${this.isRetired}
        Nacionalidad: ${this.nationality}
        Nº de Oscars: ${this.oscarsNumber}
        Profesión: ${this.profession}`);
    }
}

//-- Sección Películas
//-- Peliculas que siempre van a estar en la web.
let pelicula1 = new Movie('Jumanji: Bienvenidos a la Jungla',2017,'Estados Unidos','Acción, aventura y comedia','https://www.pantalla90.es/wp-content/uploads/2017/12/1uQaSgtHyTN3r2fecL0mSs6geQO.jpg');
pelicula1.actors = ['Dwayne Johnson','Jack Black','Kevin Hart','Karen Gillan', 'Nick Jonas'];
pelicula1.director = 'Jake Kasdan';
pelicula1.writer = 'Chris Van Allsburg';
pelicula1.language = 'Inglés';
pelicula1.isMCU = false;
pelicula1.mainCharacterName = 'Spencer Gilpin';
pelicula1.producer = 'Matthew Tolmach';
pelicula1.distributor = 'Sony Pictures Releasing';

let pelicula2 = new Movie('Parasite',2019,'Corea del Sur','Drama y thriller psicológico','https://pics.filmaffinity.com/Par_sitos-406070218-large.jpg');
pelicula2.actors = ['Song Kang-ho','Lee Sun-kyun','Cho Yeo-jeong','Choi Woo-shik','Park So-dam'];
pelicula2.director = 'Bong Joon-ho';
pelicula2.writer = 'Han Jin-won';
pelicula2.language = 'Coreano';
pelicula2.isMCU = false;
pelicula2.mainCharacterName = 'Kim Ki-taek';
pelicula2.producer = 'Kwak Sin-ae';
pelicula2.distributor = 'CJ Entertainment';

let pelicula3 = new Movie('Spider-Man: No Way Home',2021,'Estados Unidos','Acción, aventura, ciencia ficción y superhéroes','https://pics.filmaffinity.com/Spider_Man_No_Way_Home-819449455-large.jpg');
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


//-- Funcionalidades de la web
//-- Funcion para resetear la web.
function ocultarTodo(){
    $('#seccion-peliculas').css("display","none");
}

//-- Funciones de la seccion peliculas.
//-- Funcion de carga datos iniciales de la web
function cargarPeliculas(){
    for (let i = 0; i < registroPeliculas.length; i++) {
        $('#peliculas').append(`
            <div class="pelicula">
                <!-- card -->
                <div class="card" style="width: 18rem;">
                    <img src="${registroPeliculas[i].photo}" class="card-img-top" alt="" id="card_img">
                    <div class="card-body">
                        <h5 class="card-title text-light" id="titulo">${registroPeliculas[i].title}</h5>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#infoModal${i}">
                            Más Info
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
}

//-- Funcion para añadir peliculas mediante el formulario
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
    let distributor = $('#input__distribuidor').val();
    let genero = $('#input__genero').val();
    let foto = $('#input__foto').val();
    console.log(titulo,año,reparto,nacionalidad,director,escritor,idioma,MCU,nombreProtagonista,productor,distributor,genero,foto);
}

//-- Mostrar seccion peliculas.
function mostrarPeliculas() {
    $('#seccion-peliculas').css("display","flex");
}
