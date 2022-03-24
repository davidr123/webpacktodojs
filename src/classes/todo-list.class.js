export class TodoList{

    constructor(){
        this.cargarLoalStorage();
    }

    NuevaTarea(tarea){

        this.todolist.push(tarea);
        this.guardarLocalStorage();

    }

    EliminarTarea(id){

        this.todolist= this.todolist.filter(tarea=> tarea.id!=id);
        this.guardarLocalStorage();

    }

    MarcarCompletado(id){
        for(let todo of this.todolist){
            if(todo.id== id){
                todo.completado= !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }


    }

    EliminarCompletado(){
        this.todolist= this.todolist.filter(tarea=> !tarea.completado);
        this.guardarLocalStorage();
}


guardarLocalStorage(){

    localStorage.setItem('todo', JSON.stringify(this.todolist) )
}

cargarLoalStorage(){
    if(localStorage.getItem('todo')){

        this.todolist= JSON.parse(localStorage.getItem('todo'));
    }else{
        this.todolist=[];
    }
}

}