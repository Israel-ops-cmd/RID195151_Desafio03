document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const inputDescription = document.querySelector('.input-description[name="description"]');
    const inputEtiqueta = document.querySelector('.input-description[name="etiqueta"]');
    const tarefasContainer = document.getElementById('tarefas');
    const finishContainer = document.getElementById('finish');
    let completedTasksCount = 0;  

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const description = inputDescription.value.trim();
        const etiqueta = inputEtiqueta.value.trim();

        if (description && etiqueta) {
            const taskElement = document.createElement('div');
            taskElement.classList.add('tasks');

            taskElement.innerHTML = `
                <div class="left">
                    <h2 class="task-name">${description}</h2>
                    <div id="etiqueta">
                        <div id="circular">
                            <h3>${etiqueta}</h3>
                        </div>
                        <h3>Criado em: ${new Date().toLocaleDateString()}</h3>
                    </div>
                </div>
                <div id="botão">
                    <button type="button" class="conclued">Concluir</button>
                </div>
            `;

            tarefasContainer.insertBefore(taskElement, finishContainer);

            inputDescription.value = '';
            inputEtiqueta.value = '';
        } else {
            alert('Preencha todos os campos!');
        }
    })

    tarefasContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('conclued')) {
            const taskElement = event.target.closest('.tasks');
            const taskName = taskElement.querySelector('h2'); 
            if (taskName) {
                
                taskName.style.textDecoration = 'line-through';
                taskName.style.color = '#B1BACB';
            }

            completedTasksCount++;

            const taskWord = completedTasksCount === 1 ? 'Tarefa' : 'Tarefas';
            finishContainer.querySelector('h3').textContent = `${completedTasksCount} ${taskWord} concluída${completedTasksCount > 1 ? 's' : ''}`;

            event.target.parentElement.innerHTML = '<img src="assets/verificado.svg" alt="Concluído" width="30" style="margin-right: 3rem;">';
        }
    })
})
