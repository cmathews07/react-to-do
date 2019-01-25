import React, {Component} from 'react';

class ToDo extends Component{
  render(){
    return (
      <div>
      <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
         <span>{ this.props.description }</span>
       </li>
      <input type="submit" value = "Delete" onClick={this.props.deleteToDo}/>
      </div>
    );
  }
}

export default ToDo;
