/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   console.log (Math.pow (num,2));
   return Math.pow (num,2);
}
elevarAlCuadrado(3)
function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   console.log (Math.pow (num,3));
   return Math.pow (num,3);
}
elevarAlCubo (2)
function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   console.log (Math.pow (num,exponent));
   return Math.pow (num,exponent);
}
elevar (2,3)
function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   console.log (Math.round (num));
   return Math.round (num);
}
redondearNumero(2.77)
function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   console.log (Math.ceil (num));
   return Math.ceil (num);
}
redondearHaciaArriba(0.33)
function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   console.log (Math.random ());
   return Math.random ();
}
numeroRandom ()
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
