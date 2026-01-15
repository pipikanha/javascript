"use strict"; //Modo estrito


let user = {
    nome: "",
    senha: ""
}


function validarSenha(nome, senha){
    user.nome = nome;
    let erros = [];
    if (senha.length < 8) {
        erros.push("Senha deve conter no mínimo 8 caracteres.");
    }
    if (!/[A-Z]/.test(senha)) {
        erros.push("Senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!/[0-9]/.test(senha)) {
        erros.push("Senha deve conter pelo menos um número.");
    }
    if (!/([!@#$%^&*])/.test(senha)) {
        erros.push("Senha deve conter pelo menos um caractere especial (!@#$%^&*).");
    }
    if (senha.includes(user.nome)) {
        erros.push("Senha não deve conter o nome de usuário.");
    }

    if (erros.length > 0) {
        console.log(erros);
    } else {
        user.nome = nome;
        user.senha = senha;
        console.log("Usuário cadastrado com sucesso!");
    }
}
validarSenha("Joao", "Pneumoultramicroscopicosilicovulcanoconiose1!");