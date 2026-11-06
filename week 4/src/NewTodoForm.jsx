import { useState } from 'react';
import TextInput from './TextInput';

export default function NewTodoForm({onAdd}){
    let[task, setTask] = useState("");
    // let[buttonDisabled, setButtonDisabled] = useState(task.length === 0);

    // function handleInputChange(event) {
    //     let taskString = event.target.value;
    //     setTask(taskString);
    //     setButtonDisabled(taskString.length === 0);
    // }   

    function onButtonClick(event) {
        event.preventDefault();
        onAdd(task);
        setTask("");

    }

    return(
       <form onSubmit={onButtonClick}>
        <TextInput input={task} setInput={setTask} />
        <button type="submit" onClick={onButtonClick} disabled={task.length === 0}>Add New Task</button>
      </form>
    );
}