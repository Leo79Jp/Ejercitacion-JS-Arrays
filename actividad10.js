// Actividad 10: Ordenar un array de números de mayor a menor y mostrar el array actualizado.
const numeros = [43,64,77,23,12,75,53,24,1,37]
console.log(numeros);
const numerosOrdenados = [...numeros].sort((a, b) => a - b)
console.log(numerosOrdenados.reverse())
