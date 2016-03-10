import React from "react";
import classnames from "classnames";
import {Input} from "react-bootstrap";


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        const {collection} = props;
        this.state = {query: collection.get("query")};
    }

    handleClear = () => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;
        let {query} = this.state;

        query = query.withMutations((map) => {
            map.set("page", 1);
            map.set("search", "");
        });

        actions.fetchCollection({collection, query});
        router.push(collection.appUrl(params));
    };

    handleSubmit = (evnt) => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;
        let {query} = this.state;

        query = query.set("page", 1);
        evnt.preventDefault();
        actions.fetchCollection({collection, query});
        router.replace(collection.appUrl(params));
    };

    handleChange = (evnt) => {
        let {query} = this.state;
        query = query.set("search", evnt.target.value);
        this.setState({query});
    };

    render() {
        const {autoFocus = false} = this.props;
        const {query} = this.state;
        const search = query.get("search");

        const submitButton = classnames({
            "btn": true,
            "btn-default": true,
            "hide": search.length !== 0
        });

        const clearButton = classnames({
            "btn": true,
            "btn-default": true,
            "hide": search.length === 0
        });

        return (
            <form style={{paddingBottom: "10px"}} onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <Input
                        autoFocus={autoFocus}
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={search}
                    />
                    <span className="input-group-btn">
                        <button
                            className={submitButton}
                            type="submit"
                        >
                            <i className="fa fa-fw fa-search"/>
                        </button>

                        <button
                            onClick={this.handleClear}
                            className={clearButton}
                            type="button"
                        >
                            <i className="fa fa-fw fa-times"/>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}

SearchBox.contextTypes = {
    router: React.PropTypes.object
};

export default SearchBox;
