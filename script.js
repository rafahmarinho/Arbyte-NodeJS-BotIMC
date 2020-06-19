let rs = require('readline-sync')

let peso = rs.questionFloat("Qual seu peso? \n")

let altura = rs.questionFloat('Agora me diz qual a sua altura? \n')

let IMC = (peso / (altura * altura))

console.log ('Seu IMC é '+ IMC)