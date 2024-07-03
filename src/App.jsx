import { useState } from 'react'; 
import {nanoid} from 'nanoid';
import Todo from './components/Todo'; 
import Form from './components/Form';  
import FilterButton from './components/FilterButton';

function App(props) {
  const [tasks, setTasks] = useState([]); 
  // const taskList = tasks?.map((task) => {
  //   <Todo
  //     id={task.id}
  //     name={task.name}
  //     completed={task.completed}
  //     key={task.id}
  //   />
  // })
  const taskList = tasks?.map((task) => {
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  })

  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false, key: `todo-${nanoid()}`}; 
    setTasks([...tasks, newTask]); 
  }
  // const taskList = props.tasks?.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>); 
  return (
    <div className="todoapp stack-large">
      <h1 hidden>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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
