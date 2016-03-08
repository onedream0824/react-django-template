import React from "react";
import {List} from "immutable";
import {Button, Modal} from "react-bootstrap";


class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    handleChange = (evnt) => {
        const {actions, model} = this.props;
        const changeSet = model.changeSet.set(evnt.target.name, evnt.target.value); 
        actions.editModel({model, changeSet});
    }

    handleSubmit = (evnt) => {
        const {actions, model} = this.props;
        const successCb = List([() => this.hideModal()]);
        evnt.preventDefault();
        actions.saveModel({model, successCb, changeSet: model.changeSet});
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
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
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
