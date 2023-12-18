
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

// utilizando 

export const yarg = yargs( hideBin(process.argv) )
    .option('b', {
        alias:'base',
        type: 'number',
        demandOption: true,    //se necesita que se envie el argumento
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .check(( argv, options ) => {
        if( argv.b < 1 ) throw 'Error: base must be greater than 0';

        return true;
    })
    .parseSync()







