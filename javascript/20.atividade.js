const readlineSync = require('readline-sync')

function somar(a,b) {
    return a+b
}

function multiplicar(a,b) {
    return a * b
}

let A = parseInt(readlineSync.question("Digite o valor A: "))
let B = parseInt(readlineSync.question("Digite o valor B: "))

if (A === B) {
    resultado = somar(A,B)
} else {
    resultado = multiplicar(A,B)
}
console.log('O resultado é - ${resultado}')