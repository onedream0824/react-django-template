import React from "react";
import {Button, ButtonGroup} from "react-bootstrap";


class VerifiedFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filter: "all"};
    }

    handleClick = (key, value) => {
        const {actions, collection, params} = this.props;
        const {router} = this.context;

        const query = collection.get("query").withMutations((map) => {
            map.set("page", 1);
            map.set("user", params.user);
            map.set("verified", value);
        });

        actions.fetchCollection({collection, query});
        router.push(collection.appUrl(params));
        this.setState({filter: key});
    };

    render() {
        const {filter} = this.state;
        
        return (
            <ButtonGroup justified style={{paddingBottom: "10px"}}>
                <ButtonGroup>
                    <Button
                        bsStyle={filter === "all" ? "primary" : "default"}
                        bsSize="small"
                        onClick={this.handleClick.bind(null, "all", "")}
                    >
                        All
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button
                        bsStyle={filter === "verified" ? "primary" : "default"}
                        bsSize="small"
                        onClick={this.handleClick.bind(null, "verified", "True")}
                    >
                        Verified
                    </Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button
                        bsStyle={filter === "unverified" ? "primary" : "default"}
                        bsSize="small"
                        onClick={this.handleClick.bind(null, "unverified", "False")}
                    >
                        Unverified
                    </Button>
                </ButtonGroup>
            </ButtonGroup>
        );
    }
}

VerifiedFilters.contextTypes = {
    router: React.PropTypes.object
};


export default VerifiedFilters;
