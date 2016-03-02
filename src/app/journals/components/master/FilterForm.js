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
                    label="Date"
                    onChange={handleChange}
                    name="date"
                    type="text"
                    value={collection.query.get("date")}
                />
                <input type="submit" className="hidden"/>
            </form>
        );
    }
}

export default filterForm(FilterForm);
