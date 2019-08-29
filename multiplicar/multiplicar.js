//requireds
const fs = require('fs'); //parámetros requeridos por el writeFile
const colors = require('colors');





let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}







let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite}, no es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}



//nos permite estipular que la función crearArchivo puede ser utilizada en todo nuestro proyecto. No nada mas en este archivo js
//forma 1 de hacerlo
module.exports = {
    crearArchivo,
    listarTabla
}


//forma 2 de hacerlo
//en la declaración de la función agregarle:
/* module.exports.crearArchivo = (base) => {

} */