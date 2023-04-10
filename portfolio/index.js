//-- Al pasar el mouse por encima del contenedor de los proyectos se mostrará
//-- mas informacion, y al quitar el mouse volvera a su estado inicial.
const proyectoBox1 = document.getElementById("proyecto1");
const proyectoInfo1 = document.getElementById("proyecto1__info");

proyectoBox1.addEventListener(
    "mouseenter",
    (event) => {
        console.log('entro1')
        proyectoBox1.style.display = 'none';
        proyectoInfo1.style.display = 'flex';
        // Resetear valores despues de 5 seg.
        setTimeout(() => {
            proyectoBox1.style.display = 'flex';
            proyectoInfo1.style.display = 'none';
        }, 5000);
        },
        false
);

const proyectoBox2 = document.getElementById("proyecto2");
const proyectoInfo2 = document.getElementById("proyecto2__info");

proyectoBox2.addEventListener(
    "mouseenter",
    (event) => {
        console.log('entro2')
        proyectoBox2.style.display = 'none';
        proyectoInfo2.style.display = 'flex';
        // Resetear valores despues de 5 seg.
        setTimeout(() => {
            proyectoBox2.style.display = 'flex';
            proyectoInfo2.style.display = 'none';
        }, 5000);
        },
        false
);

const proyectoBox3 = document.getElementById("proyecto3");
const proyectoInfo3 = document.getElementById("proyecto3__info");

proyectoBox3.addEventListener(
    "mouseenter",
    (event) => {
        console.log('entro3')
        proyectoBox3.style.display = 'none';
        proyectoInfo3.style.display = 'flex';
        // Resetear valores despues de 5 seg.
        setTimeout(() => {
            proyectoBox3.style.display = 'flex';
            proyectoInfo3.style.display = 'none';
        }, 5000);
        },
        false
);
