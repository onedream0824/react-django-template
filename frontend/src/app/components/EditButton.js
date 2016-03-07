import React from "react";
import {Button, Modal} from "react-bootstrap";


class EditButton extends React.Component {
    constructor(props) {
        super(props);
        const {model} = props;

        this.state = {
            show: false,
            fields: model.toJS()
        };
    }

    componentWillReceiveProps(nextProps) {
        const {model} = this.props;

        if (model.id !== nextProps.model.id) {
            this.setState({fields: nextProps.model.toJS()});
        }
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }

    handleCancel = () => {
        const {model} = this.props;
        this.setState({fields: model.toJS()});
        this.hideModal();
    }

    handleChange = (evnt) => {
        let {fields} = this.state;
        fields[evnt.target.name] = evnt.target.value;
        this.setState({fields});
    }

    handleSubmit = (evnt) => {
        const {actions, model} = this.props;
        const {fields} = this.state;
        evnt.preventDefault();
        actions.editModel({model, fields});
        this.hideModal();
    }

    render() {
        const {permission} = this.props;

        if (window.django.user.permissions.has(permission)) {
            const {EditForm, model} = this.props;
            const {fields} = this.state;

            return(
                <a className="btn btn-app" onClick={this.showModal}>
                    <i className="fa fa-edit"></i> Edit
                    <Modal
                        {...this.props}
                        show={this.state.show}
                        onHide={this.hideModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit {model.toString}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditForm
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                fields={fields}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="pull-left"
                                onClick={this.handleCancel}>Cancel
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
