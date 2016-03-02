import React from "react";


class RefreshButton extends React.Component {
    handleClick = () => {
        const {actions, collection} = this.props;
        const {router} = this.context;
        const query = collection.get("query");
        actions.fetchCollection({collection, query});
        router.push(collection.appUrl());
    };

    render() {
        return (
            <button
                className="btn btn-box-tool"
                onClick={this.handleClick}
                title="Refresh your search"
            >
                <i className="fa fa-fw fa-refresh"/>
            </button>
        );
    }
}

RefreshButton.contextTypes = {
    router: React.PropTypes.object
};

export default RefreshButton;
