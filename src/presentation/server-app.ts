import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

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


        // qeui se llama la funcion del execute del SaveFile()
        const wasCreated = new SaveFile()
            .execute({                           // tambien se puede enviar el destino y el fileName
                fileContent:  table,
                fileDestination: `outputs/table-${ base }`,
            });   

        if ( showTable ) console.log(table); // para decir si el cliente quiere imprimir la tabla por consola
    
        ( wasCreated )
            ? console.log('File Created!')
            : console.log('File Not Created!')
    }
}