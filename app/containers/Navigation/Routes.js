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



import LoginScreen from "../LoginScreen/";
import ContentScreen from "../ContentScreen/";
import ContentScreenTextNote from "../ContentScreen/TextNote/";
import ContentScreenSuccessScreen from "../ContentScreen/SuccessScreen/";
import ContentScreenRoundScreen from "../ContentScreen/RoundScreen/";

import EditorScreen from "../EditorScreen/";
import EditorScreenTextNote from "../EditorScreen/TextNote/";
import EditorScreenSuccessScreen from "../EditorScreen/SuccessScreen/";
import EditorScreenRoundScreen from "../EditorScreen/RoundScreen/";

import ProofReaderScreen from "../ProofReaderScreen";
import ProofReaderScreenTextNote from "../ProofReaderScreen/TextNote/";
import ProofReaderScreenSuccessScreen from "../ProofReaderScreen/SuccessScreen/";
import ProofReaderScreenRoundScreen from "../ProofReaderScreen/RoundScreen/";

import SuperVisorScreen from "../SupervisorScreen/";


class Routes extends React.Component {
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/login" component={LoginScreen} />

          <Route path="/content/textnote/note" component={ContentScreenRoundScreen} />
          <Route path="/content/textnote/success" component={ContentScreenSuccessScreen} />
          <Route path="/content/textnote" component={ContentScreenTextNote} />
          <Route path="/content/" component={ContentScreen} />

          <Route path="/editor/textnote/note" component={EditorScreenRoundScreen} />
          <Route path="/editor/textnote/success" component={EditorScreenSuccessScreen} />
          <Route path="/editor/textnote" component={EditorScreenTextNote} />
          <Route path="/editor" component={EditorScreen} />

          <Route path="/proofreader/textnote/note" component={ProofReaderScreenRoundScreen} />
          <Route path="/proofreader/textnote/success" component={ProofReaderScreenSuccessScreen} />
          <Route path="/proofreader/textnote" component={ProofReaderScreenTextNote} />
          <Route path="/proofreader" component={ProofReaderScreen} />

          <Route path="/supervisor" component={SuperVisorScreen} />

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
