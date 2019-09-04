import React from 'react';

const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task;

  return (
    <div>
      <p>
        <strong>{text}</strong> - do <span>{date} </span>
        <button onClick={() => props.change(id)}>Zostało zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
  );
}

export default Task;