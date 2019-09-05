import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    checked: false,
    date: '2019-09-05',
  }

  render() {
    return (
      <div className="form">
        <input type="text" placeholder="Add task..." value={this.state.text} />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priority</label>
        <br />
        <label htmlFor="date">Deadline:</label>
        <input type="date" id="date" value={this.state.date} min='2019-09-05' max='2020-12-31' />
        <br />
        <button>Add New Task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;