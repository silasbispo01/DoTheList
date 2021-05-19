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

function editModuleInfo () {
    const module = document.querySelector('[data-module]');
    const cancelButton = document.querySelector('[data-module-cancel-button]');
    const confirmButton = document.querySelector('[data-module-confirm-button]');
    const taskName = document.querySelector('[data-task-name]');
    const taskDescription = document.querySelector('[data-task-description]');
    let task;

    confirmButton.addEventListener('click', () => {
        task = tasks.find(x => x.id == module.id);
        if (taskDescription.value != task.description) {
            task.description = taskDescription.value;
        }
    });
}

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

            const addInput = document.createElement('input');
            addLi.appendChild(addInput);
            addInput.type = "checkbox"
            
            const addP = document.createElement('p');
            addLi.appendChild(addP);
            
            const addButton = document.createElement('button');
            addLi.appendChild(addButton);
            addButton.classList.add('remove-button');
            addButton.setAttribute('onclick', 'eraseTask(this.parentNode)');
            
            const addImg = document.createElement('img');
            addButton.appendChild(addImg);
            addImg.src = "./assets/img/buttonX.svg";
            
            addP.textContent = `${nameTask.value}`;

            const thisTask = new task(nameTask.value, descriptionTask.value);
            addLi.id = thisTask.id;
            addLi.addEventListener('click', () => {
                const module = document.querySelector('[data-module]');
                module.id = thisTask.id;
                module.classList.remove('opacity0');
                let taskName = document.querySelector('[data-task-name]');
                taskName.textContent = thisTask.title;
                let taskDescription = document.querySelector('[data-task-description]');
                taskDescription.value = thisTask.description;

            }, true)
            tasks.push(thisTask);
            modalExit();

        }  
    }

    
//fim da função// 
}

function eraseTask(element) {
    const module = document.querySelector('[data-module]');
    module.classList.add('opacity0');
    let taskName = document.querySelector('[data-task-name]');
    taskName.textContent = '';
    let taskDescription = document.querySelector('[data-task-description]');
    taskDescription.textContent = '';

    erase(element);
}

function erase (element) {
    element.remove();
}


function darkmode(){
    
};

darkmode();
modalOpenClose();
addTasks();
editModuleInfo();
