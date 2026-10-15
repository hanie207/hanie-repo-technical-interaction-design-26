import './App.css'
import ToDoList from './ToDoList.jsx'

function App() {
  const AnnasToDoList = ["Buy groceries", "Clean the house", "Finish the project"];
  const KonstantinasToDoList = ["Prepare presentation", "Attend meeting", "Submit report"];

  return (
    <>
    <ToDoList firstname={"Anna"} todos={AnnasToDoList} />
    </>
  )
}

export default App;
