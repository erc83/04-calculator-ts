import fs from 'fs' // tabmien se puede desestructurar
import { yarg as argv } from './config/plugins/yargs.plugins';

console.log( argv )

/*******************************************************************************/
// Desarrollo esperado
/*******************************************************************************/
let outputMessage = '';
const base = argv.b;
const headerMessage = `
==========================================
        Tabla del ${ base }
==========================================
`

for (let i = 1; i <= argv.l; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}


outputMessage = headerMessage + outputMessage;
console.log(outputMessage)

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');
