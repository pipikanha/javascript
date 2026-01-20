const tarefas = [
  "Estudar JS",
  "Treinar lógica",
  "Criar projetos",
  "Descansar"
];

const lista = document.createElement('ul');

tarefas.forEach(tarefa => {
    const item = document.createElement('li');
    item.textContent = tarefa;
    if (tarefa.includes('Estudar')) {item.style.fontWeight = 'bold';}
    lista.appendChild(item);
})

document.body.appendChild(lista);