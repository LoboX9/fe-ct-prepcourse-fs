/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   console.log (string);
   return string;
}
devolverString ("Henry");
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código: 
   console.log (x + y);
   return x + y;
}
suma (3, 5);
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log (x - y);
   return x - y;
}
resta (5, 4);
function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   console.log (x / y);
   return x / y;
}
divide (21, 7);
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   console.log (x * y);
   return x * y;
}
multiplica (6, 8);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   console.log (x % y);
   return x % y;
}
obtenerResto (21, 5);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
