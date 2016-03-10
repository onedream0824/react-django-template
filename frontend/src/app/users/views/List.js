import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import actions from "app/actions/collection";
import Container from "app/components/list/Container";
import FilterForm from "app/users/components/FilterForm";


const selector = createSelector(
    (state) => state.users,
    (collection) => {
        return {
            collection,
            FilterForm
        };
    }
);

const bindActions = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(selector, bindActions)(Container);
