import React from "react";
import {Col, Button, Row} from "react-bootstrap";


class FilterPopoverTitle extends React.Component {
    handleClear = () => {
        const {actions, hidePopover, collection} = this.props;
        const {router} = this.context;

        const query = collection.get("query").withMutations((map) => {
            map.clear().set("page", 1).set("search", "");
        });

        actions.fetchCollection({collection, query});
        hidePopover();
        router.push(collection.appUrl());
    };

    handleSubmit = () => {
        const {actions, hidePopover, collection} = this.props;
        const {router} = this.context;
        const query = collection.get("query");
        actions.fetchCollection({collection, query});
        hidePopover();
        router.push(collection.appUrl());
    };

    render() {
        return (
            <Row>
                <Col xs={4}>
                    <Button
                        bsSize="sm"
                        onClick={this.handleClear}
                    >
                        Clear
                    </Button>
                </Col>
                <Col xs={4}>
                    <h5>Filters</h5>
                </Col>
                <Col xs={4}>
                    <Button
                        bsSize="sm"
                        onClick={this.handleSubmit}
                    >
                        Done
                    </Button>
                </Col>
            </Row>
        );
    }
}

FilterPopoverTitle.contextTypes = {
    router: React.PropTypes.object
};

export default FilterPopoverTitle;
