import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";


const Error404 = () => {
    return (
        <Jumbotron className="bg-light text-center">
            <h1 className="text-danger">404! Page not found</h1>
            <p className="text-dark">
                Try it for another planet.
            </p>
            <p>
                <Link to="/" className="btn btn-outline-primary">Go to home page.</Link>
            </p>
        </Jumbotron>
    )
};

export default Error404;