import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo"
import {useState} from 'react'

function App() {
  const [todos,  setTodo]=useState<Todo[]>([]);
  const removeTodoHandler=(todoId:string)=>{
    setTodo((prevTodos)=>{
      return prevTodos.filter(todo =>todo.id!== todoId)
    });
  }
  const addTodohanlder = (todoText: string) => {
        const newTodo=new Todo(todoText);
        setTodo((prevTools)=>{
          return prevTools?.concat(newTodo);
        })
  };
  return (
    <div>
      <NewTodo AddTodo={addTodohanlder} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
