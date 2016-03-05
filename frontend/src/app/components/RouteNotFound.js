import React from "react";


class RouteNotFound extends React.Component {
    render() {
        return(
            <div className="error-page">
                <h2 className="headline text-yellow"> 404</h2>
                <div className="error-content">
                    <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

                    <p className="text-center">
                        We could not find the page you were looking for.
                    </p>
                </div>
            </div>
        );
    }
}

export default RouteNotFound;
