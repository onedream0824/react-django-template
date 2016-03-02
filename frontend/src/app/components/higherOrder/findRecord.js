import React from "react";

export default (Component) => class FindRecord extends React.Component {
    componentWillMount() {
        const {collection, params} = this.props;
        const id = params[collection.get("routeId")];
        const records = collection.get("records");

        if ( ! records.has(id)) {
            const {actions} = this.props;
            const Record = collection.get("Record");
            actions.fetchRecord(new Record({id}));
        }
    }

    render() {
        const {collection, params} = this.props;
        const id = params[collection.get("routeId")];
        const Record = collection.get("Record");
        const records = collection.get("records");
        const record = records.get(id, new Record());

        return (
            <Component
                {...this.props}
                record={record}
            />
        );
    }
};
