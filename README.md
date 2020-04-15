# Node js Detector de Mutaciones Geneticas 🧬


- ### objetivo:
Se requirio el desarrollo un proyecto que detecte si una persona tiene diferencias genéticas basándose en su secuencia de ADN. Para eso es necesario crear un programa con un método o función con la siguiente firma (En JavaScript/Node JS):

boolean hasMutation( String[] dna ); // Ejemplo Java

Debe recibir como parámetro un array de Strings que representan cada fila de una tabla
de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las
cuales representa cada base nitrogenada del ADN.


### Sin mutación

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | T | T |
| A | G | A | C | G | G |
| G | C | G | T | C | A |
| T | C | A | C | T | G |

### Con mutación

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |

Sabrás si existe una mutación si se encuentra más de una secuencia de cuatro letras
iguales, ya sea horizontal, vertical o en diagonal.
Ejemplo (Caso mutación):

##### String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};

En este caso el llamado a la función hasMutation(dna) devuelve “true”.
Desarrolla el algoritmo de la manera más eficiente posible.

## Desafío:

Nivel 1:
Programa (en cualquier lenguaje de programación) que cumpla con el método pedido solicitado.

## 🧪 Para correr el programa ejecutar el siguiente comando:

```sh
$ node index.js
```


