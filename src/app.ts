import { yarg as argv } from './config/plugins/yargs.plugins'


(async() => {
    await main();
    console.log('Fin del programa')
})()

async function main() {
    //console.log(argv.b);
    //console.log(argv.base);
    console.log(argv);
}

/* const main = async () => {
    return console.log('Main Ejecutando');
}
 */



