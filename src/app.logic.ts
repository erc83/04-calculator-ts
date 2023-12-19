import fs from 'fs' // tabmien se puede desestructurar
import { yarg as argv } from './config/plugins/yargs.plugins';

console.log( argv )

/*******************************************************************************/
// Desarrollo esperado
/*******************************************************************************/

const { b:base, l:limit, s:showTable } = argv

let outputMessage = '';
// const base = argv.b;    // se comenta porque se desestructura anteriormente
const headerMessage = `
==========================================
        Tabla del ${ base }
==========================================
`

for (let i = 1; i <= limit; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}


outputMessage = headerMessage + outputMessage;

if( showTable ) {                        // se imprime solo si viene el show
    console.log(outputMessage)
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');
