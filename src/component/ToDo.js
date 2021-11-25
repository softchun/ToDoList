import { Checkbox, IconButton } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import "./ToDoStyle.css"
import { useDispatch } from 'react-redux'
import { checkTodo, deleteTodo } from '../actions/todoAction'

function ToDo({ todo }) {

    const dispatch = useDispatch()

    const [check, setCheck] = useState(false);

    function handleChange(e) {
        setCheck(!check);
        dispatch(checkTodo({ id: todo.id }));
    }

    function handleDelete(e) {
        dispatch(deleteTodo({ id: todo.id }));
    }

    return (
        <div className={check ? "todo todotrue" : "todo todofalse"}>
            <div className="box-x">
                <div>
                    <Checkbox onChange={handleChange} sx={{
                        color: "#678983",
                        '&.Mui-checked': {
                            color: "#678983",
                        },
                    }} />
                    {todo.content}
                </div>
                <div>
                    <IconButton aria-label="Delete" onClick={handleDelete} style={{color: "#678983", marginRight: 5}}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default ToDo