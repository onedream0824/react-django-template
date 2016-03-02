import React from "react";
import {IndexRedirect, Route} from "react-router";

import Admin from "app/layouts/Admin";
import users from "app/users/routes";


export default (
    <Route path="/">
        <IndexRedirect to="admin/users"/>
        <Route component={Admin} path="admin">
            <IndexRedirect to="users"/>
            {users}
        </Route>
    </Route>
);
