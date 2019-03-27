import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

        </div>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
     
    );
  }
}

export default App;
