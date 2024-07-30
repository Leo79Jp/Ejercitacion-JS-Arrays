// Actividad 11: Crear un array de números y filtrar los números mayores a 10.
const numeros = [2,23,5,8,12,16,9,18,1,37]
const superanPromedio = []
for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] > 10) {
    superanPromedio.push(numeros[index])
  }
}
console.log(superanPromedio)
