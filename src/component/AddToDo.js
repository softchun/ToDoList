import ToDo from "./ToDo"
import { useState } from "react";
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import "./ToDoStyle.css"

function AddToDo() {

    const [addtodo, setAddtodo] = useState('');

    return (
        <div>
            <div className="addtodo">
                Add To do
            </div>
            <form>
                <input className="input" type="text" id="addtodo" name="addtodo" placeholder="Type somthing you must to do." />
                <div>
                    <Button variant="contained" endIcon={<SendIcon />} style={{ background: "#E6DDC4", color: "#181D31"}}>
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddToDo