"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Calculadora simples com desconto baseado no valor da compra

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let operador = prompt("Digite qual operação deseja realizar (+, -, *, /): ");
let num2 = parseFloat(prompt("Digite o segundo número: "));
let resultado;

switch (operador) 
    {
        case "+":
            console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
            resultado = num1 + num2;
            break;
        case "-":
            console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
            resultado = num1 - num2;
            break;
        case "*":
            console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Erro: Divisão por zero não é permitida.");
                break;
            } else {
                console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
                resultado = num1 / num2;
                break;
            }
        default:
            console.log("Operador inválido. Por favor, use +, -, * ou /.");
    }
 if (resultado >= 2000){
    console.log(`o valor da compra ficou em ${resultado}, uma compra acima de R$2000,00 terá um desconto de 20% \nValor com desconto: R$${resultado * 0.8}`);  
 }
 else if (resultado >= 1000){
    console.log(`o valor da compra ficou em ${resultado}, uma compra acima de R$1000,00 terá um desconto de 10% \nValor com desconto: R$${resultado * 0.9}`);  
 }
 else if (resultado < 1000){
    console.log(`o valor da compra ficou em ${resultado}, uma compra abaixo de R$1000,00 não terá desconto`);

 }
