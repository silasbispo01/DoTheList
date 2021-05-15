"use strict"

const btnAdicionar = document.querySelector("[data-btn-adicionar]");
btnAdicionar.addEventListener("click", criarModal);
const modalContainer = document.querySelector("[data-modal-container]");


function criarModal(){
    // Cria a div para o modal container
    const divModalContainer = document.createElement("div");
    divModalContainer.classList.add("modal-container");
    
    // Cria a div para o modal
    const divModal = document.createElement("div");
    divModal.className = "modal";
    divModalContainer.appendChild(divModal);

    // Cria a div para o modal header
    const divModalHeader = document.createElement("div");
    divModalHeader.className = "modal-header";
    
    const h2 = document.createElement("h2");
    h2.innerText = "Adicionar Tarefa";
    divModalHeader.appendChild(h2)

    let button = document.createElement("button");
    button.className = "modal-close-btn";
    button.addEventListener("click", fecharModal);
    
    const img = document.createElement("img");
    img.src = "./assets/img/buttonX.svg";
    img.alt = "botão remover";

    button.appendChild(img);
    divModalHeader.appendChild(button);

    divModal.appendChild(divModalHeader);

    // Cria a div para o modal main

    const modalMain = document.createElement("div");
    modalMain.className = "modal-main";

    let p = document.createElement("p");
    p.innerText = "Título";
    modalMain.appendChild(p);

    let input = document.createElement("input");
    input.type = "text";
    input.className = "modal-titulo";
    modalMain.appendChild(input);

    p = document.createElement("p");
    p.innerText = "Descrição";
    modalMain.appendChild(p);

    input = document.createElement("input");
    input.type = "text";
    input.className = "modal-descricao";
    modalMain.appendChild(input);

    divModal.appendChild(modalMain);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    button = document.createElement("button");
    button.innerText = "Adicionar";
    modalFooter.appendChild(button);

    divModal.appendChild(modalFooter);

    const body = document.querySelector("body");
    body.appendChild(divModalContainer);
}

function abrirModal(){
    modalContainer.classList.remove("hidden")
}

// Pega o modal container e remove.
function fecharModal(e) {
    const modal = e.target.parentNode.parentNode.parentNode.parentNode;
    modal.remove();
}

function adicionarElemento (){
    const lista = document.querySelector("[data-task-list]");

    const li = document.createElement("li");
    
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.className = "button-remove";

    const img = document.createElement("img");
    img.src = "./assets/img/buttonX.svg";
    img.alt = "botão remover";

    button.appendChild(img);

    li.appendChild(p);
    li.appendChild(button);
    lista.appendChild(li);
}
