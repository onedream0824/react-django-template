import React from "react";
import classnames from "classnames";


export default class ControlSidebar extends React.Component {
    render() {
        const {adminlte, children} = this.props;
        const className = classnames(adminlte.controlSidebar.get("classNames"));

        return (
            <div>
                <aside className={className}>
                    {children}
                </aside>
                <div
                    className="control-sidebar-bg"
                    style={{position: "fixed", height: "auto"}}>
                </div>
            </div>
        );
    }
}
