# 1. Descripción general:

Esta página web esta creada para poder consultar tanto la **clasificación**, como los **resultados** de los partidos de la liga española.
También cuenta con enlaces directos a resultados de la segunda división, el mercado de fichajes y los máximos goleadores de LaLiga.

Enlace :
https://laligabootcamp2.netlify.app/

# 2. Funcionalidad:
*	Consultar resultados de los partidos y comprobar cuales y cuando son los próximos partidos.
*	Consultar clasificación actualizada de los equipos participantes.
*	Filtrar partidos por equipo.
*	Filtrar por jornada.
*	Filtrar por equipo local o visitante.
*	Filtrar resultados.
*	Filtrado por fecha y hora.

# 3. Tecnologías empleadas:

* **HTML:**  Para crear el esqueleto de la página.
* **CSS:** Con este lenguaje hemos dado estilo y formato a la web.
* **Bootstrap:** Para el diseño de la interfaz y dar adaptabilidad desde cualquier dispositivo.
* **JavaScript:** Con el creamos la funcionalidad y dinamismo necesario en la página.
* **Postman:** Para la fase inicial de la web, descargando toda la información hasta llegar a la sincronización mediante fetch, donde tomamos los datos directamente sin necesidad de tenerlos en local.
* **Git** y **GitHub:** En el que tenemos un repositorio, tanto para control de versiones como para tenerlo accesible desde cualquier emplazamiento.

# 4. Descripción técnica:

Tenemos dos funciones básicas y concretas.
Las funciones básicas son: 

*	```getDataFetch ()``` : Con la que conectamos con el servidor para recibir la información y poder así tratarla.
*	```tablaClas ()``` y ```tablaPartidos ()```: Estas funciones son las encargadas de generar las tablas. Estas funciones en sus siguientes pueden ser extrapolables a otras ligas.

Funciones concretas:

*	```datosFiltrados ()``` : Función encargada de crear el filtro por equipo, buscándolo tanto como local como visitante y devolvernos la tabla con dicho equipo filtrado descartando el resto.
*	```datosJornada () ```: Realiza el filtro por jornada, dando la posibilidad de mostrar tan solo una jornada concreta.
*	```datosLocal () ```: Muestra los partidos en los que un equipo concreto juega en casa.
*	```datosVisit () ```:  Devuelve los partidos en los que el equipo buscado juega como visitante.
*	```datosResult () ```: Esta función realiza el filtrado por resultados pudiendo consultar algún resultado concreto, devolviendo todos los partidos que hayan acabado con ese resultado.
*	```datosFecha () ```: Filtrado por fecha y hora del partido, en caso de coincidir muestra todos los partidos que comparten los datos buscados.

# 5. Versiones:

**Version 1.0 (13/11/2021)**

# 6. To Do:

1. Aumentar el número de ligas disponibles.
2. Resaltar en rojo los equipos que descienden.
3. Resaltar los equipos que jugaran la Champions.
4. Resaltar equipos que jugaran la Europa League.
5. Resaltar equipo que jugara la Conference.


