import './App.css'
import Parse from 'parse';
import ToDoList from './ToDoList.jsx'

Parse.initialize("bmp8KbnRMCOrN6dgKY3S3Eb5glZ3c5vUNa3qmToI","zh3QLfDiLqjzgLiOvhXKeMV6GFrV2SoyBcbDk7yu");
Parse.serverURL = "https://parseapi.back4app.com";

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
