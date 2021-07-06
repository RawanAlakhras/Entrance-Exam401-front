import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Drinks</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link >
                    <Nav.Link href="/fav">fav</Nav.Link>
                </Navbar>
            </div>
        )
    }
}

export default Header
