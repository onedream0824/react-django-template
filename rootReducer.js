import {combineReducers} from "redux";

import adminlte from "adminlte/reducers";
import alerts from "app/reducers/alerts";
import cases from "app/cases/reducers";
import hospitals from "app/hospitals/reducers";
import journals from "app/journals/reducers";
import rotations from "app/rotations/reducers";
import users from "app/users/reducers";


export default combineReducers({
    adminlte,
    alerts,
    cases,
    hospitals,
    journals,
    rotations,
    users
});
