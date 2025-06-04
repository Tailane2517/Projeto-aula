const readline = require('readline-sync')

listaDeNotas = []

for (let i = 1; i <= 5; i++) {
    nota = readline.questionFloat(`Digite a ${i}ª nota: `)
    listaDeNotas.push(nota)
}
