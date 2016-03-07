import React from "react";


export default class PaginationInfo extends React.Component {
    render() {
        const {collection} = this.props;

        return (
            <span>
                Showing {collection.pagination.start_index} to {collection.models.size} of {collection.pagination.total_entries} entries
            </span>
        );
    }
}
