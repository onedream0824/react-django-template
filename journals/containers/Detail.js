import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import actions from "app/actions/collection";
import findRecord from "app/components/higherOrder/findRecord";
import Record from "app/journals/components/detail/Record";


class Container extends React.Component {
    render() {
        return (
            <div className="inset">
                <Record {...this.props}/>
            </div>
        );
    }
}

const selector = createSelector(
    (state) => state.journals,
    (collection) => {
        return {
            collection
        };
    }
);

const bindActions = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(selector, bindActions)(findRecord(Container));
