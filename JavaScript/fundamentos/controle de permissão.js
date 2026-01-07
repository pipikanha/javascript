const funcionarios = [
  { nome: "Carlos", cargo: "admin", ativo: true },
  { nome: "Ana", cargo: "user", ativo: true },
  { nome: "Marcos", cargo: "user", ativo: false }
];

function filtrarAdmins(funcionarios)
{
    return funcionarios.cargo === "admin" && funcionarios.ativo === true;
}

let adminsAtivos = funcionarios.filter(funcionario => {
   return filtrarAdmins(funcionario);
})
console.log(adminsAtivos);