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