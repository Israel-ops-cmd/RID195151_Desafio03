document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputDescription = document.querySelector('.input-description[name="description"]');
    const inputEtiqueta = document.querySelector('.input-description[name="etiqueta"]');
    const tarefasContainer = document.getElementById('tarefas');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const description = inputDescription.value.trim();
        const etiqueta = inputEtiqueta.value.trim();

        if(description && etiqueta) {
            const taskElement = document.createElement('div');
            taskElement.classList.add('tasks');

            taskElement.innerHTML = `
                <div>
                    <h2>${description}</h2>
                    <div id="etiqueta">
                        <div id="circular">
                            <h3>${etiqueta}</h3>
                        </div>
                        <h3>Criado em: ${new Date().toLocaleDateString()}</h3>
                    </div>
                </div>
                <div id="botão">
                    <button type="button" id="conclued">Concluir</button>
                </div>
            `; 
            tarefasContainer.appendChild(taskElement);
            inputDescription.value = '';
            inputEtiqueta.value = '';
           
        }
        else{
            alert('Preencha todos os campos!');
        }
    })
})