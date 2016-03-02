import React from "react";
import {IndexRedirect, Route} from "react-router";

import journalRoutes from "app/journals/routes";

import Record from "./containers/Record";
import Tabs from "./containers/Tabs";
import Master from "./containers/Master";


const routes = (
    <Route path="users" component={Master}>
        <Route path=":user" component={Tabs}>
            <IndexRedirect to="journal"/>
            {journalRoutes}
            <Route path="record" component={Record}/>
        </Route>
    </Route>
);

export default routes;
