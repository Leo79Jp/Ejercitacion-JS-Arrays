// Actividad 13: Crear un array de números y calcular la suma de todos los elementos.
const numeros = [43,64,77,23,12,75,53,24,1,37]
console.log(numeros);

let suma = 0
for (let index = 0; index < numeros.length; index++) {
  suma += numeros[index]
}
console.log(suma)
