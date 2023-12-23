## pasos para usar Node con Typescript

### 1.- Instalar TypeScript y tipos de Node, como dependencias de desarrollo

```
npm i -D typescript @types/node
```

### 2.- Inicializar el archivo de configuracion de TYpeScript (Se puede configurar al gusto)

```
npx tsc --init --outDir dist/ --rootDir src
```

### 3.- Opcional - Para transpilar el codigo, se puede usar este comando
```
npx tsc
npx tsc --watch
```

### 4.- Configurar Nodemon y Node-TS
```
npm install -D ts-node nodemon
```

### 5.- Crear archivo de configuracion de Nodemon - nodemon.json

{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}

### 6.- Crear script para correr en desarrollo en el package.json
```js
"dev":"nodemon"
"dev":"npx nodemon" // en caso de no quere instalar nodemon
```

### 7.- Instalar rimraf (Herramienta que funciona similar al rm -f ) eliminar directorio
```
npm install -D rimraf
```

### 8.- Crear scripts en el package.json para construir e iniciar en producción

```json
"build": "rimraf ./dist && tsc"
"start": "npm run build && node dist/app.ts"
```

### 9.- configuracion tsconfig.ts

```ts
{
  "exclude": ["node_modules"],
  "include": ["src/**/*"],
  "compilerOptions": {
```


### 10.- descargar el proyecto y ejecutar los siguientes comandos

```
npm install
```

### 11.- para levantar la aplicacion

```
npm run dev
npm run devmon
npm run build
npm start
```


### 12.- ejecutar para crear tabla de multiplicar 8

```
npx ts-node src/app.ts --base 8
```

### 13.- ejecutar para aplicar los banderas necesarias 

```
npx ts-node src/app.ts --base 8 --name table --destination outputs
```

## Pasos para configurar Jest con Typescript, en Node


#### 1. Instalaciones de desarrollo (super test es util para probar Express)
```
npm install -D jest @types/jest ts-jest supertest
```


#### 2.- Crear archivo de configuracion de Jest

```
npx jest --init
```

```txt
The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … no

✏️  Modified /package.json

📝  Configuration file created at /jest.config.ts
```

#### 3.- En el archivo jest.config.js configurar


```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before
// setupFiles: ['dotenv/config']
```


#### 4.- Crear scripts en el package.json

```json

"test": "jest",
"watch": "jest --watch"
"coverage": "jest --coverage"

```

