import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact} />
        <Route component={error} />
      </Switch>
      </div>
      </BrowserRouter>
     );
  }
}

const error = () =>{
  return(
    <div>Invalid page.</div>
  )
 }
export default App;
