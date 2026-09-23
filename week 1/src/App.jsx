import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ToDoList from './ToDoList.jsx'
import ToDoPanel from './ToDoPanel.jsx'
import Parse from 'parse';

Parse.initialize("f2rDrJMWbZWKDgnqtqHlIG31zWpU61rZNiueowUq", "Mdb9LvzSeGFLNxlVKkUaA4y4heEf7i0nqtpzac9M");
Parse.serverURL = 'https://your-parse-server.com/parse';


function App() {
  const AnnasToDoList = ["Buy groceries", "Clean the house", "Finish the project"];
  const KonstantinasToDoList = ["Prepare presentation", "Attend meeting", "Submit report"];

  return (
    <>
    <ToDoList firstname={"Anna"} todos={AnnasToDoList} />
    <ToDoList firstname={"Konstantina"} todos={KonstantinasToDoList} />
    <ToDoPanel firstname={"Lea"} >
      <ol>
        <li>Prepare Figma tutorial for next lecture</li>
        <li>Prepare assignment</li>
      </ol>
    </ToDoPanel>

    </>
  )
}

export default App
