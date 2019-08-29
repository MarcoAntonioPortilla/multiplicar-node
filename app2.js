const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}






//console.log(argv.base);
//console.log('Límite', argv.limite);


/* let parametro = argv[2]; //se especifica 2 porque el par+ametro 0 es la ruta donde esta instalado node, el parámetro 1 es la ruta en donde se ejecuta al app.js y el parametro 2 es el valor de base que le estoy dando
let base = parametro.split('=')[1] */ //split separa una cadena de caracteres por un caracter en especial, en este caso '='

//E parámetro [1] indica que me intereza la primera posición después del '=' que en este caso sería en número proporcionado en la instrucción nodemon app.js --base=5