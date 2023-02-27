# Curso de Programación Backend - Proyecto Final
Este proyecto implementa el backend (principalmente) y frontend de un sitio web de un supermercado. Cuenta con productos que pueden agregarse o eliminarse de un carrito de compras y luego así simular la confirmación de una compra y almacenar la orden generada. Para acceder a las funcionalidad del sitio web, los usuarios deben estar registrados. Usuarios con permisos de administrador podrán modificar, eliminar o agregar productos.
Adicionalmente, el sitio incorpora un canal de chat online haciendo uso de SocketIO. Permite chatear en tiempo real con el Servicio al Consumidor del sitio web. Para ello, es necesario que al sitio web esté logueado (además del usuario), el administrador. El administrador será el encargado de responder mensajes específicos a cada usuario, dirigiendo los mensajes en base al email del usuario (ver credenciales de administrador más abajo).
La funcionalidad del servidor puede ser probada mediante una app desarrollada para el front-end, ingresando a la ruta `localhost:8080` en un navegador. Esta app realiza CRUDs para las distintas funcionalidades requeridas del sitio.
También se cuenta con una colección postman en el directorio raíz, `directorio_raiz/backend/postman/` para testear todas las rutas implementadas en el servidor.
El servidor genera mensajes en consola con cada solicitud recibida para control del funcionamiento, permitiendo una trazabilidad de los eventos. Logs imporantes son almacenados en archivos en `directorio_raiz/backend/logs/`.
La persitencia de datos es en Mongo Atlas por default. Pero también puede utilizarse persistencia en memoria.

## Ejecutar servidor
Luego de las configuraciones correspondientes, situarse en la raíz del proyecto y ejecutar:
```
npm start
```
Luego ingresar a la siguiente ruta para probar las funcionalidades de la app:
```
localhost:8080
```

## Inicializar DB
### Persistencia: `Mongo Atlas`
En el caso de utiliar Mongo Atlas como persistencia, se cuenta la opción de inicializar la DB con 10 productos y ningún carrito de compras ni órdenes creadas. También se crean dos usuarios, uno con permisos de administrador y otro aleatorio.
```
1. USUARIO ADMINISTRADOR
email: admin@gmail.com
pass: admin

2. USUARIO ALEATORIO
email: marcosa@gmail.com
pass: marcosa
```
Situarse en la raíz del proyecto y ejecutar:
```
npm run initdb
```
### Persistencia: `Memoria`
La app se ejecuta automáticamente con valores iniciales, no se requiere configuración.

## Configuración

1. Crear un archivo en la raíz del proyecto, con el nombre `.env` y el siguiente contenido:
```
PERSISTANCE='mongodb'
PORT=8080
MONGODB_URI='mongodb+srv://developer:x6JYg18ip3N7gsky@coderhouse.wm4ogqy.mongodb.net/ecommerce'
NODEMAILER_PASS='exrkfzjrwjunkbgf'
SESSION_TIMEOUT='300000'
ADMIN_EMAIL='<choose>'
```
Modificar contenido a elección:
* PERSISTANCE: persistencia de datos elegida. Valores posibles 'mongodb' o 'memory'.
* PORT: puerto de esucha en el servidor.
* SESSION_TIMEOUT: tiempo para sesión de usuario activa en milisegundos. Default: 5 minutos.
* ADMIN_EMAIL: reemplazar <choose> según el correo a donde se quiera recibir una notificación al momento de darse de alta un nuevo usuario y/o confirmarse una compra.
2. Instalar las dependencias
```
npm install
```
## Notas
---
1. El administrador puede elegir a que usuario enviarle un mensajes, ingresando el correo del mismo en el campo correspondiente. El usuario siempre enviará mensajes al administrador, dirigido con el correo `admin@gmail.com`. Se logra enviar mensajes dirigidos a usuarios específicos dado que cada socketID se corresponde a un email.
2. El chat en línea se encuentra activo en todo momento haciendo uso de socket.io. Sin embargo, el administrador debe estar logueado al momento de que el usuario envíe un mensaje. Caso contrario, nunca lo recibirá.

## Herramientas de trabajo
---
#### IDE
* Visual Studio Code
* Postman

### Frameworks y tecnologías
* NodeJS
* Express
* Dotenv
* SocketIO
* Mongo Atlas
* Mongoose
* Nodemailer
* Passport
* Bcrypt
* Winston
* Uuid