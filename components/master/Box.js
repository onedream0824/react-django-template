import React from "react";
import {Box} from "adminlte";

import LinkedListGroup from "app/components/LinkedListGroup";
import Pagination from "app/components/Pagination";
import RefreshButton from "app/components/RefreshButton";
import SearchBox from "app/components/SearchBox";

import FilterPopover from "./FilterPopover";


class MasterBox extends React.Component {
    render() {
        const {collection} = this.props;

        return (
            <Box.Wrapper>
                <Box.Header>
                    <Box.Title>{collection.title}</Box.Title>
                    <Box.Tools>
                        <FilterPopover {...this.props}/>
                        <RefreshButton {...this.props}/>
                    </Box.Tools>
                </Box.Header>
                <Box.Body>
                    <SearchBox {...this.props}/>
                    <LinkedListGroup {...this.props}/>
                    <Pagination {...this.props}/>
                </Box.Body>
            </Box.Wrapper>
        );
    }
}

export default MasterBox;
