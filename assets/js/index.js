"use strict"

const btnAdicionar = document.querySelector("[data-btn-adicionar]");
btnAdicionar.addEventListener("click", criarModal);
const modalContainer = document.querySelector("[data-modal-container]");
const modulos = document.querySelector("[data-modulos]")





function criarModal(){
    // Cria o modal container
    const divModalContainer = document.createElement("div");
    divModalContainer.classList.add("modal-container");
    
    // Cria o modal
    const divModal = document.createElement("div");
    divModal.className = "modal";
    divModalContainer.appendChild(divModal);

    // Cria e configura o modal header
    const divModalHeader = document.createElement("div");
    divModalHeader.className = "modal-header";
    
    const h2 = document.createElement("h2");
    h2.innerText = "Adicionar Tarefa";
    divModalHeader.appendChild(h2)

    let button = document.createElement("button");
    button.className = "modal-close-btn";
    button.setAttribute("onclick", "apagar(this.parentNode.parentNode.parentNode)")
    
    const img = document.createElement("img");
    img.src = "./assets/img/buttonX.svg";
    img.alt = "botão remover";

    button.appendChild(img);
    divModalHeader.appendChild(button);

    divModal.appendChild(divModalHeader);

    // Cria e configura o modal main

    const modalMain = document.createElement("div");
    modalMain.className = "modal-main";

    let p = document.createElement("p");
    p.innerText = "Título";
    modalMain.appendChild(p);

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.className = "modal-titulo";
    modalMain.appendChild(input1);

    p = document.createElement("p");
    p.innerText = "Descrição";
    modalMain.appendChild(p);

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.className = "modal-descricao";
    modalMain.appendChild(input2);

    divModal.appendChild(modalMain);

    // Cria e configura o modal footer

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    button = document.createElement("button");
    button.innerText = "Adicionar";
    button.addEventListener("click", () => {
        const lista = document.querySelector("[data-task-list]");

        const li = document.createElement("li");
        
        const p = document.createElement("p");
        p.innerText = input1.value;
        const button = document.createElement("button");
        button.className = "button-remove";
        button.setAttribute("onclick","apagar(this.parentNode)")

        const img = document.createElement("img");
        img.src = "./assets/img/buttonX.svg";
        img.alt = "botão remover";

        button.appendChild(img);

        li.appendChild(p);
        li.appendChild(button);
        lista.appendChild(li);
        apagar(divModalContainer);
    })
    modalFooter.appendChild(button);

    divModal.appendChild(modalFooter);

    const body = document.querySelector("body");
    body.appendChild(divModalContainer);
}

function criarModulo(){
    // Cria o Modulo
    const divModulo = document.createElement("div");
    divModulo.className = "module";
    // Cria e configura a div dos botões
    const divModuleButtons = document.createElement("div");
    divModuleButtons.className = "module-buttons";
    const editBtn = document.createElement("a");
    editBtn.id = "edit";
    const closeBtn = document.createElement("a");
    closeBtn.id = "close";
    divModuleButtons.appendChild(editBtn);
    divModuleButtons.appendChild(closeBtn);
    divModulo.appendChild(divModuleButtons);
    // Cria e configura a div do título
    const divModuleTaskName = document.createElement("div");
    divModuleTaskName.className = "module-task-name";
    const taskName = document.createElement("p");
    taskName.innerText = "Ir à academia";
    divModuleTaskName.appendChild(taskName);
    divModulo.appendChild(divModuleTaskName);
    // Cria e configura a div da descrição
    const divModuleDescription = document.createElement("div");
    divModuleDescription.className = "module-description";

    const descriptionForm = document.createElement("div");
    descriptionForm.className = "description-form";
    
    const label = document.createElement("label");
    label.for = "description";
    label.innerText = "Descrição";
    descriptionForm.appendChild(label);
    const textArea = document.createElement("textarea");
    textArea.id = "description";
    textArea.cols = "30";
    textArea.rows = "10";
    descriptionForm.appendChild(textArea);

    divModuleDescription.appendChild(descriptionForm);

    const divConfirmButtons = document.createElement("div");
    divConfirmButtons.className = "confirm-buttons";

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel";
    cancelBtn.className = "b";
    cancelBtn.innerText = "cancelar";
    divConfirmButtons.appendChild(cancelBtn);
    const confirmBtn = document.createElement("button");
    confirmBtn.id = "confirm";
    confirmBtn.className = "b";
    confirmBtn.innerText = "confirmar";
    divConfirmButtons.appendChild(confirmBtn);

    divModuleDescription.appendChild(divConfirmButtons);

    divModulo.appendChild(divModuleDescription);

    modulos.appendChild(divModulo);
}

function apagar(element) {
    element.remove()
}