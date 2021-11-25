import ToDo from "./ToDo"

import "./ToDoStyle.css"

function ToDoList() {

    const list = [
        {
            content: "one"
        },
        {
            content: "two"
        },
        {
            content: "three"
        }
    ]

    return (
        <div className="list">
            {list.length? list.map(obj => (
                <ToDo todo={obj} />
            )):
                <div>
                    <p>No Todo!</p>
                </div>
            }
        </div>
    );
}

export default ToDoList