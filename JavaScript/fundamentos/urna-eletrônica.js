"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

//Sistema de votos onde cada usuario deve votar em um candidato, sendo eles 1 2 ou 3. Armazene em um vetor e veja quantos votos cada candidato recebeu no final.

let votos = [];

let pergunta = prompt("Deseja votar em um candidato? (s/n): ");

while (pergunta === "s") {
    let votar = Number(prompt("Digite o número do candidato (1, 2 ou 3): "));
    votos.push(votar);

    pergunta = prompt("Deseja votar em outro candidato? (s/n): ");
}

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let nulos = 0;

for (let i = 0; i < votos.length; i++) {
    if (votos[i] === 1) {
        candidato1++;
    } else if (votos[i] === 2) {
        candidato2++;
    }else if (votos[i] === 3) {
        candidato3++;
    } else {
        nulos++;
    }
}
console.log(`Candidato 1: ${candidato1} votos \nCandidato 2: ${candidato2} votos \nCandidato 3: ${candidato3} votos \nVotos nulos: ${nulos}`);