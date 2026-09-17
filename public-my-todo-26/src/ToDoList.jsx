export default function ToDoList({firstname, lastname, todos}) {
    let h1style = {color:"deeppink",backgroundColor:"lightblue"}

    function handleAdd(event) {
      console.log("we should add a new item")
    }

  return (
    <>
      <h1 style={h1style}>To Do List for {firstname}</h1>
        <ul>
          {todos.map((elem,index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>

      <button onClick={handleAdd}>Add New Task</button>
    </>
    )
}