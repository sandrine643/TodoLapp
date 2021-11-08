export default class TaskItem {
    constructor({ content, tasks, container, model }) {
      this.$container = container;
      this.id = model?.id || this.uuid();
      this.completed = false;
      this.content = model?.content || content;
      this.template = this.createTemplate();
  
      this.allTasks = tasks;
      this.allTasks.push(this.model);
  
      if (model?.completed) {
        this.onToggle();
      }
  
      this.addListeners();
  
      this.saveData();
    }
  
    saveData() {
      window.localStorage.setItem("todos", JSON.stringify(this.allTasks));
    }
  
   
  
    get title() {
      return this.content[0][1];
    }
  
    get lieu() {
      return this.content[1][1];
    }
  
    get heure() {
      return this.content[2][1];
    }
  
    get description() {
      return this.content[3][1];
    }
  
    get taskClass() {
      let c = "task";
      c += this.completed ? ` task--completed` : "";
      return c;
    }
  
    addListeners() {
      this.onToggle = this.onToggle.bind(this);
      this.onDelete = this.onDelete.bind(this);
      console.log(this.template);
  
      this.template.addEventListener("click", this.onToggle);
  
      const deleteBtn = this.template.querySelector(".task__delete");
      deleteBtn.addEventListener("click", this.onDelete);
    }
  
    createTemplate() {
      const el = document.createElement("div");
      el.setAttribute("data-uuid", this.id);
      el.classList.add("task");
      const tpl = `
        <button class="task__toggle"></button>
        <div class="task__content">
          <p class="task__title">${this.title}</p>
          <p class="task__lieu-heure">${this.lieu} - ${this.heure}</p>
          <p class="task__description">${this.description}</p>
        </div>
        <button class="task__delete">x</button>
      `;
  
      el.innerHTML = tpl;
  
      this.$container.append(el);
  
      return el;
    }
  
    onToggle() {
      this.completed = !this.completed;
  
      if (this.completed) {
        this.template.classList.add("task--completed");
      } else {
        this.template.classList.remove("task--completed");
      }
  
      const index = this.allTasks.findIndex((task) => task.id === this.id);
      this.allTasks[index] = this.model;
      this.saveData();
    }
  
    onDelete(e) {
      e.stopPropagation();
      //this.allTasks.splice(0, 1);
  
      const index = this.allTasks.findIndex((task) => task.id === this.id);
      this.allTasks.splice(index, 1);
  
      const clickedItem = this.$container.querySelector(
        `div[data-uuid="${this.id}"]`
      );
      clickedItem.remove();
  
      this.saveData();
    }
  
    // uuid() {
    //   let d = new Date().getTime(),
    //     d2 = (performance && performance.now && performance.now() * 1000) || 0;
    //   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    //     let r = Math.random() * 16;
    //     if (d > 0) {
    //       r = (d + r) % 16 | 0;
    //       d = Math.floor(d / 16);
    //     } else {
    //       r = (d2 + r) % 16 | 0;
    //       d2 = Math.floor(d2 / 16);
    //     }
    //     return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
   //  });
   // }
  }
  