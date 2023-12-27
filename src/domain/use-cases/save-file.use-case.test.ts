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
        fs.rmSync('outputs', { recursive: true });
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
})