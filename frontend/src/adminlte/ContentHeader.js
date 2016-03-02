import React from "react";


export default class ContentHeader extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <section className="content-header">
                {children}
            </section>
        );
    }
}
