import fs from 'fs' // tabmien se puede desestructurar

const number = 5

const multiplicacion = () => {
    

    console.log(`
        ==============================================
        Tabla del ${number}
        ==============================================

        ${number} x 1 = ${number * 1}
        ${number} x 2 = ${number * 2}
        ${number} x 3 = ${number * 3}
        ${number} x 4 = ${number * 4}
        ${number} x 5 = ${number * 5}
        ${number} x 6 = ${number * 6}
        ${number} x 7 = ${number * 7}
        ${number} x 8 = ${number * 8}
        ${number} x 9 = ${number * 9}
    `)
}
multiplicacion()


/*******************************************************************************/
// Desarrollo esperado
/*******************************************************************************/
let outputMessage = '';
const base = 6;
const headerMessage = `
==========================================
        Tabla del ${ base }
==========================================
`

for (let i = 1; i <= 10; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}


outputMessage = headerMessage + outputMessage;
console.log(outputMessage)



const outputPath = `outputs`;



fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');
