//indicamos que mandaremos a llamar un archivo externo
const { crearArchivo } = require('./multiplicar/multiplicar');

//Para que no mande error la funcion split es necesario capturar en la terminal: nodemon app.js --base=5
let argv = process.argv;
let parametro = argv[2]; //se especifica 2 porque el par+ametro 0 es la ruta donde esta instalado node, el parámetro 1 es la ruta en donde se ejecuta al app.js y el parametro 2 es el valor de base que le estoy dando
let base = parametro.split('=')[1] //split separa una cadena de caracteres por un caracter en especial, en este caso '='

//E parámetro [1] indica que me intereza la primera posición después del '=' que en este caso sería en número proporcionado en la instrucción nodemon app.js --base=5


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));