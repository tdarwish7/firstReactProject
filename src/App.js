import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './scenes/Home'
import Course from './scenes/Course'
import Courses from './scenes/Courses'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/course" component={Course}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
