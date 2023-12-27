import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {

    const custom_options = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table-name',
    }

    afterEach(() => {
        // clean up
        const outputFolderExists = fs.existsSync('outputs');
        if( outputFolderExists ) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync('custom-outputs');
        if( customOutputFolderExists ) fs.rmSync(custom_options.fileDestination, { recursive: true });
    })

    test('should save file with default values', () => {

        const saveFile = new SaveFile(); // cuales son las opciones que tenemos por defecto

        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options)

        expect( result ).toBe( true );
        expect( result ).toBeTruthy();

        const filePath = 'outputs/table.txt'
        const fileExists = fs.existsSync(filePath)// me aseguro de que exista output y table
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect( fileExists ).toBe( true );

        expect( fileContent ).toBe( options.fileContent )

    })

    test('should save file with custom values', () => {
        // custom-outputs/custom-table-name.txt
        const saveFile = new SaveFile();

        const result = saveFile.execute(custom_options)
        expect( result ).toBe( true );
        expect( result ).toBeTruthy();

        // const filePath = 'custom-outputs/custom-table-name.txt'
        const filePath = `${custom_options.fileDestination}/${custom_options.fileName}.txt`

        const fileExists = fs.existsSync(filePath)// me aseguro de que exista output y table
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect( fileExists ).toBe( true );

        expect( fileContent ).toBe( custom_options.fileContent )
    })

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();

        // para espiar la funcion y añadimos el mock implementation sobreescribimos la funcionalidad
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom error message from testing spyOn'); }
        )

        const result = saveFile.execute(custom_options);

        expect( result ).toBe( false )

        mkdirSpy.mockRestore(); // para dejar la funcionalidad restaurada y no afecte el siguiente test
  
    })

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();

        // para espiar la funcion y añadimos el mock implementation sobreescribimos la funcionalidad
         const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
             () => { throw new Error('This is a custom writing error message from testing'); }
         )

        const result = saveFile.execute({ fileContent: 'Hola' });

        expect( result ).toBe( false ) // se espera que se cree pero persiste jest.spyOn en esta prueba
  
        writeFileSpy.mockRestore();
    })

})