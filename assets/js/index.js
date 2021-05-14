"use strict"

const btnAdicionar = document.querySelector("[data-btn-adicionar]");
btnAdicionar.addEventListener("click", adicionarElemento);

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
