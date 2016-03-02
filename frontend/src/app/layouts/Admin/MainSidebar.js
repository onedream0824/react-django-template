import React from "react";
import {MainSidebar} from "adminlte";

const {Menu, Wrapper} = MainSidebar;


export default class LeftSidebar extends React.Component {
    render() {
        return (
            <Wrapper>
                <Menu />
            </Wrapper>
        );
    }
}
