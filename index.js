// Exibir na tela do console
console.log('Exemplo de console')

// Listar em formato de tabela
const pessoa = {
  nome: 'Cleiton',
  idade: 37,
  sexo: 'M'
}
console.table(pessoa)

// Contador
console.count('contando')
console.count('contando')
console.count('contando')

// Temporizador
console.time('tempo')
console.timeLog('tempo')


// SPREAD
const x = [1,3,6,8];
const min = Math.min(...x);
const max = Math.max(...x);
console.log('MIN', min);
console.log('max', max);

const user = {
  nome: "Cleiton",
  email: "cleibp@gmail",
  cpf: "111.111.111-11"
}
const result = (({ ...params}) => params)(user)
console.log(result)


const b = [1,2,3];
const c = [4,5,6];
const a = [...b, ...c]
console.log(a)

// DATE
const date = new Date()
console.log(new Intl.DateTimeFormat('pt-BR').format(date));


console.log(1 == '1');
console.log(1 === '1');

// MELHORIAS LET
let name = "Maria", age = 27, gender = "F"
let objES5 = { name: name, age: age, gender: gender }
let objES6 = { name, age, gender }
console.log(objES5)
console.log(objES6)

// VERIFICANDO O TIPO
const whoAmI = "teste"
console.log(typeof whoAmI)

// MELHORIAS OBJETO
let objCalcES5 = {
    msg: function msg() {
        console.log('Olá')  
    },
    somar: function somar(a, b) {
        console.log(a + b)
    }
}
objCalcES5.msg()
objCalcES5.somar(10, 20)


let objCalcES6 = {
    msg() {
        console.log('Olá')  
    },
    somar(a, b) {
        console.log(a + b)
    }
}
objCalcES6.msg()
objCalcES6.somar(10, 20)


objPropES5 = {
    nome: "Cleiton"
}
objPropES5["seq + 23"] = 23


objPropES6 = {
    nome: "Cleiton",
    ["seq + 23"]: 23
}

// SWITCH MAIS ELABORADO
const getCity = (state) => {
  const city = {
    'MG': () => 'Belo Horizonte',
    'RJ': () => 'Rio de Janeiro',
    'SP': () => 'São Paulo',
    'default': () => 'Não encontrado'
  }
  return (city[state] || city['default'])();
}
console.log(getCity('RJ'));


let print = e => console.log(e)
print('ola mundo')

const students = [
  {nome: 'Jack', nota: 10},
  {nome: 'Jack', nota: 10},
  {nome: 'Jack', nota: 10},
  {nome: 'Jack', nota: 10},
]

const getNota = el => el.nota + 0.5
const resultMap = students.map(getNota)
console.log(resultMap)

const greaterThanSeven = el => el.nota > 7
const resultFilter = students.filter(greaterThanSeven)
console.log(resultFilter)

const sum = (total, el) => total + el.nota
const total = students.reduce(sum, 0)
console.log(total)


// FACTORY FUNCTION
const creatCat = name => ({
  name,
  getName: () => name

})

const myCat2 = creatCat('Mimi')
console.log(myCat2.getName())


// Pegar item aleatorio do array
const array = [1,2,3,4,5]
const randomNumber = array[Math.floor(Math.random() * array.length)]
console.log(randomNumber)

const lang = 'pt-br';
const options = { notation: 'compact'}
const formatter = Intl.NumberFormat(lang, options);
const v = formatter.format(1000000)
console.log(v)


// POO
class Pessoa {
  constructor(nome, idade){
    this.nome = nome
    this.idade = idade
  }

  apresenta() {
    console.log(this.nome, this.idade)
  }

}


class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade)
    this.salario = salario
  }

  apresentaFuncionario() {
    console.log(this.nome, this.idade, this.salario)
  }
}

const p = new Pessoa("Cleiton", 37)
p.apresenta()
const f = new Funcionario("Joao", 40, 4000)
f.apresentaFuncionario()
