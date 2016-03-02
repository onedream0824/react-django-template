import React from "react";


export default class Content extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <section className="content">
                {children}
            </section>
        );
    }
}
