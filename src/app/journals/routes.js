import React from "react";
import {Route} from "react-router";

import Detail from "./containers/Detail";
import Master from "./containers/Master";


export default (
    <Route path="journal" component={Master}>
        <Route path=":journal" component={Detail}/>
    </Route>
);
