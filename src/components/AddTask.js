import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  minDate = new Date().toISOString().substr(0, 10);
  maxDate = `${(this.minDate.substr(0, 4) * 1 + 1)}-12-31`;

  state = {
    text: '',
    checked: false,
    date: this.minDate,
  }

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleChecked = (e) => {
    this.setState({
      checked: e.target.checked,
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  handleClick = () => {
    if (this.state.text.length < 3) {
      alert('Task can not be shorter then 3 letters...');
      return;
    }

    this.props.onAddTask(this.state);

    this.setState({
      text: '',
      checked: false,
      date: this.minDate,
    })
  }

  render() {

    return (
      <div className="form">
        <input
          type="text"
          placeholder="Add task..."
          value={this.state.text}
          onChange={this.handleText}
        />

        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleChecked}
        />
        <label htmlFor="important">Priority</label>
        <br />

        <label htmlFor="date">Deadline:</label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={this.minDate}
          max={this.maxDate}
          onChange={this.handleDate}
        />
        <br />

        <button
          onClick={this.handleClick}
        >Add New Task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;