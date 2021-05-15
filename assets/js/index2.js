"use strict"

function modalOpenClose () {
    
    const modalExitButton = document.querySelector('.modal-button-exit')
    const modalAddButton = document.querySelector('[data-button-add]')
    const modalContainer = document.querySelector('[data-modal-container]')
    
    
    modalAddButton.addEventListener('click', modalOpen);
    
    modalExitButton.addEventListener('click', modalExit);
    
    function modalOpen() {
        modalContainer.classList.remove('hidden')
    
    }
    function modalExit() {
        modalContainer.classList.add('hidden');
    }
};


//função de adicionar tasks//
function addTasks () {
    const addTaskButton = document.querySelector('[data-addTaskButton]');
    addTaskButton.addEventListener('click', setTask);
    
    function setTask () {
        const modalContainer = document.querySelector('[data-modal-container]')
        const nameTask = document.querySelector('#modal-name').value;
        const taskListElement = document.querySelector('[data-task-list]')
        
        
        
        // função de fechar ao adicionar uma task // 
        function modalExit() {
            modalContainer.classList.add('hidden');
        }

        // verificar o campo vazio + adicionar li{p, button{img}}// 

        if (nameTask == '') { 
            alert('Adicione um nome!')

        } else {

            const addLi = document.createElement('li');
            taskListElement.appendChild(addLi)
            
            const addP = document.createElement('p');
            addLi.appendChild(addP);
            
            const addButton = document.createElement('button');
            addLi.appendChild(addButton);
            addButton.classList.add('remove-button')
            
            const addImg = document.createElement('img');
            addButton.appendChild(addImg);
            addImg.src = "./assets/img/buttonX.svg";
            
            addP.textContent = `${nameTask}`;

            modalExit();

        }  
    }
    // descrição que só vai ser usada no module //
    const DescriptionTask = document.querySelector('#modal-description').value;
    
//fim da função// 
}


modalOpenClose();
addTasks();

