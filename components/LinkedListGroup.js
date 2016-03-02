import React from "react";
import {Link} from "react-router";


export default class LinkedListGroup extends React.Component {
    render() {
        const {collection} = this.props;

        return (
            <div className="list-group" style={{opacity: collection.isLoading ? 0.5 : 1}}>
                {collection.records.toList().map((record, key) =>
                <Link
                    activeClassName="active"
                    className="list-group-item"
                    key={key}
                    to={record.appUrl()}
                >
                    {record.toString}
                    <span className="pull-right">
                        <i className="fa fa-fw fa-angle-right"/>
                    </span>
                </Link>
                )}
                {collection.records.size === 0
                    && <div className="list-group-item">No items found.</div>}
            </div>
        );
    }
}
