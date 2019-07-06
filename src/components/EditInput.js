import React, { Component } from 'react';

class EditInput extends Component {

  componentDidMount() {
    this.setState({newToDo: this.props.oldToDo})
  }

 state = {
   newToDo: '',
   toggle: false
 };

  newToDoText = event => {
    const newToDo = event.target.value;
    this.setState({ newToDo });
  };

  showEdit = () => {this.setState({toggle:true})}


  render(){
    return (

      <div>
        <button className="btn" onClick={this.showEdit} >Edit</button>
        {
          (this.state.toggle) ?
            <div>
              <input type="text" value={this.state.newToDo} onChange={this.newToDoText} />
              <input className="btn" type="button" value="edit" onClick={ () => this.props.editTask(this.state.newToDo, this.props.index)}/>
            </div>
          :
          ''
        }
      </div>
    );
  }
}

export default EditInput;
