import "./App.css";
import ToDoList from "./component/ToDoList";
import AddToDo from "./component/AddToDo";
import NumberofToDo from "./component/NumberofToDo";

function App() {
  return (
    <div className="todoapp">
      <div className="box1">
        <div>
          <h1>To Do List</h1>
        </div>
        <div>
          <AddToDo />
        </div>
        <div>
          <NumberofToDo />
        </div>
        <div>
          <ToDoList />
        </div>
      </div>
    </div>
  );
}

export default App;
