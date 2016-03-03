import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router";

import stylesheets from "app/stylesheets/index.less";
import configureStore from "app/configureStore";
import history from "app/history";
import routes from "app/routes";

const store = configureStore();


class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}

export default Root;
