# DENO

## Comandos básicos

|Comando|Descripción
|--|--|
|deno run <archivo.ts>|Ejecuta un script de Deno.|
|deno run --allow-net <archivo.ts>|Ejecuta un script con permiso para acceder a la red|
|deno run --allow-read <archivo.ts>|Ejecuta un scrupt con permiso de leer archivos en el sistema|
|deno run --allow-write <archivo.ts>|Ejecuta un script con permiso para escribir en el sistema de archivos|
|deno run --allow-env <archivo.ts>|Ejecuta un script con permisos para acceder a variables de entorno|
|deno run --allow-all|Ejecuta un script con todos los permisos|

## Administración de módulos
|Comando|Descripción|
|--|--|
|deno cache <archivo.ts>|Almacena en caché los módulos importados para evitar descarga repetidas|
|deno install <script_url>|Instala un script como comando ejecutable globalmente|
|deno info <archivo.ts>|Muestra información sibre un archivo o módulo|
|deno upgrade|Actualiza Deno a la última versión disponible|

## Herramientas de desarrollo
|||
|--|--|
|deno fmt|Formatea el código del proyecto según las reglas estándar|
|deno lint|Analiza el código en busca de posibles problemas o malas prácticas|
|deno test|Ejecuta pruebas en los archivos que contienen funciones de prueba|
|deno bundle <archivo.ts>|Empaqueta el archivo y sus dependencias en un solo archivo JavaScript|
|deno compile <archivo.ts>|Compila un script a un binario ejecutable|


