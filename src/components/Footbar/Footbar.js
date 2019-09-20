import React from 'react';
import './style.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footbar = () => {
    return (
        <footer className="bg-light border-success border-top">
            <Container className='p-3'>
                <Row>
                    <Col xs={9} className="text-success font-weight-bold align-middle">Created by Stan Borovko 2019</Col>
                    <Col xs={3} className="tech d-flex justify-content-around">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="react"/>
                        <img src="http://www.alienfactory.co.uk/images/articles/2019/fantom-redux.icon.png" alt="redux"/>
                        <img src="https://www.schemecolor.com/wp-content/uploads/javascript-logo.png" alt="JS"/>
                        <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="html"/>
                        <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-8b61de4c84033266e15317a6eb9fda2d-css3.png" alt="css"/>
                        <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/057/square_256/scsslogo.png" alt="scss"/>
                        <img src="https://equestsolutions.net/wp-content/uploads/2014/08/bootstrap-logo.jpg" alt="bootstrap"/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footbar;