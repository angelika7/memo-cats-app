import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Memo from './components/Memo/Memo';
import Register from './containers/Register/Register';
import Logout from './containers/Register/Logout/Logout';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import * as actions from './store/actions/index';

class App extends Component {

  state = {
    newResult: false
  }
  
  commponentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/" exact component={() => <Memo />} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={() => <Memo />} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout newRes={this.state.newResult}>
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch( actions.authCheckState() )
  }
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
