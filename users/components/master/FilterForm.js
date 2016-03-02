import React from "react";
import {Input} from "react-bootstrap";

import filterForm from "app/components/higherOrder/filterForm";


class FilterForm extends React.Component {
    render() {
        const {collection, handleChange, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Input
                    autoComplete="off"
                    autoFocus={true}
                    label="First Name"
                    onChange={handleChange}
                    name="first_name"
                    type="text"
                    value={collection.query.get("first_name")}
                />
                <Input
                    autoComplete="off"
                    label="Last Name"
                    onChange={handleChange}
                    name="last_name"
                    type="text"
                    value={collection.query.get("last_name")}
                />
                <input type="submit" className="hidden"/>
            </form>
        );
    }
}

export default filterForm(FilterForm);
