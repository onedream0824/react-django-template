import React from "react";


export default class Wrapper extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <header className="main-header">
                {children}
            </header>
        );
    }
}
