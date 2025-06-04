
const readline = require('readline-sync')

listaDeNotas = []

for (let i = 1; i <= 6; i++) {
    nota = readline.questionFloat(`Digite a ${i}ª nota: `)
    listaDeNotas.push(nota)
}

console.log('\nFiltrando elementos pares:')
const pares = listaDeNotas.filter(n => n % 2 === 0)
console.log(pares)

console.log('\nFiltrando elementos ímpares:')
const impares = listaDeNotas.filter(n => n % 2 === 1)
console.log(impares)

