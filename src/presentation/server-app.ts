import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {
    
    // static run( options: RunOptions) {
    static run( { base, limit, showTable }: RunOptions) {
        console.log('Server running...');
        // console.log(options)

        const table = new CreateTable().execute({ base, limit })
        //console.log(table)
        if ( showTable ) console.log(table) // para decir si el cliente quiere imprimir la tabla por consola
    }
}