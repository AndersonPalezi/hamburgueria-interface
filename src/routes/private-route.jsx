import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export function PrivateRoute({ component: Component, ...rest }) {
    const user = localStorage.getItem("CodeByte_Burger_Bar:userData");
    return user ? <Component {...rest} /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
