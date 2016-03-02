import React, {Component} from "react";


function Wrapper(props) {
    return (
        <aside className="main-sidebar">
            {props.children}
        </aside>
    );
}

export default Wrapper;
