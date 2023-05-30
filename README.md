# Login-System
Explicacion del proyecto:
El proyecto es para crear un sistema de inicio de sesión completo con Node.js y Vue.js. Usando Node.js, JWT (JSON Web Tokens) y MySQL para crear su propia RestAPI para autenticación de usuarios

La biblioteca UUID es una herramienta utilizada en el desarrollo de software para generar identificadores únicos de forma consistente. Un identificador UUID es un número de 128 bits que se representa normalmente como una cadena de caracteres alfanuméricos separados por guiones.

Razones por las que es una buena opción usar UUID en lugar de un id autonumérico:

1. Universalmente único: Los identificadores UUID son diseñados para ser únicos en todo el mundo, lo que significa que hay una probabilidad muy baja de generar dos identificadores iguales. Esto es especialmente útil cuando se trabaja en sistemas distribuidos o en entornos donde múltiples fuentes pueden generar identificadores.

2. Independiente del origen: Los identificadores UUID no dependen de una fuente centralizada para su generación, como una base de datos o un servidor. Pueden ser generados localmente en cualquier dispositivo o plataforma, lo que facilita su uso en entornos descentralizados o en dispositivos que operan de forma independiente.

3. No secuenciales: A diferencia de los id autonuméricos que suelen ser secuenciales, los identificadores UUID se generan utilizando algoritmos que generan valores pseudoaleatorios. Esto evita la posibilidad de adivinar o inferir otros identificadores basándose en su valor secuencial.

4. Privacidad y seguridad: Al no seguir una secuencia predecible, los identificadores UUID proporcionan cierto nivel de privacidad y seguridad. No revelan información sobre el número de registros existentes o el orden de creación.

5. Escalabilidad: Los identificadores UUID pueden ser generados y utilizados en diferentes sistemas y bases de datos sin conflictos, lo que facilita la escalabilidad del sistema en entornos distribuidos o en crecimiento.
