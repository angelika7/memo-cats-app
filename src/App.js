import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Memo from './components/Memo/Memo';
import Register from './containers/Register/Register';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import axios from './axios';

class App extends Component {
  state = {
    guest: false,
    results: null,
    myResults: null
  }

  guestGameHandler() {
    this.setState({ guest: true })
  }

  render () {
    return (
      <div>
        <Layout results={this.state.results} myResults={this.state.myResults} >
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" component={Memo} exact />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
