import React from "react";
import {Button, Modal} from "react-bootstrap";


class EditButton extends React.Component {
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

    render() {
        const {permission} = this.props;

        if (window.django.user.permissions.has(permission)) {
            const {EditForm, model} = this.props;

            return(
                <a className="btn btn-app" onClick={this.showModal}>
                    <i className="fa fa-edit"></i> Edit
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit {model.toString()}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditForm
                                {...this.props}
                                hideModal={this.hideModal}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="pull-left"
                                onClick={this.hideModal}>Cancel
                            </Button>
                            <Button onClick={this.handleSubmit}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </a>
            );
        } else {
            return null;
        }
    }
}

EditButton.contextTypes = {
    router: React.PropTypes.object
};

export default EditButton;
