import {Todo, TodoList} from './classes';
import './styles.css';

export const todolist= new TodoList();



const inputTarea = document.querySelector('.new-todo');
const divTodoList = document.querySelector('.todo-list');
const btncompletados = document.querySelector('.clear-completed');
const filters=         document.querySelector('.filters');
const filtro = document.querySelectorAll('.filtro');

export const CreatHtmlTarea=(tarea)=>{

  const htmltarea=`<li class="${(tarea.completado)? 'completed' : ''}" data-id="${tarea.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${(tarea.completado)? 'checked': ''}  >
    <label>${tarea.tarea}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`;

const div = document.createElement('div');
div.innerHTML = htmltarea;
divTodoList.append(div.firstElementChild);

return div.firstElementChild;



}

todolist.todolist.forEach(todos=> CreatHtmlTarea(todos))

inputTarea.addEventListener('keyup', (event)=>{
 

    if(event.keyCode === 13 && event.target.value.length > 0){

      const tarea= new Todo(inputTarea.value);
      console.log(tarea);
      todolist.NuevaTarea(tarea);
    

      CreatHtmlTarea(tarea)
      inputTarea.value='';
      console.log(todolist);
    }

});


divTodoList.addEventListener('click', (event)=>{


    const nombrelemento=event.target.localName
    const elementoli = event.target.parentElement.parentElement;
    const elementid= elementoli.getAttribute('data-id');
    console.log(elementid);
    console.log(elementoli);

        if(nombrelemento.includes('button')){
            todolist.EliminarTarea(elementid);
            divTodoList.removeChild(elementoli)
        }else if(nombrelemento.includes('input')){
            todolist.MarcarCompletado(elementid);
            elementoli.classList.toggle('completed')
           
        }

console.log(todolist)
});

btncompletados.addEventListener('click',()=>{

    todolist.EliminarCompletado();
for(let i=divTodoList.children.length -1; i>=0; i--){

   const elemt= divTodoList.children[i];

   if(elemt.classList.contains('completed')){
       divTodoList.removeChild(elemt);
   }

}

   console.log(todolist);

});


filters.addEventListener('click', (event)=>{

    const nombrefilter= event.target.text;
  
    if(!nombrefilter){return;}

    filtro.forEach(fil=> fil.classList.remove('selected'))
    event.target.classList.add('selected');
    console.log(nombrefilter);

    for(const element of divTodoList.children){
        console.log('elemtosfor',element)

        element.classList.remove('hidden');

        const completado = element.classList.contains('completed');
        console.log(completado)

        switch (nombrefilter) {
            case 'Pendientes':
                if(completado){
                    element.classList.add('hidden');
                }
                
                break;
            case 'Completados':
                if(!completado){
                    element.classList.add('hidden');
                }
               break;
             
        
        }

    }

  
});