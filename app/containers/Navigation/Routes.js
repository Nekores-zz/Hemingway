import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";


import LoginScreen from "../../containers/LoginScreen";
import ContentScreen from "../../containers/ContentScreen";


class Routes extends React.Component {
  render() {
    return <Router>
        <Switch>
          {/* <Route exact path="/" component={authenticated(Dashboard)} /> */}
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/content" component={ContentScreen} />
          {/* <Redirect to="/login" /> */}
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>
      </Router>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
