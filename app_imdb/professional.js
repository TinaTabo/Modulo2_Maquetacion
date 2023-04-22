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