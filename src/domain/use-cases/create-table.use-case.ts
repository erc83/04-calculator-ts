
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


// crear la data del archivo
export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         *  DI- Dependency Injection
         */
    ){}

    execute({ base, limit = 10 } : CreateTableOptions){     //limite = 10 porque es opcional
        let outputMessage = '';
        for (let i = 1; i <= limit; i++ ) {
            outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
        }

        return outputMessage;
    }

}



