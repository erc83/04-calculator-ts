// import { yarg } from "./yargs.plugins";

const runCommand =  async(args: string[] ) => {    // es una funcion que permite modificar mi RB

    process.argv = [ ...process.argv, ...args ]

    // const defaultExport = await import('./yargs.plugins')
    const { yarg } = await import('./yargs.plugins')

    return yarg   // si colocamos elobjeto encima veremos el objeto de configuracion
}

describe('Test yargs.plugin.ts', () => {
    const originalArgv = process.argv;
    
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('should return default values', async ()=> {
        
        const argv = await runCommand(['-b', '5'])

        //console.log(argv)
        //console.log(process.argv)
        //console.log(yarg)

        expect( argv ).toEqual( expect.objectContaining({
                b: 5,
                l: 10,
                s: false,
                show: false,
                n: 'multiplication-table',
                d: 'outputs',
            })
        );     

    })

    test('should return cofiguration with custom values ', async () => {
        // cambiar la base
        // cambiar el limite con el runCommand
        const argv = await runCommand(['-b','5','-l','20', '-s','-n', 'custom-name','-d', 'custom-dir']);

        // console.log(argv)
        expect( argv ).toEqual(expect.objectContaining({
            b: 5,
            l: 20,
            s: true,
            n: 'custom-name',
            d: 'custom-dir',
          }))

    })
})