import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import actions from "app/actions/collection";
import DeleteButton from "app/components/DeleteButton";
import EditButton from "app/components/EditButton";
import EditForm from "app/users/components/detail/EditForm";
import findModel from "app/components/higherOrder/findModel";
import Model from "app/users/components/detail/Model";


class Container extends React.Component {
    render() {
        return (
            <div>
                <Model {...this.props}/>
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

export default connect(selector, bindActions)(findModel(Container));
