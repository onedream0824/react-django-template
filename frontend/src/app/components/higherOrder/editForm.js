import React from "react";
import {List} from "immutable";


export default (Component) => {
    class EditForm extends React.Component {
        componentWillMount() {
            const {model} = this.props;
            this.setState({changeSet: new model.ChangeSet(model.toJS())});
        }

        handleChange = (evnt) => {
            const {changeSet} = this.state;

            this.setState({
                changeSet: changeSet.set(evnt.target.name, evnt.target.value)
            });
        }

        handleSubmit = (evnt) => {
            const {actions, hideModal, model} = this.props;
            const {changeSet} = this.state;
            const successCb = List([() => hideModal()]);
            const errorCb = List([
                (response) => this.setState({
                    changeSet: changeSet.set("_errors", response.body)
                })
            ]);

            evnt.preventDefault();
            actions.saveModel({model, successCb, errorCb, changeSet});
        }

        render() {
            const {changeSet} = this.state;

            return (
                <Component
                    changeSet={changeSet}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.props}
                />
            );
        }
    }

    return EditForm;
};
