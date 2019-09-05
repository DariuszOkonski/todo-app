import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h3>Tasks to do ({activeTasks.length})</h3>
        {activeTasks.length > 0 ? activeTasks : <p>Nothing to do</p>}
      </div>

      <hr />
      <div className="done">
        <h4>Done Tasks ({doneTasks.length})</h4>
        {doneTasks.length > 5 && <strong style={{ color: 'red' }}>Displaying only last 5 tasks</strong>}
        {doneTasks.slice(0, 5)}
      </div>
      <hr />
    </>

  );
}

export default TaskList;