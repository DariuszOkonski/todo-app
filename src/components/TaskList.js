import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h3>Zadania do zrobienia ({tasks.length})</h3>
        {tasks}
      </div>

      <hr />
      <div className="done">
        <h4>Zadania zrobione (0)</h4>
      </div>
      <hr />
    </>

  );
}

export default TaskList;