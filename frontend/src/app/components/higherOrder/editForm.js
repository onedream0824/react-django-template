import React from "react";


export default (Component) => {
    class EditForm extends React.Component {
        componentWillMount() {
            const {actions, model} = this.props;
            const changeSet = new model.ChangeSet(model.toJS());
            actions.editModel({model, changeSet});
        }

        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }

    return EditForm;
};
