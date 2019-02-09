import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title : ''
  }

  onSubmit = (e) =>{
    
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({titile: ''});
  }

  //onChange=(e)=> this.setState({title:e.target.value}); if 1 elment in form , else use below style
  onChange=(e)=> this.setState({[e.target.name]:[e.target.value]});

    render() {
    return (
        <form style={{display:'flex'}} onSubmit={this.onSubmit}>
          <input type="text" value={this.state.title} name="title" onChange={this.onChange}
          placeholder="Add Todo..."  style={{flex : '10', padding:'5px'}}/>
          <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
      </form>
    )
  }
}

 
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired

}

export default AddTodo
