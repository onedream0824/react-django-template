import React from "react";
import {Button} from "react-bootstrap";


class DeleteButton extends React.Component {
    render() {
        const {permission} = this.props;

        if (window.django.user.permissions.has(permission)) {
            return(
                <Button
                    block
                    bsStyle="danger"
                >
                    Delete
                </Button>
            );
        } else {
            return null;
        }
    }
}

export default DeleteButton;
