import React from "react";


export default (options) => class HasPermission extends React.Component {
    render() {
        if (window.django.user.permissions[options.permission]) {
            return (
                <Component {...this.props}/>
            );
        } else {
            return null;
        }
    }
};
