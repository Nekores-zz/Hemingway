import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import routes from './paths';
class Routers extends React.PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map(({ path, exact, component }) => (
                            <Route key={path} exact={exact} path={path} component={component} />
                        ))
                    }
                </Switch>
            </Router>
        )
    }
}

export default Routers;