# ClimaUp

![Logo de ClimaUp](https://firebasestorage.googleapis.com/v0/b/skyscan-d7ce5.appspot.com/o/logo.png?alt=media&token=dad8498f-8d45-4735-820a-d8daa7a37616)

ClimaUp es una aplicación que te permite consultar el clima de una ciudad elegida de manera rápida y sencilla. 

## Características

- Consulta el clima actual de las ciudades propuestas en el selector.
- Obtén información detallada del clima, como la temperatura, humedad, velocidad del viento, y más.
- Interfaz intuitiva y fácil de usar.
- Datos precisos y actualizados proporcionados por fuentes confiables.

## Herramientas usadas 
- React js y Bootstrap
- Api de clima: https://www.weatherapi.com/ donde se extrae el clima y el tiempo
- Base de datos: firestore donde estan las imagenes y los datos de las ciudades

## Descargar proyecto e instalar dependencias
- Una vez clonado el proyecto, se debera hacer npm i
- Luego de instalar dependencias hacer npm start y abrira el navegador en local:http://localhost:3000

## Cómo usar

1. Abre la aplicación ClimaUp(en caso de ser local:http://localhost:3000)
2. Seleccione la ciudad elegida.
3. Aparecera una tarjeta con la informacion de la ciudad junto con una imagen aluciva del clima.
4. ¡Disfruta de la información detallada del clima de la ciudad seleccionada!

## A tener en cuenta
- la api funciona pero a la hora de actualizar hay veces que no se nota porque no esta minuto a minuto actualizada
- se realizo despliegue en firebase (https://skyscan-d7ce5.firebaseapp.com/) pero no funciona la llamada a la api debido a unos problemas que tiene firebase y weatherapi
