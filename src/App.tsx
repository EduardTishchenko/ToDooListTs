
import { useState } from 'react';
import './App.css';
import { TaskType,Todoolist } from './Todoolist';


export type  FilterValuesType = "all" | "completed" | "active";


function App () {



let [tasks , setTasks] = useState<Array<TaskType>>([
  {id: 1, title: "CSS", isDone: true},
  {id: 2, title: "js", isDone: true},
  {id: 3, title: "react", isDone: false},
  {id: 4, title: "redux", isDone: false},
]) 

let [filter, setFilter] = useState<FilterValuesType>("all")


function removeTask(id:number) {
  
  let filteredTask = tasks.filter( t=> t.id !== id)
  setTasks(filteredTask)
  


}
let tasksFoTodolist = tasks;
if (filter === "completed") {
  tasksFoTodolist = tasks.filter(t => t.isDone === true);
}
if (filter === "active") {
 tasksFoTodolist = tasks.filter(t => t.isDone === false);
}

function changeFilter(value:FilterValuesType) {
  setFilter(value);

}

  return <div className="App">
    <Todoolist title="Wat to learn" tasks={tasksFoTodolist }
    removeTask={removeTask}
    changeFilter={changeFilter}
    />
    
    

  </div>
}

export default App;



