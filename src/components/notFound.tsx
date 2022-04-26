import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => (
    <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
    </div>
);
