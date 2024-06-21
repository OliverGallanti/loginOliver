# Prueba técnica Syntonize

## Stacks utilizado

### React

React 18.3.1

### Vite

Para mayor velocidad de carga de React

### TailwindCSS

Más pragmatismo a la hora de poner estilos

### Arquitectura

Me he basado en el modelo vista controlador, donde básicamente trato de hacer el componente del UI lo más sencillo posible
y la lógica la manejo a parte en controladores para que la API devuelva la respuesta y sea pintada en el front.

Las funcionalidades de la aplicación:
El usuario se puede registrar desde cero
El usuario puede iniciar sesión si ya tiene cuenta creada
Si el usuario está autenticado, puede acceder a la página principal. En caso contrario, muestra un mensaje y redirecciona a la página del login

Los componentes de presentación son:

#### Página de Login

Donde se inicia sesión si se tiene un usuario registrado, de dar una respuesta correcta la base de datos, redirecciona a la página principal. De lo contrario se mantiene y
notifica del fallo. También, puede redireccionar a la página de registro en caso de querer crear un usuario nuevo

#### Página de Registro

Permite generar usuarios nuevos y tiene validaciones para no dejar campos vacíos o repetir usuarios. Si el usuario se crea correctamente, redirecciona a pantalla de login.
En caso de querer redirigirse a la página de login, pueden hacerlo directamente.

#### Página de Inicio

#### Página de Redireccionamiento
