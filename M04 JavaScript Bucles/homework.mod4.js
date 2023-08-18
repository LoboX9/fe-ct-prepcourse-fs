/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x>y){console.log(x);return x;
   } else if (y>x){console.log(y);return y;
   } else if (x===y){console.log(x||y);return x||y;} 
}
obtenerMayor(6,8)
function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18){
      console.log ("Allowed"); return "Allowed"
   } else console.log ("Not allowed"); return "Not allowed";
}
mayoriaDeEdad (16)
function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1){
      console.log("Online"); return "Online";
   } else if (status === 2){ console.log ("Away"); return "Away"
   } else console.log ("Offline"); return "Offline";
}
conection(3)

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if (idioma === "aleman"){console.log("Guten Tag!"); return "Guten Tag!";
} else if (idioma === "mandarin") { console.log ("Ni Hao!"); return "Ni Hao!"
} else if (idioma === "ingles"){console.log("Hello!");return "Hello!"
} else if (idioma !=="aleman" || idioma !=="mandarin" || idioma !=="ingles" || idioma ==="undefined"){console.log("Hola!");return "Hola!"}
}
saludo("mandarin")
function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   if (color=== "blue" || color=== "red" || color=== "green" || color=== "orange"){
      console.log("This is " + color); return "This is " + color;
   } else {console.log ("Color not found"); return "Color not found";}
}
colors("purple")
function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num=== 10 || num=== 5){console.log(true);return true;} else {console.log(false); return false;}
}
esDiezOCinco (1)
function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num < 50 && num > 20){console.log(true); return true;} else {console.log (false); return false;}
}
 estaEnRango (35)
function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (Number.isInteger(num)){console.log(true); return true;} else {console.log(false); return false}
}
esEntero(0.69)
function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 3===0 && num % 5===0){console.log("fizzbuzz"); return "fizzbuzz";}
 else if (num % 5=== 0){console.log("buzz"); return "buzz";}
if (num % 3===0){console.log("fizz"); return "fizz";} else {console.log(false); return false;}
}
fizzBuzz(9)
function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num1>num2 && num1>num3 && num1>0){console.log("Numero 1 es mayor y positivo"); return "Numero 1 es mayor y positivo";
}else if (num1<0 || num2<0 || num3<0){console.log("Hay negativos"); return "Hay negativos";
} else if (num3>num1 && num3>num2){console.log(num3+1);return num3+1;
} else if (num1===0 && num2===0 && num3===0){console.log("Error"); return "Error";
} else {console.log(false); return false;}
}
operadoresLogicos (0, 0, 0)

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num<=1){console.log(false); return false;}
   for (var i=2; i<num; i++){
      if (num%2===0){console.log(false);return false;}
   } console.log(true); return true;
}
esPrimo(18)
function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor===true){console.log("Soy verdadero"); return "Soy verdadero";} else {console.log ("Soy falso"); return "Soy falso";}
}
esVerdadero(false)
function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   var numString = num.toString (); if (numString.length=== 3){console.log(true); return true;} else {console.log (false); return false;}
} 
tieneTresDigitos(42)
function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let contador = 0
   do {num += 5; contador++} while (contador < 8) {console.log (num); return num;} 
}
doWhile(1)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
