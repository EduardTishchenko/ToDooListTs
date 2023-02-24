
import './App.css';
import { Todoolist } from './Todoolist';

function App () {

let tasks = [
  {id: 1, title: "CSS", isDone: true},
  {id: 2, title: "js", isDone: true},
  {id: 3, title: "react", isDone: false},
  {id: 4, title: "redux", isDone: false},
]



function removeTask(id:number) {
  debugger
  let resultTask = tasks.filter( () => true)
  console.log(resultTask)


}



  return <div className="App">
    <Todoolist title="Wat to learn" tasks={tasks}
    removeTask={removeTask}
    />
    
    

  </div>
}

export default App;



