const list = document.querySelector ('.listafaire')


function addTask(data) {
    const task = document.createElement("div")
    task.classList.add("task");
    const inner = /*html*/ `
    <div class="task__infos">

                  <input type="text"> <div class="titleTask">${data.title}</div>
                  <input type="text"> <div class="lieuTask">${data.lieu}</div>
                  <input type="text"> <div class="heureTask">${data.heure}</div>
                  <input type="text"> <div class="descriptionTask">${data.description}</div>


    </div>`;
    task.innerHTML = inner;

    list.append(task);

    console.log(data)

    //const task = new Task(data)
}

const form = document.querySelector('.formulaire')
const todoForm = new Todoform(form, addTask)