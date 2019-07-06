import React, { Component } from 'react';

class EditInput extends Component {

  componentDidMount() {
    this.setState({newToDo: this.props.oldToDo})
  }

 state = {
   newToDo: ''
 };

  newToDoText = event => {
    const newToDo = event.target.value;
    this.setState({ newToDo });
  };


  render(){
    return (
      <div>
        <input type="text" value={this.state.newToDo} onChange={this.newToDoText} />
        <input type="button" value="edit" onClick={ () => this.props.editTask(this.state.newToDo, this.props.index)}/>
      </div>
    );
  }
}

export default EditInput;
