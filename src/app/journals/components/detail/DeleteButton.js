import React from "react";
import {Button} from "react-bootstrap";

import hasPermission from "app/components/higherOrder/hasPermission";


class DeleteButton extends React.Component {
    render() {
        return(
            <Button bsStyle="danger" block>
                Delete
            </Button>
        );
    }
}

export default hasPermission({
    permission: "auth.delete_user",
    component: DeleteButton
});
