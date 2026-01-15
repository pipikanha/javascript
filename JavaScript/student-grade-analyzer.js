const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Carlos", notas: [5, 4, 6] },
  { nome: "Beatriz", notas: [10, 9, 8] },
  { nome: "Daniel", notas: [6, 5, 7] },
  { nome: "Eduardo", notas: [7, 8, 9] },

];


alunos.forEach(aluno => {
  aluno.media = aluno.notas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0) / aluno.notas.length;
  

  aluno.media >= 7 ? aluno.aprovado = "Sim" : aluno.aprovado = "Não";
  console.log(`Aluno: ${aluno.nome} - Média: ${aluno.media} - Aprovado: ${aluno.aprovado}`);
});

  let melhorNota = {nome: "", media: 0};
  let piorNota = {nome: "", media: 10};
  let MediaTurma = 0;
let dadosDeMedia = () => {
  alunos.forEach(aluno =>{
    aluno.media > melhorNota.media ? melhorNota = {nome: aluno.nome, media: aluno.media} : null;
    aluno.media < piorNota.media ? piorNota = {nome: aluno.nome, media: aluno.media} : null;
    MediaTurma += aluno.media;
  })
  console.log(`Melhor Aluno: ${melhorNota.nome} - Nota: ${melhorNota.media}`);
  console.log(`Pior Aluno: ${piorNota.nome} - Nota: ${piorNota.media}`);
  console.log(`Média da Turma: ${(MediaTurma / alunos.length).toFixed(2)}`);

};

dadosDeMedia();


