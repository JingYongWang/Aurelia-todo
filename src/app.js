import  {Todo} from './todo'


export class App {
  constructor() {
    //this.message = 'Hello World!';
    this.heading = 'todo';
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo(){
      if (this.todoDescription){
          this.todos.push(new Todo(this.todoDescription));
          this.todoDescription = '';
      }
  }

  removeTodo(todo){
      let index = this.todos.indexOf(todo);
      if (index !== -1){
          //splice(第幾個,刪除數量)
          this.todos.splice(index , 1);
      }
  }

}
