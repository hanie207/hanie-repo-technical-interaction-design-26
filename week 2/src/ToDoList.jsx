import {useState,useEffect} from 'react';
import NewTodoForm from './NewTodoForm';
import ToDoItem from './ToDoItem';


export default function ToDoList({firstname}) {
    let h1style = {color:"deeppink",backgroundColor:"lightblue"};
    

  function loadTodos() {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }


  let [todos, setTodos] = useState(loadTodos);
  // let [newTask, setNewTask] = useState("");

  // const SAMPLE_TASKS = [
  //   "Buy milk", 
  //   "Call the landlord", 
  //   "Book the dentist",
  //   "Water the plants", 
  //   "Reply to Mette"];


  // function randomTask() {
  //     return SAMPLE_TASKS[Math.floor(Math.random() * SAMPLE_TASKS.length)];
  //   }
    

  function handleAdd(newTask) {
      // console.log("we should add a new item");
      let newTodos = [...todos, {id:crypto.randomUUID(), text: newTask, done:false}];
      setTodos(newTodos);
      //console.log(todos);
    }

  function handleDelete(idToDelete) {
      let newTodos = todos.filter((each) => each.id !== idToDelete);
      setTodos(newTodos);
  }

  function handleToggle(id) {
      let newTodos = todos.map((t) =>
          t.id===id?{...t, done: !t.done}: t
      );
      setTodos(newTodos);
  }

  useEffect(
	  () => {localStorage.setItem("todos", JSON.stringify(todos))}, 
	  [todos]
	);

  useEffect(
    () => {loadTodos()},
    []
  )

  return (
    <>
      <h1 style={h1style}>To Do List for {firstname}</h1>
        <ul>
          {todos.map((elem,index) => (
          <ToDoItem 
            elem={elem} 
            onDelete={handleDelete} 
            onChange={handleToggle} />
          ))}
        </ul>

       <NewTodoForm onAdd={handleAdd} />
    </>
    );
}
