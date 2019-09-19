import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import globe from './globe.svg';
import NavDropdown from "react-bootstrap/NavDropdown";
import {Redirect} from 'react-router'

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
                        <Nav.Item className="nav-item link">
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        {/*<Nav.Item className="nav-item link p-2">
                            <div className="text-uppercase">europe:</div>
                            <div>
                                <Link to="/bySubregion/europe" className="mr-2">Subregions</Link>
                                <Link to="/byLanguage/europe">Languages</Link>
                            </div>
                        </Nav.Item>*/}
                        <NavDropdown title="Europe" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/europe"
                                  className="link-label mt-1 mb-1">Subregions</Link>
                            <Link to="/byLanguage/europe"
                                  className="link-label mt-1 mb-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Americas" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/americas"
                                  className="link-label mt-1 mb-1">Subregions</Link>
                            <Link to="/byLanguage/americas"
                                  className="link-label mt-1 mb-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Asia" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/asia"
                                  className="link-label mt-1 mb-1">Subregions</Link>
                            <Link to="/byLanguage/asia"
                                  className="link-label mt-1 mb-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Africa" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/africa"
                                  className="link-label mt-1 mb-1">Subregions</Link>
                            <Link to="/byLanguage/africa"
                                  className="link-label mt-1 mb-1">Languages</Link>
                        </NavDropdown>
                        <NavDropdown title="Oceania" id="Europe-nav-dropdown" className="link">
                            <Link to="/bySubregion/oceania"
                                  className="link-label mt-1 mb-1">Subregions</Link>
                            <Link to="/byLanguage/oceania"
                                  className="link-label mt-1 mb-1">Languages</Link>
                        </NavDropdown>
                        <Nav.Item className="nav-item link">
                            <Link to="/favorites">Favorites</Link>
                        </Nav.Item>
                    </Nav>
                    {/*
                        <Nav.Link>
                            <Link to='/' className="link-label">
                                Home
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Europe" id="Europe-nav-dropdown">
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/bySubregion/europe' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/byLanguage/europe' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Americas" id="Americas-nav-dropdown">
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/bySubregion/americas' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/byLanguage/americas' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Asia" id="Asia-nav-dropdown">
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/bySubregion/asia' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/byLanguage/asia' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Africa" id="Africa-nav-dropdown">
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/bySubregion/africa' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/byLanguage/africa' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Oceania" id="Oceania-nav-dropdown">
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/bySubregion/oceania' className="link-label">
                                    Subregions
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="javascript:void(0);"
                                onClick={() = {

                            }}>
                                <Link to='/byLanguage/oceania' className="link-label">
                                    Languages
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#favs">My favorite countries</Nav.Link>
                        */}
                {/*</Nav>*/}
            </Navbar.Collapse>
        </Navbar>
        </header>
    );
};

export default NavbarRegions;