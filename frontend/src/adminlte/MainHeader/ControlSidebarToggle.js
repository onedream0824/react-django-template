import React from "react";


export default class ControlSidebarToggle extends React.Component {
    render() {
        const {actions, adminlte} = this.props;

        return (
            <button
                onClick={actions.controlSidebarToggle}
                className="btn sidebar-toggle"
            >
                <span className="sr-only">Toggle navigation</span>
            </button>
        );
    }
}
