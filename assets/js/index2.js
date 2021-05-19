"use strict"

class task {
    static id = 0;
    constructor(title = "", description = "") {
        this.title = title;
        this.description = description;
        task.id++;
        window.localStorage.setItem('idCount', task.id);
        this.id = task.id;
    }
}

task.id = window.localStorage.getItem('idCount');

let tasks;
if (JSON.parse(window.localStorage.getItem('tasks')) != null){
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++)
    {
        addOldTasks(tasks[i]);
    }
} else {
    tasks = [];
}

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
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
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
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            modalExit();

        }  
    }

    
//fim da função// 
}

function addOldTasks(i) {
    const taskListElement = document.querySelector('[data-task-list]')

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
    
    const thisTask = i;
    
    addP.textContent = thisTask.title;

    
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
}

function eraseTask(element) {
    const module = document.querySelector('[data-module]');
    module.classList.add('opacity0');
    let taskName = document.querySelector('[data-task-name]');
    taskName.textContent = '';
    let taskDescription = document.querySelector('[data-task-description]');
    taskDescription.textContent = '';

    erase(element);
    tasks.splice(tasks.indexOf(tasks.find(x => x.id == module.id)), 1)
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function erase (element) {
    element.remove();
}


function darkmode(){
    const darkmodeButton = document.querySelector('.darkmode-button');
    const body = document.querySelector('[data-darkmode]');
    const lua = document.querySelector('[data-lua]');
    const sol = document.querySelector('[data-sol]');

    let on = false;

    darkmodeButton.addEventListener('click', setDarkmode);
    
    function setDarkmode () {
        if (on == false) {
            body.classList.add('darkmode');
            lua.classList.remove('hidden')
            sol.classList.add('hidden')
            on = true;
        } else {
            body.classList.remove('darkmode');
            lua.classList.add('hidden')
            sol.classList.remove('hidden')
            on = false;
        }
    }

};

darkmode();
modalOpenClose();
addTasks();
editModuleInfo();
