export default function ToDoPanel({ firstname, lastname,children }) {

    return (
        <> 
            <h1>To Do List for {firstname}</h1>
            <div style={{backgroundColor:"lightgreen"}}>
                {children}</div>
        </>
        
    )
}