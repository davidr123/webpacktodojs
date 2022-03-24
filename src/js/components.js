import {Todo, TodoList} from './classes';

export const todolist= new TodoList();

const inputTarea = document.querySelector('.new-todo');

export const CreatHtmlTarea=(tarea)=>{

  const htmltarea=`<li class="${(tarea.completado)? 'completed' : ''}" data-id="${tarea.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${(tarea.completado)? 'checked': ''}  >
    <label>${tarea.tarea}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`


}



inputTarea.addEventListener('keyup', (event)=>{
  console.log(event);
});