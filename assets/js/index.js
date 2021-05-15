"use strict"

const btnAdicionar = document.querySelector("[data-btn-adicionar]");
btnAdicionar.addEventListener("click", criarModal);
const modalContainer = document.querySelector("[data-modal-container]");


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
    })
    modalFooter.appendChild(button);

    divModal.appendChild(modalFooter);

    const body = document.querySelector("body");
    body.appendChild(divModalContainer);
}

function abrirModal(){
    modalContainer.classList.remove("hidden")
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

function apagar(element) {
    element.remove()
}