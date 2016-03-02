import React from "react";


export default class Body extends React.Component {
    render() {
        return (
            <div className="box-body">
                {this.props.children}
            </div>
        );
    }
}
