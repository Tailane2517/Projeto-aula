// npm install readline-sync

const readline = require('readline-sync')

soma = 0
let nota = 0

for (let i=1; i <= 2; i++) {
    do {
    let nota = readline.questionFloat('Digite uma nota: ')
    } while (nota >= 0 || nota <= 2) 
    soma += nota
}

media = soma/2

console.log(`Média: ${media}`)



