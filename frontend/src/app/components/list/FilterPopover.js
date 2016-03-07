import React from "react";
import classnames from "classnames";
import {OverlayTrigger, Popover} from "react-bootstrap";

import FilterPopoverTitle from "./FilterPopoverTitle";


class Filters extends React.Component {
    hidePopover = () => {
        const {refs: {popover}} = this;
        popover.hide();
    };

    render() {
        const {collection, FilterForm} = this.props;

        const classNames = classnames({
            "btn": true,
            "btn-box-tool": true,
            "btn-default": collection.isFilterActive()
        });

        return (
            <OverlayTrigger
                ref="popover"
                placement="bottom"
                trigger="click"
                rootClose
                overlay={
                    <Popover
                        id="hospital_filters"
                        title={
                            <FilterPopoverTitle
                                {...this.props}
                                hidePopover={this.hidePopover}
                            />
                        }
                    >
                        <FilterForm
                            {...this.props}
                            hidePopover={this.hidePopover}
                        />
                    </Popover>
                }
            >
                <button title="Filter collection" className={classNames}>
                    <i className="fa fa-fw fa-filter"/>
                </button>
            </OverlayTrigger>
        );
    }
}

export default Filters;
