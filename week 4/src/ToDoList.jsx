import {useState,useEffect} from 'react';
import NewTodoForm from './NewTodoForm';
import ToDoItem from './ToDoItem';
import Parse from 'parse';


const TodoItem = Parse.Object.extend("TodoItem");

export default function ToDoList({firstname}) {
    let h1style = {color:"deeppink",backgroundColor:"lightblue"};
    let [todos, setTodos] = useState([]);


async function loadTodos() {

    // we are creating a query object for objects of type TodoItem
    const query = new Parse.Query(TodoItem);

    query.equalTo("done", false);
    query.ascending("createdAt");
    
    const results = await query.find();
    let TodosinDB = []

    for (const item of results) {
      console.log(item.id + " - " + item.get("text"));
      TodosinDB.push({ id: item.id, text: item.get("text"), done: item.get("done") });
    }

    setTodos(TodosinDB);
    
    // const saved = localStorage.getItem("todos");
    // return saved ? JSON.parse(saved) : [];
  }

      useEffect(() => {
        loadTodos();
    }, []);


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
    

  function handleAdd(newTaskText) {
    const TodoItem = Parse.Object.extend("TodoItem");

    // creation of a new row in the table
    const newItem = new TodoItem();
    newItem.set("text", newTaskText);
    newItem.set("done", false);
    newItem.save().then(onSuccessfulSave).catch(onError);

    function onSuccessfulSave(savedItem) {
      
      let newTodos = [
        ...todos,
        { id: savedItem.id, text: newTaskText, done: false },
      ];
      setTodos(newTodos);
    }

    function onError(error) {
      alert(error.message);
    }
  }

  function handleDelete(idToDelete) {
      let newTodos = todos.filter((each) => each.id !== idToDelete);
      setTodos(newTodos);
  }

  function handleToggle(id) {
      const item = TodoItem.createWithoutData(id);
      item.set("done", !item.get("done"));
      item.save().then(()=>{
        let newTodos = todos.map((t) =>
          t.id===id?{...t, done: !t.done}: t
      );
      
      setTodos(newTodos);
    })
    .catch(()=>{console.log("Error updating item")});
  }

  async function handleDelete(idToDelete) {
    const item = TodoItem.createWithoutData(idToDelete);
    await item.destroy();
    
    setTodos(todos.filter((each) => each.id !== idToDelete));
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
