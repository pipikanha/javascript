const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "João", nota: 3 }
];

//Criando Tabela
const tabelaNotas = document.createElement("table");
tabelaNotas.style.border = "1px solid black";
tabelaNotas.style.borderCollapse = "collapse";
tabelaNotas.style.padding = "8px";
tabelaNotas.style.textAlign = "center";

//Criando Cabeçalho e Corpo da Tabela
const cabecalho = tabelaNotas.createTHead();
cabecalho.insertRow().innerHTML = "<th>Nome</th><th>Nota</th>";
const corpo = tabelaNotas.createTBody();

//Adicionando Dados dos Alunos, Estilizando Linhas
alunos.forEach(aluno => {
  const linha = corpo.insertRow();
  linha.insertCell().textContent = aluno.nome;
  linha.insertCell().textContent = aluno.nota;
  linha.style.backgroundColor = aluno.nota >= 6 ? "lightgreen" : "red";
  linha.style.border = "1px solid black";

});

//Estilizando Células
const celulas = tabelaNotas.getElementsByTagName("td");
for (let i = 0; i < celulas.length; i++) {
  celulas[i].style.border = "1px solid black";
}

//Adicionando Tabela ao Corpo do Documento
document.body.appendChild(tabelaNotas);