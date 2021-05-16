"use strict"

class task {
    static id = 0;
    constructor(title = "", description = "") {
        this.title = title;
        this.description = description;
        task.id++;
        this.id = task.id;
    }
}
const tasks = [];

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
        let nameTask = document.querySelector('#modal-name');
        const taskListElement = document.querySelector('[data-task-list]')
        // descrição que só vai ser usada no module //
        const descriptionTask = document.querySelector('#modal-description');
        
        
        // função de fechar ao adicionar uma task // 
        function modalExit() {
            nameTask.value = '';
            descriptionTask.value = '';
            modalContainer.classList.add('hidden');
        }

        // verificar o campo vazio + adicionar li{p, button{img}}// 

        if (nameTask.value == '') { 
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
            
            addP.textContent = `${nameTask.value}`;

            const thisTask = new task(nameTask.value, descriptionTask.value);
            addLi.id = thisTask.id;
            addLi.addEventListener('click', () => {
                const module = document.querySelector('[data-module]');
                module.classList.remove('hidden');
                let taskName = document.querySelector('[data-task-name]');
                taskName.textContent = thisTask.title;
                let taskDescription = document.querySelector('[data-task-description]');
                taskDescription.textContent = thisTask.description;

            })
            tasks.push(thisTask);
            modalExit();

        }  
    }

    
//fim da função// 
}


modalOpenClose();
addTasks();

