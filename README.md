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