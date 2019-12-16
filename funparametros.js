////EJERCICIO 1////

const mostrarNombreCompleto = (nombre, apellido) => {
    console.log(nombre + " " + apellido)
}

mostrarNombreCompleto("Milena", "Cofnas");

////EJERCICIO 2////

const sonIguales = (parametro1, parametro2) => {
    if (parametro1 === parametro2) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
sonIguales ("hola", "chau")
sonIguales ("hola", "hola")

////EJERCICIO 3////

const agregarNumero = (array, numero) => {
    array.push(numero)
    console.log(array)
}

agregarNumero([0, 1, 2], 3)

//EJERCICIO 4////

const comprobarPosicion = (posicion1, posicion2) => {
    console.log(posicion1.includes(posicion2))
}

comprobarPosicion(["Milena", "Viviana", "Marta"], "Jose")
comprobarPosicion(["Camila", "Juan", "Facundo"], "Juan")

//---OTRA FORMA DE HACER EJERCICI0 4---//

const comprobarPosicion = (arr, str) => {

    let datoEncontrado = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            datoEncontrado = true 
        }
        console.log(datoEncontrado)
    }
}
comprobarPosicion(["Milena", "Viviana", "Marta"], "Jose")
comprobarPosicion(["Camila", "Juan", "Facundo"], "Juan")


////EJERCICIO 5////

const calcularPromedio = (array) => {

    let sumaParcial = 0
    for (let i = 0; i < array.length; i++) {
        sumaParcial += array[i]
    }
    console.log(sumaParcial / array.length) ///NOTA: IMPO PONER EL CONSOLE.LOG FUERA DEL FOR!!!///
}

let arr = [1, 2, 3, 4, 5]
calcularPromedio(arr)

////---EJERCICIOS CON RETURN 1 y 2---////

const obtenerNombre = () => {
    return "Milena"
}
console.log("Mi nombre es:", obtenerNombre())



const obtenerSaludo = () => {
    let nombre = obtenerNombre()
    return (`Hola ${nombre}`)
}

console.log(obtenerSaludo())

////EJERCICIO 3 , 4, 5////

const obtenerResto = (a, b) => a % b

console.log(obtenerResto(4, 2))

const esPar = num => {
    if (obtenerResto(num, 2) === 0) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(esPar(101))

//// es igual a hacer esto: const esPar = num => obtenerResto (num, 2) === 0

const listaDeNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32]

const encontrarImpares = arr => {
    let numerosImpares = [];
    for (let i = 0; i < arr.length; i++) {
        if (!esPar(arr[i])) {
            numerosImpares.push(arr[i])
        }
    }
    return numerosImpares;
}

console.log(encontrarImpares(listaDeNumeros))