// Actividad 12: Crear un array de nombres y transformar cada nombre a mayúsculas.
const nombres= ['Juan', 'Pedro', 'Carlos', 'Miguel', 'Alberto']
console.log(nombres);

for (let index = 0; index < nombres.length; index++) {
  let nombreMayusculas = nombres[index].toUpperCase();
  nombres[index] = nombreMayusculas
}
console.log(nombres);

