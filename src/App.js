import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css'

// COMPONENTS
import PortfolioWrapper from './components/static/PortfolioWrapper'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'

class App extends Component {
  render() {
    return (
      <div id="root">
      <Router>
        <div>
          <PortfolioWrapper />
          <Switch>

            <Home exact path="/" component={Home} />
            <Projects exact path="/projects" component={Projects} />
            <About exact path="/about" component={About} />

          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
