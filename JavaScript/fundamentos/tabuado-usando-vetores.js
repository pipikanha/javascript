"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

// Tabuada de 1 a 10, usando um vetor para armazenar os resultados e exiba o vetor ao final.

let meuVetor = [];
let numero = Number(prompt("Digite um número para ver a tabuada de 1 a 10 do mesmo:"));

for (let i = 1; i <= 10; i++) {
    meuVetor.push(numero * i);
}

console.log(`Tabuada de ${numero}: [${meuVetor}]`);