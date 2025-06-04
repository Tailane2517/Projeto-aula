// Solicite 3 notas e calcule a média

//npm install readline-sync

const readline = require('readline-sync')

listaDeNotas = []

for (let i = 1; i <= 3; i++) {
    nota = readline.questionFloat(`Digite a ${i}ª nota: `)
    listaDeNotas.push(nota)
}

console.log('\Soma das notas:')
soma = listaDeNotas.reduce((soma, total) => soma + total, 0)
console.log(soma)

console.log('\nQuantidade de notas: ')
quantidadedeNotas = listaDeNotas.length
console.log(quantidadedeNotas)

console.log('\nMédia: ')
media = soma/quantidadeNotas
console.log(media)

console.log('\nExibindo todas as notas:')
listaDeNotas.forEach((nota, index) => console.log(`${++index}ª nota: ${nota} `))
