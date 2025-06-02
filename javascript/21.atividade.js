// npm install readline-sync

const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor da variável A: ')
const b = readline.questionFloat('Digite o valor da variável B: ')
const c = readline.questionFloat('Digite o valor da variável C: ')


const soma = a + b

if(soma < c) {
    console.log('A soma A + B é menor que C')
} else {
    console.log('A soma de A + B é maior que C')
}
