import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../actions/todoAction'

import "./ToDoStyle.css"

function AddToDo() {

    const dispatch = useDispatch()

    const [todoContent, setTodoContent] = useState('');

    function handleChange(e) {
        setTodoContent(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(todoContent === '') {
            return;
        }
        dispatch(addTodo({ check: false, content: todoContent, id: uuidv4() }));
        document.getElementById("addtodo").value='';
        setTodoContent('')
    }

    return (
        <div>
            <div className="addtodo">
                Add To do
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className="input"  maxLength="24" type="text" id="addtodo" name="addtodo" placeholder="Type somthing you must to do." />
                <div>
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />} style={{ background: "#E6DDC4", color: "#181D31"}}>
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddToDo