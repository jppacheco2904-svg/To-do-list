// 1. Selecionamos os elementos do html e guardamos em variáveis
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

// 2. Criamos a função para adicionar a tarefa
function addTask() {
    // Pegarmos o valor digitado no campo de texto pelo usuário
    const taskText = input.value;
    // Validação: Impedimos de adicionar tarefas vazias
    if (taskText == "") {
        alert("Por favor insira uma tarefa!")
        return;
    }

    // 3. Criando o elemento da lista na memória do navegador 
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Remover</button>
    `
    // 4. Adicionando Interatividade na tarefa criada:

    // Evento de marcação para mostrar como concluida ao clicar
    li.querySelector('span').addEventListener('click', function() {
        // toggle() adiciona a classe se não existir e remove se já existir
        this.parentElement.classList.toggle('completed');
    });

    // Evento para remover a tarefa ao clicar no botão 'Remover'
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // 5. Colocamos o item criado (li) dentro da nossa lista (ul) no HTML
    list.appendChild(li);

    // 6. Limpamos o campo de texto para a próxima tarefa
    input.value = ''; 
}

// Se o usuário apertar "Enter" dentro do input, ele chama a função addTask
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
