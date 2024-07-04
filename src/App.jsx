import { useState } from 'react'; 
import {nanoid} from 'nanoid';
import Todo from './components/Todo'; 
import Form from './components/Form';  
import FilterButton from './components/FilterButton';

function App(props) {
  console.log('App is called'); 
  const [tasks, setTasks] = useState([]); 
  const taskList = tasks?.map((task) => {
    return <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  })

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task; 
    })
    setTasks(updatedTasks); 
  }
  
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false}; 
    setTasks([...tasks, newTask]); 
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id!==task.id); 
    setTasks(remainingTasks); 
  }

  return (
    <div className="todoapp stack-large">
      <h1 hidden>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
      <button type="button" onClick={() => alert('still something to prove')}>Hi all</button>
    </div>
  );
}

export default App
