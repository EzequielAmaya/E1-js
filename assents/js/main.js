// ejercicio-1
let num = 6
function paridad(num) {
    if (num % 2 === 0) {
    console.log(" el número " + num + " es par ");
    } else {
    console.log(" el número " + num + " es impar ");
    }
}
paridad(num);

console.log(" ");

//ejercicio-2 
let num1 = 10;
let num2 = 3;
function comparacion(num1, num2) {
    if (num1 > num2) {
        console.log(" El número " + num1 + " es mayor a " + num2);
    }
    if (num2 > num1) {
        console.log(" El número " + num2 + " es mayor a " + num1);
    }
    if (num1 == num2) {
        console.log(" Los números son iguales ");
    }
}
comparacion(num1, num2);

console.log(" ");


//ejercicio-3
let digito = 28;
function multiplo5(digito) {
    if (digito > 0 && digito % 5 == 0) {
        console.log("Si, el número " + digito + " es múltiplo de 5");
    } else {
        console.log("No, el número " + digito + " no es múltiplo de 5");
    }
}
multiplo5(digito);

console.log(" ");

//ejercicio-4
Inicia = 0;
Finaliza = 100;
function ciclos(Inicia, Finaliza) {
    while (Inicia < Finaliza) {
        console.log(Inicia);
        Inicia++;
    }
}

ciclos(Inicia, Finaliza);

console.log(" ");

//ejercicio-5
contador1 = 1;
palabra = "Disturbed";
nr = 5;
function pyn(palabra, nr, contador1) {
    while (contador1 < nr) {
        console.log(palabra);
        contador1++;
    }
}
pyn(palabra, nr, contador1);

console.log(" ");

//ejercicio-6
let Metal = ["Dickinson", "Draiman", "Lindemann"];
function array(Metal) {
    console.log(Metal);
}
array(Metal);

console.log(" ");

//ejercicio-7
function ejercicio7(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (i !== 4) {
            console.log(arreglo[i]);
        }
    }
}

const arreglo = [0, 1, 2, 3, 4, 5,];
ejercicio7(arreglo);

console.log(" ");

//ejrcicio-8
function multiplicado(array1, numero) {
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i] * numero);
    }
}

const array1 = [20, 18, 70, 32, 53];
const numero = 5;
multiplicado(array1, numero);

