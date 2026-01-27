## Speak

Explicación de Propuesta :
Speak es una red-social, la cual cuenta con  funcionalidades como:
- Hacer login
- Crear publicaciones
- Ver publicaciones
- Listar aplicaciones



Un usuario puede tener  0 a muchas publicaciones, pero una publicación solo puede tener asociado un usuario publicador.

A continuación se ve un diagrama con el entendimiento del problema:

<img width="441" height="291" alt="pdiagrama_relaciones" src="https://github.com/user-attachments/assets/d6fcd556-4e28-4078-8f38-91518f8666cf" />



De acuerdo con las necesidades especificadas la aplicación debe tener una arquitectura de microservicios. En base a esto se propone tener dos servicios: Uno dedicado a la autenticación e información del usuario y otro dedicado al manejo de las publicaciones. Ambos servicios van a usar la misma base de datos. A continuación se puede ver más detalle como se realizaría el despliegue de los diferentes componentes del sistema:

<img width="1381" height="661" alt="pdiagrama_despliegue" src="https://github.com/user-attachments/assets/5cd993da-00b2-47b3-8c76-f6b4c00a95aa" />




En el diagrama se puede ver de izquierda a derecha:  
- Un frontend que va a ser desplegado en un contenedor  y desarrollado con React
- un contenedor con Kong API gateway para el manejo unificado de peticiones al back desde el front. 
- Tenemos dos contenedores para los dos microservicios, Authentication
-  La base de datos desplegada en docker con un volumen adjunto para permitir la persistencia de la información.

Las consultas de usuario van a realizarse con consultas entre microservicios se realizan con HTTP.

