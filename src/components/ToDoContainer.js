import React, { Component } from 'react'
import ToDoList from './ToDoList'

class ToDoContainer extends Component {
  state = {
    toDo: '',
    allTasks: [],
  }

  toDoText = event => {
    const toDo = event.target.value;
    this.setState({ toDo });
  };

  createTask = () => {
    const task = this.state.toDo;
    const tasks = [...this.state.allTasks, task];
    this.setState({allTasks: tasks, toDo: ''});
  }

  checkTask = event => {
    const toDoId = event.target.parentNode.parentNode.id;
    const allTasks = [...this.state.allTasks];
    allTasks.splice(toDoId, 1);
    this.setState({allTasks})
  }

  editToDoList = (string, index) => {
    const allTasks = [...this.state.allTasks];
    allTasks[index] = string;
    this.setState({allTasks}, () => this.state.allTasks)
  }


  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.toDo} onChange={this.toDoText}/>
        </div>
        <div>
          <button className="btn" onClick={this.createTask}> toDo </button>
        </div>
        <br/>
        <ToDoList toDoList={this.state.allTasks} checkTask={this.checkTask}  editTask={this.editToDoList} toggle={this.state.toggle}/>
      </div>
    )
  }

}

export default ToDoContainer
