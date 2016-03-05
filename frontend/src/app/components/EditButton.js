import React from "react";
import {Button, Modal} from "react-bootstrap";


class EditButton extends React.Component {
    constructor(props) {
        super(props);
        const {record} = props;

        this.state = {
            show: false,
            fields: record.toJS()
        };
    }

    componentWillReceiveProps(nextProps) {
        const {record} = this.props;

        if (record.id !== nextProps.record.id) {
            this.setState({fields: nextProps.record.toJS()});
        }
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false});
    }

    handleCancel = () => {
        const {record} = this.props;
        this.setState({fields: record.toJS()});
        this.hideModal();
    }

    handleChange = (evnt) => {
        let {fields} = this.state;
        fields[evnt.target.name] = evnt.target.value;
        this.setState({fields});
    }

    handleSubmit = (evnt) => {
        const {actions, collection, record} = this.props;
        const {fields} = this.state;
        evnt.preventDefault();
        actions.editRecord({record, fields});
        this.hideModal();
    }

    render() {
        const {permission} = this.props;

        if (window.django.user.permissions.has(permission)) {
            const {EditForm, record} = this.props;
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
                            <Modal.Title>Edit {record.toString}</Modal.Title>
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
