//definicion de Typed, efecto tipeo en mainpage

const typed = new Typed('.typed', {
    strings: [ '<i class ="textTyped">Sólo utilizar letras minúsculas</i>' , '<i class ="textTyped">Sólo mensajes sin acentos o caracteres especiales</i>'],
    stringsElements: '#cadenas-texto',//ids de cadena de texto a mostrar.
    typeSpeed: 75, // velocidad en milisegundos.
    startDelay: 300, // retraso en milisegundos.
    backSpeed: 75, // velocidad de borrado.
    smartBackspace: true, // elimina solo palabras nuevas.
    shuffle: false, // aparicion aleatoria
    backDelay: 1500, // tiempo de espera despues de terminar de escribir.
    loop: true, // repetir el array.
    loopCount: false, // cantidad de veces que se repite.
    cursorChar: '|', // caracter del cursos.
    contentType: "html", // html o null para le resto.

});

const typed2 = new Typed('.typed2', {
    strings: [ '<i class ="textTyped">Marcelo Boca Salafate</i>' , '<i class ="textTyped">https://github.com/mabo1975</i>'],
    stringsElements: '#cadenas-texto',//ids de cadena de texto a mostrar.
    typeSpeed: 75, // velocidad en milisegundos.
    startDelay: 300, // retraso en milisegundos.
    backSpeed: 75, // velocidad de borrado.
    smartBackspace: true, // elimina solo palabras nuevas.
    shuffle: false, // aparicion aleatoria
    backDelay: 1500, // tiempo de espera despues de terminar de escribir.
    loop: true, // repetir el array.
    loopCount: false, // cantidad de veces que se repite.
    cursorChar: '|', // caracter del cursos.
    contentType: "html", // html o null para le resto.

});
