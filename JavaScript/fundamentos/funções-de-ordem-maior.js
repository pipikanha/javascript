"use strict";   //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

const usuarios = [
  { nome: "  joao ", idade: "23", ativo: "true" },
  { nome: "MARIA", idade: "17", ativo: "false" },
  { nome: "Pedro", idade: "30", ativo: "true" }
];

// tarefas: Usar map para: remover espaços do nome, deixar nome com primeira letra maiúscula, converter idade para número, converter ativo para boolean, Usar filter para retornar apenas usuários ativos, Usar forEach para exibir: "Usuário João está ativo"

let usuariosRevisados = usuarios.map(usuario => {
   usuario.nome = usuario.nome.trim();
   usuario.nome = usuario.nome.charAt(0).toUpperCase() + usuario.nome.slice(1).toLowerCase();
   usuario.idade = Number(usuario.idade);
   usuario.ativo = usuario.ativo === "true" ? true : false;
   return usuario;
})

let usuariosAtivos = usuariosRevisados.filter(usuario => {

    return usuario.ativo === true;
})

usuariosAtivos.forEach(usuario => {
  
  console.log(`Usuário ${usuario.nome} está ativo`);
})