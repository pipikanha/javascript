"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

//Programa que adicione numeros a um vetor ate que o usuário decida parar, e depois crie um vetor sem números repetidos, desse vetor tire o maior e menor valor, a soma dos valores e a média aritmética. Depois a quantidade de pares e impares e crie um vetor para armazenar eles separadamente.

let meuVetor = [];
let novoVetor = [];
let parVetor = [];
let imparVetor = [];


let continuar = prompt("Deseja adicionar um número ao vetor? (s/n): ");

// Enquanto o usuário quiser continuar adicionando números
while (continuar.toLowerCase() === 's') {
    console.log("Vetor atual: ", meuVetor);
    let numero = parseFloat(prompt("Digite um número para adicionar ao vetor: "));
    meuVetor.push(numero);
    continuar = prompt("Deseja adicionar outro número ao vetor? (s/n): ");
}

// Remover números repetidos
for (let i = 0; i < meuVetor.length; i++) {
    if (!novoVetor.includes(meuVetor[i])) {
        novoVetor.push(meuVetor[i]);
    }
}
console.log(`Vetor sem números repetidos: [${novoVetor}]`);
let maior = novoVetor[0];
let menor = novoVetor[0];
let soma = 0;
let media = 0;
for (let i = 0; i < novoVetor.length; i++) {
    soma += novoVetor[i];
    // Verificando par ou impar e adicionando ao vetor correspondente
    if (novoVetor[i] % 2 === 0) {
        parVetor.push(novoVetor[i]);
    } else {
        imparVetor.push(novoVetor[i]);
    }
    // Verificando maior e menor valor
    if (novoVetor[i] > maior) {
        maior = novoVetor[i];
    }
    if (novoVetor[i] < menor) {
        menor = novoVetor[i];
    }
}
media = soma / novoVetor.length;

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
console.log(`Soma dos valores: ${soma}`);
console.log(`Média aritmética: ${media.toFixed(2)}`);
console.log(`Quantidade de números pares: ${parVetor.length}`);
console.log(`Quantidade de números ímpares: ${imparVetor.length}`);
console.log(`Vetor de números pares: [${parVetor}]`);
console.log(`Vetor de números ímpares: [${imparVetor}]`);