import React from "react";


export default class Nav extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <ul className="nav navbar-nav">
                {children}
            </ul>
        );
    }
}
