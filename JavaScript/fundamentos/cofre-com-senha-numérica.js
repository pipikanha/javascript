"use strict"; //Modo estrito
const prompt = require('prompt-sync')(); //Habilitar prompt no Node.js

//Simulando um cofre com senha numérica, onde o usuário tem 3 tentativas para acertar a senha. a função deve retornar true se o usuário acertar a senha e false caso ele erre todas as tentativas.




function verificarSenha(senhaCofre="12345") {
    let tentativas = 3;
    while (tentativas > 0) {
        let senhaUsuario = prompt("Digite a senha do cofre: ");
        if (senhaUsuario === senhaCofre) {
            console.log("Senha correta! Cofre aberto.");
            return true;
        }
        else{
            tentativas--;
            console.log(`Senha incorreta! Você tem mais ${tentativas} tentativas.`);
            
        }
    }
    return false;
    
}
console.log(verificarSenha());

