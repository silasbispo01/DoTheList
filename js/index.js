"use strict"

const adicionaTarefa = document.querySelector("[data-addtaskbtn]");
const tarefas = document.querySelector("[data-tasks]");

adicionaTarefa.addEventListener("click", adicionarTarefa);


function adicionarTarefa(){
    var task = document.createElement("li");
    task.className = "task";
    var div = document.createElement("div");
    div.className = "check";
    var p = document.createElement("p");
    p.innerText = "teste";
    var i = document.createElement("i");
    i.className = "fas fa-times closebtn";

    task.appendChild(div);
    task.appendChild(p);
    task.appendChild(i);
    tarefas.appendChild(task)
}