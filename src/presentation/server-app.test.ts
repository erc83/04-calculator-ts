import { ServerApp } from './server-app'
import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('Server App', () => {

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
})
