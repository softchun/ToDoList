import "./ToDoStyle.css"
import { useSelector } from "react-redux";

function NumberofToDo() {

    const todo = useSelector((state) => state.todo);

    return (
        <div>
            <div className="addtodo" style={{marginTop: 40}}>
                You have {(todo.filter((item) => item.check === false)).length} To-do(s).
            </div>
        </div>
    );
}

export default NumberofToDo