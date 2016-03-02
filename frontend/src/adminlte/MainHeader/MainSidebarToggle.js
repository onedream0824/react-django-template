import React from "react";


export default class MainSidebarToggle extends React.Component {
    render() {
        const {actions, adminlte} = this.props;

        return (
            <button onClick={actions.mainSidebarToggle} className="btn sidebar-toggle">
                <span className="sr-only">Toggle navigation</span>
            </button>
        );
    }
}
