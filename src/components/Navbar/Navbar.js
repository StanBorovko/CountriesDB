import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import globe from './globe.svg';
import NavDropdown from "react-bootstrap/NavDropdown";
import { Redirect } from 'react-router'

const NavbarRegions = () => {
    return (
        <header className="bg-light">
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
                        <Nav.Link>
                            <Link to='/' className="link-label">
                                Home
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Europe" id="Europe-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/bySubregion/europe' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/byLanguage/europe' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Americas" id="Americas-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/bySubregion/americas' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/byLanguage/americas' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Asia" id="Asia-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/bySubregion/asia' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/byLanguage/asia' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Africa" id="Africa-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/bySubregion/africa' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/byLanguage/africa' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Oceania" id="Oceania-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to='/bySubregion/oceania' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/byLanguage/oceania' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#favs">My favorite countries</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavbarRegions;