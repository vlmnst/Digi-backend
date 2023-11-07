# ¡Bienvenidos!

_Dejaré unas simples instrucciones acerca de como hacer correr la app_

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Clona el repositorio para abrirlo en tu editor de código.
```

```
Verifica tener andando la version 18 o más de node. Si no, es posible que te encuentres con algunos errores.
```

```
Vas a observar que tienes un archivo ".env.template", a partir de éste debes generar un archivo ".env" 
en la raiz del directorio donde completarás con los datos correspondientes para las tres conexiones 
(el puerto, la base de datos y la api externa.)
```

```
Y por ultimo pero no menos importante, una de las variables de entorno a indicar es el intervalo de cron
Te dejo unas opciones para que se ejecute:
 -cada 5 minutos: "*/5 * * * *"
 -todos los días a las 2 de la tarde: "0 14 * * *"
 -una vez a la semana: 0 0 * * 1
```

### Instalación 🔧

_Una vez en tu editor de texto abres una terminal y ejecutas_

```
npm install
```

## Ejecutando el programa ⚙️

_Para poner en funcionamiento debes ingresar en la terminal_

```
npm start
```

### Endpoints 🔩

_Una vez corriendo la app podrás ingresar a los siguientes endopoints:_
```
Para cualquiera de estos endopoints se puede agregar una query para filtrar

/api/people
/api/people?name=

/api/planets
/api/planets?name=

/api/starship
/api/starship?name=

/api/films
/api/films?title=

```

## Gracias por llegar hasta aquí 🎁

* Cualquier cosa no duden en consultarme
