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

//function hello(){
//    console.log("Hello!")
//}
//hello()     

//function hello(nome){
//    console.log("Hello, " + nome)
//}
//hello("josé")

//function soma(a, b){
//    return a + b
//}

//const dobro = function (n){
//    return 2 * n
//}
//console.log(dobro(4))

//const triplo = function (n = 1){
//    return n * 3
//}
//console.log(triplo())
//console.log(triplo(3))

//ES6
//const hello = () => console.log("Hello!")
//hello()

//const dobroArrow = (n) => n * 2

//const triploArrow = n => n * 3

//const vetor = [1, 2, 3]
//const f = (v) => {return v.filter()}

//ES6
//let umaFuncao = function (){
//    console.log("Fui referenciada em uma variável")
//}
//Função de alta ordem (recebe função como parametro)
//Higher Order Function
//function f(funcao){
//    funcao()
//}

//f(function () { console.log("Estou sendo passada para a f")})

//Funcao de alta ordem também pois retorna uma função
/*function g (){
    function outraFuncao(){
        console.log("Fui produzida pela g")
    }

    return outraFuncao
}
*/

//const resultadoDaG = g();

//implementar funcao filter
function filter(v, f){
    let vFinal = new Array();
    for(let i = 0 ; i < v.length ; i++){
        if(f(v[i]))
        vFinal.push(v[i])
    }

    return vFinal;
}

console.log(filter([1, 2], (n) => n % 2 == 0));

function map (v, f){
    let vFinal = new Array();
    for(let i = 0 ; i < v.length ; i++){
        vFinal.push(f(v[i]))
    }

    return vFinal;
}

console.log(map(["abc", "def"], (e) => e.length))

//JSON
let pessoa = {
    nome: "João",
    idade: 17
}
console.log(pessoa.nome)
console.log(pessoa['idade'])

let p = {
    nome: "Maria",
    idade: 22,
    endereco: {
        logradouro: "Rua B",
        numero: 44,
        bairro: "Vila K"
    }
}

console.log(p.endereco.logradouro)
console.log(p.endereco['numero'])