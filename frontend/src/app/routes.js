import React from "react";
import {IndexRedirect, Route} from "react-router";

import Admin from "app/layouts/Admin";
import RouteNotFound from "app/components/RouteNotFound";
import users from "app/users/routes";


export default (
    <Route path="/">
        <IndexRedirect to="admin/users"/>
        <Route component={Admin} path="admin">
            <IndexRedirect to="users"/>
            {users}
            <Route path="*" component={RouteNotFound}/>
        </Route>
    </Route>
);
