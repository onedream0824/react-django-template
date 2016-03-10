import React from "react";
import {Button, Modal} from "react-bootstrap";
import {List} from "immutable";

import EmptyComponent from "app/components/EmptyComponent";


export default (Component, permission) => {
    if (window.django.user.permissions.has(permission)) {
        class EditForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {show: false};
            }

            componentWillReceiveProps(nextProps) {
                if (this.props.model.id !== nextProps.model.id) {
                    const {model} = nextProps;
                    this.setState({changeSet: new model.ChangeSet(model.toJS())});
                }
            }

            showModal = () => {
                this.setState({show: true});
            }

            hideModal = () => {
                this.setState({show: false});
            }

            handleChange = (evnt) => {
                const {changeSet} = this.state;

                this.setState({
                    changeSet: changeSet.set(evnt.target.name, evnt.target.value)
                });
            }

            handleSubmit = (evnt) => {
                const {actions, model} = this.props;
                const {changeSet} = this.state;
                const successCb = List([() => this.hideModal()]);
                const errorCb = List([
                    (response) => this.setState({
                        changeSet: changeSet.set("_errors", response.body)
                    })
                ]);

                evnt.preventDefault();
                actions.saveModel({model, successCb, errorCb, changeSet});
            }

            render() {
                const {model} = this.props;
                const {changeSet} = this.state;

                return(
                    <a className="btn btn-app" onClick={this.showModal}>
                        <i className="fa fa-edit"></i> Edit
                        <Modal
                            onHide={this.hideModal}
                            show={this.state.show}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Edit {model.toString()}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Component
                                    changeSet={changeSet}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    {...this.props}
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
            }
        }

        return EditForm;
    } else {
        return EmptyComponent;
    }
};
