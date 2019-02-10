import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact} />
        <Route component={error} />
      </Switch>
      </BrowserRouter>
      
      </div>
    );
  }
}

const error = () =>{
  return(
    <div>Invalid page.</div>
  )
 }
export default App;
