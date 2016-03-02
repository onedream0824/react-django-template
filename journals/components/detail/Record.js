import React from "react";
import moment from "moment";


class Record extends React.Component {
    render() {
        const {record} = this.props;

        return (
            <dl className="dl-horizontal">
                <dt className="text-muted">Id</dt>
                <dd>{record.id}</dd>

                <dt className="text-muted">Procedure</dt>
                <dd>{record.procedure.name}</dd>

                <dt className="text-muted">Hospital</dt>
                <dd>{record.hospital.name}</dd>

                <dt className="text-muted">Date</dt>
                <dd>{moment(record.date).format("MMM Do YYYY")}</dd>
            </dl>
        );
    }
}

export default Record;
