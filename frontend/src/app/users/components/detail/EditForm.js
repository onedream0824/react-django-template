import React from "react";
import {Input} from "react-bootstrap";


class EditForm extends React.Component {
    render() {
        const {fields, handleChange, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Input
                    label="First Name"
                    name="first_name"
                    type="text"
                    onChange={handleChange}
                    value={fields.first_name}
                />
                <Input
                    label="Last Name"
                    name="last_name"
                    type="text"
                    onChange={handleChange}
                    value={fields.last_name}
                />
                <button type="submit" className="hidden"/>
            </form>
        );
    }
}

export default EditForm;
