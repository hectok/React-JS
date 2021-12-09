import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const sesion = useSelector(state => state).sesion;
    return (
        <Route
            {...rest}
            render={ props => {
                if(sesion) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    );
};