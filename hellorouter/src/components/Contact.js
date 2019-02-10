import React, { Component } from 'react'

export default class Contact extends Component {
  state ={
    fullname : ''
  }

  onSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.fullname);
  }
  
  onChange=(e)=> this.setState({[e.target.name]:[e.target.value]});

  render() {
    return (
    
      <div className="row" style={{paddingTop:'20px'}}>
          <form onSubmit={this.onSubmit}>
            <div className="col-md-12">
           
              <div className="form-group">
                    <label htmlFor="form_name">Full Name *</label>
                    <input id="form_name" value={this.state.fullname} onChange={this.onChange} 
                    type="text" name="fullname" className="form-control"
                     placeholder="Please enter your full name *" required="required" 
                     />
              </div>
            </div>
            <div className="col-md-12">
              <input type="submit" name="submit" value="Send" className="btn btn-success"/>
            </div>
          </form>
        </div>
    )
  }
}
