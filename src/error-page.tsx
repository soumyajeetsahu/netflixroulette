import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
    };

    const errorMessageStyle: React.CSSProperties = {
        color: "#F65261",
    };

    return (
        <div style={containerStyle}>
            <h1 style={errorMessageStyle}>Oops!</h1>
            <p style={errorMessageStyle}>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorPage;
