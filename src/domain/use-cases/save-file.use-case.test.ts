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
})