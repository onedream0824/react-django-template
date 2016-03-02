import React from "react";


export default (Component) => {
    class FilterForm extends React.Component {
        handleSubmit = (evnt) => {
            const {actions, collection, hidePopover} = this.props;
            const {router} = this.context;
            const query = collection.get("query").set("page", 1);
            evnt.preventDefault();
            actions.fetchCollection({collection, query});
            router.push(collection.appUrl());
            hidePopover();
        };

        handleChange = (evnt) => {
            const {actions, collection} = this.props;
            const query = collection.get("query").set(evnt.target.name, evnt.target.value);
            actions.updateCollectionQuery({collection, query});
        };

        render() {
            const {collection} = this.props;

            return (
                <Component
                    {...this.props}
                    collection={collection}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            );
        }
    }

    FilterForm.contextTypes = {
        router: React.PropTypes.object
    };

    return FilterForm;
};
