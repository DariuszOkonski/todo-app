import React from 'react';

const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task;
  const importantStyle = important ? { color: 'red' } : null;

  if (active) {
    return (
      <div>
        <p>
          <strong style={importantStyle}>{text}</strong> - till <span>{date} </span>

          <button onClick={() => props.change(id)}>Done</button>

          <button onClick={() => props.delete(id)}>Remove</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong> - <em>(deadline {date})</em><br />
          - task finished at: <strong>{finish} </strong>


          <button onClick={() => props.delete(id)}>Remove</button>
        </p>
      </div>
    );
  }

}

export default Task;