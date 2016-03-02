import React from "react";
import {Route} from "react-router";

import Admin from "app/layouts/Admin";
import hospitals from "app/hospitals/routes";
import rotations from "app/rotations/routes";
import users from "app/users/routes";


export default (
    <Route path="/">
        <Route component={Admin} path="admin">
            {hospitals}
            {users}
            {rotations}
        </Route>
    </Route>
);
