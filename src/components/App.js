import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskLIst from './TaskList';
import uuid from 'uuidv4';

class App extends Component {
  state = {
    tasks: [
      { id: 0, text: 'zagrać wreszcie w Wiedźmina 3', date: '2018-02-15', important: true, active: true, finishDate: null },
      { id: 1, text: 'zrobić dobry uczynek', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: 'pomalować dom po sylwestrze', date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: 'schudnąć 30 kilogramów', date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: 'sprzedać butelki po piwie (20 skrzynek)', date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: 'jeszcze raz pomalować dom', date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: 'fryzjer!!!', date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: 'nie odbierać poleconego od komornika', date: '2020-09-11', important: false, active: true, finishDate: null },
      { id: 8, text: 'kupić 2 butelki litrowe', date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks
    })
  }

  addTask = (task) => {

    const newTask = {
      id: uuid(),
      text: task.text,
      date: task.date,
      important: task.checked,
      active: true,
      finishDate: null
    }

    let tasks = [...this.state.tasks];
    tasks.push(newTask);

    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo - App</h1>
        <hr />

        <AddTask
          onAddTask={this.addTask}
        />

        <TaskLIst
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }


}

export default App;
