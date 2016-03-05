import React from "react";
import moment from "moment";


class Record extends React.Component {
    render() {
        const {record} = this.props;

        return (
            <dl className="dl-horizontal">
                <dt className="text-muted">Id</dt>
                <dd>{record.id}</dd>

                <dt className="text-muted">First Name</dt>
                <dd>{record.first_name}</dd>

                <dt className="text-muted">Last Name</dt>
                <dd>{record.last_name}</dd>

                <dt className="text-muted">Email</dt>
                <dd><a href={`mailto:${record.email}`}>{record.email}</a></dd>

                <dt className="text-muted">Date Joined</dt>
                <dd>{moment(record.date_joined).format('ddd. MMM. Do YYYY, h:mm A')}</dd>

                <dt className="text-muted">Last Login</dt>
                <dd>{moment(record.last_login).format('ddd. MMM. Do YYYY, h:mm A')}</dd>
            </dl>
        );
    }
}

export default Record;
