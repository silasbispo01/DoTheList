"use strict"

const adicionaTarefa = document.querySelector("[data-addtaskbtn]");
const abreModal = document.querySelector("[data-open-modal]");
const tarefas = document.querySelector("[data-tasks]");

const btnCloseModal = document.querySelector("[data-close-modal]");
const btnCancelar = document.querySelector("[data-cancelar-task]")


btnCancelar.addEventListener("click", (e) => {
    // Pega a div mãe (modal-container) da div mãe (modal) da div mãe (modal-header) do botão
    let parent = e.target.parentNode.parentNode.parentNode;
    parent.classList.add("hidden");
});

abreModal.addEventListener("click", mostraModal);

btnCloseModal.addEventListener("click", (e) => {
    // Pega a div mãe (modal-container) da div mãe (modal) da div mãe (modal-header) do botão
    let parent = e.target.parentNode.parentNode.parentNode;
    parent.classList.add("hidden");
});


adicionaTarefa.addEventListener("click", adicionarTarefa);


function mostraModal(){
    const modal = document.querySelector("[data-modal-container]");
    modal.classList.remove("hidden");
}

function adicionarTarefa(){
    var task = document.createElement("li");
    task.className = "task";
    var div = document.createElement("div");
    div.className = "check";
    var p = document.createElement("p");
    p.innerText = "teste";
    var i = document.createElement("i");
    i.className = "fas fa-times closebtn";
    i.addEventListener("click", excluir)

    task.appendChild(div);
    task.appendChild(p);
    task.appendChild(i);
    tarefas.appendChild(task);
}

function excluir(e) {
    let target = e.target;
    target.parentNode.remove()
}