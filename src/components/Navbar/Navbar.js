import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import globe from './globe.svg';
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarRegions = () => {
    return (
        <header className="bg-light border-success border-bottom">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">
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
                        <Nav.Item className="nav-item link nav-link">
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        <NavDropdown title="Europe" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/europe"
                                  className="link-label m-1">Subregions</Link>
                            <Link to="/byLanguage/europe"
                                  className="link-label m-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Americas" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/americas"
                                  className="link-label m-1">Subregions</Link>
                            <Link to="/byLanguage/americas"
                                  className="link-label m-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Asia" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/asia"
                                  className="link-label m-1">Subregions</Link>
                            <Link to="/byLanguage/asia"
                                  className="link-label m-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Africa" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/africa"
                                  className="link-label m-1">Subregions</Link>
                            <Link to="/byLanguage/africa"
                                  className="link-label m-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Oceania" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/oceania"
                                  className="link-label m-1">Subregions</Link>
                            <Link to="/byLanguage/oceania"
                                  className="link-label m-1">Languages</Link>
                        </NavDropdown>
                        <Nav.Item className="nav-item link nav-link">
                            <Link to="/favorites">Favorites</Link>
                        </Nav.Item>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>
    );
};

export default NavbarRegions;