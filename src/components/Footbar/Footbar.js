import React from 'react';
import './style.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footbar = () => {
    return (
        <footer className="bg-light">
            <Container className='p-3'>
                <Row>
                    <Col xs={9}>Created by Stan Borovko 2019</Col>
                    <Col xs={3}>Technologies</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footbar;