//tipos de datos primitivos

let nombre = 'daniel';  //declaramos el inicio de la variable nombre
let edad = 20;
let mayorEdad = true;


console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);



// datos compuestos o complejos

let frutas = ['pera', 'manzana', 'Sandia'];
console.log(typeof frutas)//sera de tipo objeto arreglo

let auto={
    marca: 'ferrari',
    modelo: 2024,
    color: 'rojo',
    placa: 'SYX-001',
    tipo: 'deportivo',
    unicoDueno: true
}
console.log(typeof auto);

//Concatenando variables en mensaje

console.log('hola ' + nombre + ' tienes ' + edad + ' años ');

//Estructuras condicionales

console.log('-------------------------------------------------------')
let calificacion = 100;

if (calificacion>= 90){
    console.log('Good Job!! ' + nombre + ' su calificacion es de ' + calificacion)
}
else if(calificacion>= 70){
    console.log('Aprobo en el limite ' + nombre + ' Su nota fue de ' + calificacion)
}
else{
    console.log('Reprobo ' + nombre + ' su nota fue de ' + calificacion)
}



//switch case

let dia = 'platinum';
switch (dia) {
    case 'platinum':
        console.log('mejor plan, disfrute');
        break;
    case 'gold':
        console.log('buen plan pero no es el mejor');
        break;
    case 'silver':
        console.log('plan normal, cerca de los pobres');
        break;
    case 'copper':
        console.log('pobre pero con plan');
    default:
        console.log('pobre')
        break;
}

//Estructuras de bucles de bucles jaja
let numero = 1
while(numero <= 10){
    console.log('Ahora el numero es: ' + numero);
    numero + numero;
}

//
//let i = 10

for(let i = 100; i >= 0; i = i - 10){
    console.log('Ahora el numero es de ' + i)
}

