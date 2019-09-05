import React from 'react';

const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task;

  return (
    <div>
      <p>
        <strong>{text}</strong> - do <span>{date} </span>
        {active && <button onClick={() => props.change(id)}>Done</button>}
        <button onClick={() => props.delete(id)}>Remove</button>
      </p>
    </div>
  );
}

export default Task;