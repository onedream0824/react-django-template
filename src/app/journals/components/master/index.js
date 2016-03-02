import React from "react";

import LinkedListGroup from "app/components/LinkedListGroup";


class List extends React.Component {
    render() {
        return (
            <div>
                <LinkedListGroup {...this.props}/>
            </div>
        );
    }
}

export default List;
