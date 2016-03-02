import React from "react";


export default class HeaderTitle extends React.Component {
    render() {
        const props = this.props;

        return (
            <h3 className="box-title">{props.children}</h3>
        );
    }
}
