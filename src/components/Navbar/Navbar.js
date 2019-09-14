import React from 'react';
import './style.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import globe from './globe.svg';
import NavDropdown from "react-bootstrap/NavDropdown";
import {BrowserRouter as Router} from "react-router-dom";

const NavbarRegions = () => {
    return (
        <header className="bg-light">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        alt="Globe logo"
                        src={globe}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                    />
                    Countries DB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Europe" id="Europe-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Subregions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Languages</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Americas" id="Americas-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Subregions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Languages</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Asia" id="Asia-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Subregions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Languages</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Africa" id="Africa-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Subregions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Languages</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Oceania" id="Oceania-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Subregions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Languages</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#favs">My favorite countries</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavbarRegions;