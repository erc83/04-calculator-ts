import { ServerApp } from './server-app'
import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('Server App', () => {


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should create ServerApp instance', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf( ServerApp );

        expect( typeof ServerApp.run ).toBe('function'); // con esta prueba nos aseguramos que el metodo siempre este hay

    })

    test('should run ServerApp with options', () => {

        const logSpy = jest.spyOn(console, 'log');
                                    // el prototype tiene el metodo de execute de la clase
        const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );

        const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );

        const options = {
            base: 2,
            limit: 10,
            showTable: false,
            destination: 'test-destination',
            name: 'test-name',
        };

        ServerApp.run(options);

        expect( logSpy ).toHaveBeenCalledTimes(2);
        expect( logSpy ).toHaveBeenCalledWith('Server running...');
        expect( logSpy ).toHaveBeenCalledWith('File Created!');
        expect( logSpy ).toHaveBeenLastCalledWith('File Created!'); // espera que sea el ultimo log

        expect( createTableSpy ).toHaveBeenCalledTimes(1)
        expect( createTableSpy ).toHaveBeenCalledWith({
            "base": options.base, 
            "limit": options.limit,
        })

        expect( saveFileSpy ).toHaveBeenCalledTimes(1);
        expect( saveFileSpy ).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            fileName: options.name,
        })
        

    }) 


    test('should run with custom values mocked', () => {
        const options = {
            base: 2,
            limit: 10,
            showTable: false,
            destination: 'test-destination',
            name: 'test-name',
        };
        // 

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');    //similar a los espias, //mockReturnValue cambia el undefined por este valor
        const saveFileMock = jest.fn().mockReturnValue(true); // simulamos que retorna un true

        global.console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options)

        expect( logMock ).toHaveBeenCalledWith('Server running...')
        expect( createMock ).toHaveBeenCalledWith({"base": options.base, "limit": options.limit})

        expect( saveFileMock ).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.destination,
            fileName : options.name,
        })
        // si el archivo se crea correctamente
        expect( logMock ).toHaveBeenCalledWith('File Created!')

        // esperamos que el error mock nunca halla sido llamado
        expect( logErrorMock ).not.toHaveBeenCalledWith();

    })

})
