//opt optimica el yargs para no repetir en cada comando los mismos atributos
const opts = {
    base: {
        demand: true, //que sea obligatorio
        alias: 'b' //reemplaza la palabra clave del comando 'base' por -b ej. node app2 crear -l 6 -b 3
    },
    limite: {
        alias: 'l',
        default: 10
    }
}






const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;





module.exports = {
    argv
}