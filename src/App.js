import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import About from "./components/pages/about";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "./Context";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NotFound}/>
            </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
