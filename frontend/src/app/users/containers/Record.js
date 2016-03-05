import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import actions from "app/actions/collection";
import DeleteButton from "app/components/DeleteButton";
import EditButton from "app/components/EditButton";
import EditForm from "app/users/components/detail/EditForm";
import findRecord from "app/components/higherOrder/findRecord";
import Record from "app/users/components/detail/Record";


class Container extends React.Component {
    render() {
        return (
            <div>
                <Record {...this.props}/>
                <div className="text-center">
                    <DeleteButton
                        {...this.props}
                        permission="users.delete_emailuser"
                    />
                    <EditButton
                        {...this.props}
                        permission="users.change_emailuser"
                        EditForm={EditForm}
                    />
                </div>
            </div>
        );
    }
}

const selector = createSelector(
    (state) => state.users,
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
