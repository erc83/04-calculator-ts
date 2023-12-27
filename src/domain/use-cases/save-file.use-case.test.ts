import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {

    // beforeEach(() => {
    //     // clean up
    //     fs.rmSync('outputs', { recursive: true });
    //     
    // });

    // despues que lo cree lo borre y no tengamos basura
    afterEach(() => {
        // clean up
        const outputFolderExists = fs.existsSync('outputs');
        if( outputFolderExists ) fs.rmSync('outputs', { recursive: true });
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

    afterEach(() => {
        // clean up
        const outputFolderExists = fs.existsSync('custom-outputs');
        if( outputFolderExists ) fs.rmSync('custom-outputs', { recursive: true });
    })

    test('should save file with custom values', () => {

        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name',
        }
        // custom-outputs/custom-table-name.txt
        const saveFile = new SaveFile();

        const result = saveFile.execute(options)
        expect( result ).toBe( true );
        expect( result ).toBeTruthy();

        // const filePath = 'custom-outputs/custom-table-name.txt'
        const filePath = `${options.fileDestination}/${options.fileName}.txt`

        const fileExists = fs.existsSync(filePath)// me aseguro de que exista output y table
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect( fileExists ).toBe( true );

        expect( fileContent ).toBe( options.fileContent )
    })
})