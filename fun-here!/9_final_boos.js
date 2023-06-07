// Desafío: Lista de Compras

// Paso 1: Crea una función llamada 'agregarItem' que reciba dos parámetros: 'lista' (arreglo) y 'item' (objeto).
// La función debe agregar el objeto 'item' al final del arreglo 'lista' y retornar la nueva lista actualizada.
// Ejemplo de uso:
// const listaDeCompras = [];
// const nuevoItem = { nombre: 'Manzanas', cantidad: 5 };
// const listaActualizada = agregarItem(listaDeCompras, nuevoItem);
// console.log(listaActualizada); // Salida: [{ nombre: 'Manzanas', cantidad: 5 }]

// Paso 2: Crea una función llamada 'obtenerTotalItems' que reciba la 'lista' (arreglo) como parámetro.
// La función debe retornar la cantidad total de elementos en la lista.
// Ejemplo de uso:
// const listaDeCompras = [{ nombre: 'Manzanas', cantidad: 5 }, { nombre: 'Leche', cantidad: 2 }];
// const totalItems = obtenerTotalItems(listaDeCompras);
// console.log(totalItems); // Salida: 2

// Paso 3: Crea una función llamada 'encontrarItem' que reciba la 'lista' (arreglo) y el 'nombre' (string) como parámetros.
// La función debe buscar un objeto en la lista que coincida con el nombre dado y retornar ese objeto.
// Si no se encuentra ningún objeto con el nombre dado, la función debe retornar null.
// Ejemplo de uso:
// const listaDeCompras = [{ nombre: 'Manzanas', cantidad: 5 }, { nombre: 'Leche', cantidad: 2 }];
// const itemEncontrado = encontrarItem(listaDeCompras, 'Leche');
// console.log(itemEncontrado); // Salida: { nombre: 'Leche', cantidad: 2 }

// Paso 4: Crea una función llamada 'actualizarCantidad' que reciba la 'lista' (arreglo), el 'nombre' (string) y la 'cantidad' (number) como parámetros.
// La función debe buscar un objeto en la lista que coincida con el nombre dado y actualizar su cantidad con el valor dado.
// La función debe retornar la lista actualizada.
// Ejemplo de uso:
// const listaDeCompras = [{ nombre: 'Manzanas', cantidad: 5 }, { nombre: 'Leche', cantidad: 2 }];
// const listaActualizada = actualizarCantidad(listaDeCompras, 'Manzanas', 10);
// console.log(listaActualizada); // Salida: [{ nombre: 'Manzanas', cantidad: 10 }, { nombre: 'Leche', cantidad: 2 }]

// Paso 5: Crea una función llamada 'eliminarItem' que reciba la 'lista' (arreglo) y el 'nombre' (string) como parámetros.
// La función debe buscar un objeto en la lista que coincida con el nombre dado y eliminarlo de la lista.
// La función debe retornar la lista actualizada.
// Ejemplo de uso:
// const listaDeCompras = [{ nombre: 'Manzanas', cantidad: 5 }, { nombre: 'Leche', cantidad: 2 }];
// const listaActualizada = eliminarItem(listaDeCompras, 'Leche');
// console.log(listaActualizada); // Salida

