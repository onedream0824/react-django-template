import React from "react";
import {Route} from "react-router";

import Admin from "app/layouts/Admin";
import users from "app/users/routes";


export default (
    <Route path="/">
        <Route component={Admin} path="admin">
            {users}
        </Route>
    </Route>
);
