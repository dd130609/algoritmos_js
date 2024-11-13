
function suma(){
    let A = 0
    let B = 0
    let suma = 0

    A = parseInt(prompt ('ingresa el primer valor'))
    B = parseInt(prompt('ingresa el segundo valor'))

    suma = A + B 

    alert('La suma de los numeros dados es: ' + suma)
}

//2. algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario
function opBasicas(){  
    let A = 0
    let B = 0
    let multiplicacion = 0
    let division = 0
    let suma = 0
    let resta = 0

    A = parseInt(prompt ('ingresa el primer valor'))
    B = parseInt(prompt('ingresa el segundo valor'))

    //realizar operacion
    resta = A - B
    multiplicacion = A * B
    division = A / B
    suma = A + B

    //mostrar resultado


    alert('La resta de los numeros es de: ' + resta)

    alert('La multiplicacion de los numeros es: ' + multiplicacion)

    alert('La division es de: ' + division)

    alert('La suma es de: ' + suma)
}


//3. realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 
function Ncuadrado(){

    let A = 0
    let cuadrado = 0

    A = parseInt(prompt ('ingresa el numero al que quiera obtener su cuadrado'))

    cuadrado = A ** 2

    alert('El resultado es: ' + cuadrado)

}

//4. realizar un algoritmo que determine el area de un triangulo a partir de la base y altura ingresadas por el usuario
function triangulo(){
     
    let base = 0
    let altura = 0
    let area = 0

    base = parseInt(prompt ('ingresa la base del triangulo'))
    altura = parseInt(prompt(' ingresa la altura del triangulo'))

    area = (base * altura) / 2

    alert('el area del triangulo es : ' + area)
}

//5. realizar un algoritmo que determine los milimetros, centimetros, kilometros y metros de un valor dado en pulgadas
function distancia(){

    let pul = 0
    let km = 0
    let cm = 0
    let mm = 0
    let m = 0

    pul = parseInt(prompt ('ingresa un valor en pulgadas: '))

    km = pul * 0.0000254
    cm = pul * 2.54
    mm = pul * 25.4
    m = pul * 0.0254

    alert('el resultado en kilometros es: ' + km)
    alert('el resultado en centimetros es: ' + cm)
    alert('el resultado en milimetros es: ' + mm)
    alert('el resultado en metros es: ' + m)

}

//6. algoritmo que determine si un numero ingresado por el usuario es par o impar 

function paroimpar(){
    let a = 0
    let prueba = 0

    a = parseInt(prompt ('ingrese un numero'))
    prueba = a % 2

    if (prueba == 0) {
        alert('su numero es par')
    } else{
        alert('su numero es impar')
    }
}

//7. algoritmo que determine el numero mayor de dos numeros ingresados por el usuario 
function Nmayor(){
    let a = 0
    let b = 0

    a = parseInt(prompt ('ingresa el primer numero'))
    b = parseInt(prompt('ingresa el segundo numero'))

    if(a > b){
        alert('el numero ' + a + ' es mayor a ' + b)
    } 
    else if (a == b){
        alert('el numero ' + a + ' es igual a ' + b)
    }
    else{
        alert('el numero ' + b + ' es mayor a ' + a)
    }

}



//8. realizar un algoritmo que determine el numero menor de tres numeros ingresados por el usuario
function Nmenor(){
    let a = 0
    let b = 0
    let c = 0

    a = parseInt(prompt ('ingresa el primer numero'))
    b = parseInt(prompt('ingresa el segundo numero'))
    c = parseInt(prompt ('ingresa el tercer numero'))

    if((a < c) && (a < b) ){
        alert('el numero ' + a + ' es menor a ' + b + ' y a ' + c)
    }
    else if ((b < c) && (b < a)){
        alert('el numero ' + b + ' es menor a ' + a + ' y a ' + c)
    }
    else if ((a == b) && (a == c) && (c == b)){
        alert('el numero ' + a + ' es igual a ' + b + ' e igual a ' + c)
    }
    else{
        alert('el numero ' + c + ' es menor a ' + b + ' y a ' + a)
    }
}


//9. el colegio abc requiere un sistema que capture el nombre del estudiante, materia y 7 calificaciones entre el 1 y 10, con esta informacion determinar si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.1
function estudiante(){
 let nombre

 nombre = prompt('ingrese su nombre')

 let materia 

 materia = prompt('ingrese la materia')

 let promedio = 0

 let calificacion_1 = 0
 let calificacion_2 = 0
 let calificacion_3 = 0
 let calificacion_4 = 0
 let calificacion_5 = 0
 let calificacion_6 = 0
 let calificacion_7 = 0

 calificacion_1 = parseFloat(prompt('ingrese su primera clasificacion'))
 calificacion_2 = parseFloat(prompt('ingrese su segunda clasificacion'))
 calificacion_3 = parseFloat(prompt('ingrese su tercera clasificacion'))
 calificacion_4 = parseFloat(prompt('ingrese su cuarta clasificacion'))
 calificacion_5 = parseFloat(prompt('ingrese su quinta clasificacion'))
 calificacion_6 = parseFloat(prompt('ingrese su sexta clasificacion'))
 calificacion_7 = parseFloat(prompt('ingrese su septima clasificacion'))

 promedio =  (calificacion_1 + calificacion_2 + calificacion_3 + calificacion_4 + calificacion_5 + calificacion_6 + calificacion_7) / 7

 if (promedio >= 6.1){
    alert('estudiante ' + nombre + ' matriculado en la materia de ' + materia + ' su nota final es ' + promedio + ', quedo aprobado')
 }
 else{
    alert(' estudiante ' + nombre + ' matriculado en la materia de ' + materia + ' su nota final es ' + promedio + ', quedo reprobado')
 }


}



//10. un individuo desea invertir su capital en un banco que requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0,7 %

function inversion(){
    let interes = 0
    let años = 0
    let dinero = 0
    let inAnual = 0
    let inDinero = 0
    let inTotal = 0

    interes = 0.084
    dinero = parseInt(prompt('ingrese la suma de dinero'))
    años = parseInt(prompt('ingrese el numero de años en el cual quiera ver su interes anual'))

    inAnual = interes * años
    inDinero = dinero * inAnual
    inTotal = inDinero + dinero

    alert('su monto total a la cantidad de ' + años + ' años, es ' + inTotal + '. con una ganacia de ' + inDinero)

    



}


