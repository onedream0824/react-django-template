import React from "react";


export default class Menu extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <div className="navbar-custom-menu">
                {children}
            </div>
        );
    }
}
