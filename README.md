# Prueba técnica Syntonize

## Consideraciones

Dado que decidí usar react lo más vanilla posible, tardé un poco más por la configuración de los componentes y el hecho de hacerlos desde cero.(Me corre prisa porque me voy de viaje mañana en la mañana) La lista paginada hubiera sido desarrollada mucho más rápido como una tabla con TanStack, React Prime tables o Datagrid de MUI o como una lista con MUI List y MUI Pagination por ejemplo. Los inputs, toaster y botones de la misma manera ya que simplifican mucho la vida para proyectos de corta duración. Tomé la libertad de utilizar Tailwind para acelerar la creación de estilos dado que con CSS vanilla se pone tedioso.

## Stacks utilizado

### React

React 18.3.1

### Vite

Para mayor velocidad de carga de React

### TailwindCSS

Más pragmatismo a la hora de poner estilos

### Arquitectura

Me he basado en el modelo vista controlador, donde básicamente trato de hacer el componente del UI lo más sencillo posible y la lógica la manejo a parte en controladores para que la API devuelva la respuesta y sea pintada en el front.

Las funcionalidades de la aplicación:
El usuario se puede registrar desde cero
El usuario puede iniciar sesión si ya tiene cuenta creada
Si el usuario está autenticado, puede acceder a la página principal. En caso contrario, muestra un mensaje y redirecciona a la página del login

/prueba-syntonize
    /src
        /components Carpeta de componentes. En su raíz van los componentes de presentación como el Home, Login y Signup
            Home.jsx
            Login.jsx
            SignUp.jsx
            RecoverPassword.jsx
            /controllers En controladores se lleva la lógica de los componentes para que se comuniquen con la base de datos y traten los datos
                Home.controller.js
                Login.controller.js
                Pagination.controller.js
                RecoverPassword.controller.js
                SignUp.controller.js
            /services
                PrivateRoute.jsx Este es un componente especial que no permite el renderizado de la página principal si no se está autenticado
            /uiComponents Aquí van los componentes comunes reutilizables que se pueden usar en toda la aplicación. Botones, textfields y tablas
                ButtonAction.jsx
                Layout.jsx El layout de la aplicación para no tener que repetir estilos
                ListElements.jsx
                ListPaginated.jsx
                Modal.jsx
                Pagination.jsx
                TextfieldInput.jsx
                Toaster.jsx El toaster de notificación cuando se realiza una acción
        /context
            AuthContext.jsx El contexto de autenticación de usuario
            NotificationContext.jsx El contexto para mostrar o no la notificación en cualquier parte de la aplicación
        App.jsx De aquí manejamos las rutas en toda la app
        firebase.jsx Nuestra configuración de firebase
        main.jsx Aquí coloco los contextos de la aplicación
    .env.local la información privada y por seguridad la guardo en un entorno local para no subirlo al repo

#### Página de Login

Donde se inicia sesión si se tiene un usuario registrado, de dar una respuesta correcta la base de datos, redirecciona a la página principal. De lo contrario se mantiene y notifica del fallo. También, puede redireccionar a la página de registro en caso de querer crear un usuario nuevo

#### Página de Registro

Permite generar usuarios nuevos y tiene validaciones para no dejar campos vacíos o repetir usuarios. Si el usuario se crea correctamente, redirecciona a pantalla de login.
En caso de querer redirigirse a la página de login, pueden hacerlo directamente.

#### Página de Inicio

Hace una petición a una api para mostrar una lista paginada con lazy loading de n elementos.

#### Página de recuperar contraseña

Permite al usuario recuperar contraseña a través de su correo electrónico.

