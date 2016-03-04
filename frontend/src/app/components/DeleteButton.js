import React from "react";
import {Button, Modal} from "react-bootstrap";


class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }

    handleDelete = () => {
        const {actions, collection, record} = this.props;
        const {router} = this.context;
        actions.deleteRecord({record});
        router.push(collection.appUrl());
    }

    render() {
        const {permission} = this.props;

        if (window.django.user.permissions.has(permission)) {
            return(
                <a className="btn btn-app" onClick={this.showModal}>
                    <i className="fa fa-trash"></i> Delete
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                        dialogClassName="modal-danger"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            This action cannot be undone.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="pull-left"
                                onClick={this.hideModal}>Cancel
                            </Button>
                            <Button onClick={this.handleDelete}>Confirm</Button>
                        </Modal.Footer>
                    </Modal>
                </a>
            );
        } else {
            return null;
        }
    }
}

DeleteButton.contextTypes = {
    router: React.PropTypes.object
};

export default DeleteButton;
