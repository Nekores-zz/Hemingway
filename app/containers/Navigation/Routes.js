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


import LoginScreen from "../../containers/LoginScreen/";
import ContentScreen from "../../containers/ContentScreen/";
import TextNote from "../../containers/ContentScreen/TextNote/";
import SuccessScreen from "../../containers/ContentScreen/SuccessScreen/";


class Routes extends React.Component {
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/content/textnote/success" component={SuccessScreen} />
          <Route path="/content/textnote" component={TextNote} />
          <Route path="/content" component={ContentScreen} />
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
