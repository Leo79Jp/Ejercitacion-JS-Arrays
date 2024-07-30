// Actividad 14: Crear un array de números y encontrar todos los números pares.
const numeros = [43,64,77,23,12,75,53,24,1,37]
console.log(numeros);

const nrosPares = []
for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] % 2 === 0) {
    nrosPares.push(numeros[index])
  }
}
console.log(nrosPares)
