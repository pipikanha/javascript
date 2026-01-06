"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js
 
// Sistema de caixa eletrônico que calcula a quantidade de notas necessárias para um determinado valor sacado

const notade100 = 100;
const notade50 = 50;
const notade20 = 20;
const notade10 = 10;
const notade5 = 5;
const notade2 = 2;
const notade1 = 1;

let qtdNotas100 = 0;
let qtdNotas50 = 0;
let qtdNotas20 = 0;
let qtdNotas10 = 0;
let qtdNotas5 = 0;
let qtdNotas2 = 0;
let qtdNotas1 = 0;

let valor = parseFloat(prompt("Digite o valor que deseja sacar: "));


  if (valor >= 100)
{
    qtdNotas100 = Math.floor(valor / notade100);
    valor = valor % notade100;
} if (valor >= 50)
{
    qtdNotas50 = Math.floor(valor / notade50);
    valor = valor % notade50;
}if (valor >= 20)
{
    qtdNotas20 = Math.floor(valor / notade20);
    valor = valor % notade20;
}if (valor >= 10)
{
    qtdNotas10 = Math.floor(valor / notade10);
    valor = valor % notade10;
} if (valor >= 5)
{
    qtdNotas5 = Math.floor(valor / notade5);
    valor = valor % notade5;
} if (valor >= 2)
{
    qtdNotas2 = Math.floor(valor / notade2);
    valor = valor % notade2;
}if (valor >= 1)
{
    qtdNotas1 = Math.floor(valor / notade1);
    valor = valor % notade1;
}




console.log(`Notas de 100: ${qtdNotas100} \nNotas de 50: ${qtdNotas50} \nNotas de 20: ${qtdNotas20} \nNotas de 10: ${qtdNotas10} \nNotas de 5: ${qtdNotas5} \nNotas de 2: ${qtdNotas2} \nNotas de 1: ${qtdNotas1}`);