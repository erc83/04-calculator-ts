
import fs from 'fs'

export interface SaveFileUseCase {
    // execute: (options: SaveFileUseCase ) => boolean;
    execute: (options: Options ) => boolean;
}

export interface Options {
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;

}

// crear el caso de uso como tal

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repository: Storage repository */ // en este repositorio es donde voy a grabar en aws, en filesystem

    ){}
    
    // execute( options: Options ): boolean {    // tomamos el fileContent, destination, fileName
    execute( { 
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table' 
    }: Options ): boolean {

        // const outputPath = `outputs`;   // no se necesita porque viene en el destination
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
    
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent )
    
            // console.log('File created!');
            return true
        } catch (error) {
            console.error(error)
            return false
        }


    }
}
