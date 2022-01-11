 //var e const

var desconto = 0.2;
const PRECO = 2; //o nome deve ser todo em maisculo para poder diferenciar
var total = PRECO - desconto;

//funções

function soma(a, b) {
   // console.log(a+b);  debugar
    return a + b; // usado para quando precisamos manipular depois o resultado da função em outra
}

soma(3, 5);

//console.log 

console.log("Hello world!"); //no terminal digite: node nome do arquivo 

function retrunEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`)
        }
    }
    console.log('Os números pares são: ', evenNums)
}
let array = [1, 2, 4, 5, 7, 8];

retrunEvenValues(array);