import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Col, Row} from "react-bootstrap";

import actions from "app/actions/collection";
import Master from "app/journals/components/master";
import Pagination from "app/components/Pagination";
import SearchBox from "app/components/SearchBox";
import VerifiedFilters from "app/journals/components/master/VerifiedFilters";


class Container extends React.Component {
    componentWillMount() {
        const {actions, collection, params: {user}} = this.props;
        const query = collection.get("query").set("user", user);
        actions.fetchCollectionIfEmpty({collection, query});
    }

    componentWillReceiveProps(nextProps) {
        const {props} = this;

        if (props.params.user !== nextProps.params.user) {
            const {actions, collection, params: {user}} = nextProps;
            const query = collection.get("query").set("user", user);
            actions.fetchCollection({collection, query});
        }
    }

    render() {
        const {children} = this.props;

        return (
            <Row>
                <Col sm={6}>
                    <SearchBox {...this.props}/>
                    <VerifiedFilters {...this.props}/>
                    <Master {...this.props}/>
                    <Pagination {...this.props}/>
                </Col>
                <Col sm={6}>
                    {children}
                </Col>
            </Row>
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

export default connect(selector, bindActions)(Container);
