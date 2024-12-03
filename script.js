function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    const listaTarefas = document.getElementById('listaTarefas');
    const novoItem = document.createElement('li');
    novoItem.textContent = novaTarefa;
    novoItem.addEventListener('click', marcarConcluida);
    listaTarefas.appendChild(novoItem);
    document.getElementById('novaTarefa').value = '';
  }
  
  function marcarConcluida(event) {
    event.target.classList.toggle('concluida');
  }