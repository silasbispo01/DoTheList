function editModuleInfo () {
    const module = document.querySelector('[data-module]');
    const cancelButton = document.querySelector('[data-module-cancel-button]');
    const confirmButton = document.querySelector('[data-module-confirm-button]');
    const taskName = document.querySelector('[data-task-name]');
    const taskDescription = document.querySelector('[data-task-description]');
    const editButton = document.querySelector('[data-button-edit]');
    let task;
    editButton.addEventListener('click', switchEditModule)


    confirmButton.addEventListener('click', () => {
        task = tasks.find(x => x.id == module.id);
        if (taskDescription.value != task.description) {
            task.description = taskDescription.value;
        }
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        switchEditModule();
    });
}

function switchEditModule() {
    const saveChangesButton = document.querySelector('[data-module-confirm-button]');
    const cancelChangesButton = document.querySelector('[data-module-cancel-button]');
    const descricao = document.querySelector('[data-task-description]');
    if (saveChangesButton.classList.contains('opacity0'))
    {
        saveChangesButton.classList.remove('opacity0');
        cancelChangesButton.classList.remove('opacity0');
        descricao.removeAttribute('readonly');
    } else {
        saveChangesButton.classList.add('opacity0');
        cancelChangesButton.classList.add('opacity0');
        descricao.setAttribute('readonly', 'true');
    }
}

editModuleInfo();