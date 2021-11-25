import { Checkbox, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import "./ToDoStyle.css"

function ToDo({ todo }) {

    const [check, setCheck] = useState(false);

    function handleChange(e) {
        setCheck(!check);
    }

    function handleDelete(e) {
        
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