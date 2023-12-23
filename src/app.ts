import { yarg as argv } from './config/plugins/yargs.plugins'
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();
    // console.log('Fin del programa')
})()


async function main() {

    // console.log( argv )

    const {b:base, l:limit, s:showTable, n:name, d:destination} = argv;


    // ServerApp.run()
    //ServerApp.run({ base: 5, limit: 10, showTable: true })
    ServerApp.run({ base, limit, showTable, name, destination })  // utilizamos la forma corta del ecmaScript 6

}





