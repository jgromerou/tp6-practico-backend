# Ejercicio 14 del TP1: Blog de recetas de cocinas - React ![React Icon](./src/assets/react.svg)

## Descripción

Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una
página, desde otra pagina debo poder agregar, modificar o quitar las recetas y
estas deben estar almacenadas en el localstorage o json-server.

## Link Versión en Producción

[Netlify](https://ej14-react-apprecetas.netlify.app/)

## Tecnologias / Herramientas 🛠

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.w3schools.com/js/)
- [Vite](https://vitejs.dev/)
- [React](https://es.legacy.reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Markdown](https://markdown.es/)

## Para entorno **Local - Desarrollo**:

creamos el archivo .env y agregamos las siguientes variables de entorno

- VITE_API_USUARIOS=http://localhost:3004/usuarios
- VITE_API_RECETAS=http://localhost:3004/recetas

## Para entorno de **Producción**:

se agrega las siguienteas variables de entorno

- VITE_API_USUARIOS=https://my-json-server.typicode.com/jgromerou/ej14-practico1-react/usuarios
- VITE_API_RECETAS=https://my-json-server.typicode.com/jgromerou/ej14-practico1-react/recetas

## Comando para ejecutar json-server local

json-server --watch db.json --port 3004

## Pasos para clonar y ejecutar la Aplicación 🖥

Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

1.  **Clona el repositorio:** En tu línea de comandos, ejecuta el siguiente comando para clonar el repositorio:

    ```
    git clone https://github.com/jgromerou/ej14-practico1-react.git
    ```

2.  **Accede al directorio:** Ve al directorio de la aplicación clonada:

    ```
    cd <nombre de la carpeta>
    ```

3.  **Instala las dependencias:** Ejecuta el siguiente comando para instalar las dependencias de la aplicación:

    ```
    npm install
    ```

4.  **Inicia la aplicación:** Utiliza el siguiente comando para iniciar la aplicación en tu entorno local:

    ```
    npm start
    ```

5.  **Accede a la aplicación:** Abre tu navegador web y visita la siguiente URL: _http://localhost:5173_. La aplicación debería cargarse y estar lista para usar.

## Autores

1. Emilia Belén Ramos [github](https://github.com/emiliabelen)
2. Juan Gerardo Romero Uro [github](https://github.com/jgromerou)
