import ToDo from "./ToDo"
import { useSelector } from "react-redux";

import "./ToDoStyle.css"

function ToDoList() {
    
    const todo = useSelector((state) => state.todo);

    return (
        <div className="list">
            {todo.length? todo.map(obj => (
                <ToDo todo={obj} key={obj.id}/>
            )):
                <div style={{ fontSize: 24, fontWeight: 600}}>
                    <p>No To-do!</p>
                </div>
            }
        </div>
    );
}

export default ToDoList