//Aula 25/02
//declaração de variaveis (const, let e var)
//Tipagem dinamica no js
//Valores lógicos dos tipos no js
//Comparação com coersão implicita (== e ===)

//Aula 04/03
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]
const res = nomes.map((nome) => nome.charAt(0))
//console.log(res)
const comp = nomes.map((nome) => nome.length)
//console.log(comp)
const todosComecamComA = nomes.every(nome => nome.startsWith('A'))
//console.log(todosComecamComA)

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
//console.log(soma)