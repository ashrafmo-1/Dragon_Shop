"use client"
import React from 'react';
import './globals.css'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dynamic from "next/dynamic"

// navgation bar dinamic call by cleint side
const DinamicBtn = dynamic(() => import("../loignBtn/loginbtn"), {
    ssr: false,
})

const Nav = () => {
    return (
        <Navbar expand="lg" className="bg-dark" style={{zIndex: '99999'}}>
        <Container>
            <Link href="/" className='navbar-brand fw-bold fs-1'>Dragon_Store</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavBar className="me-auto gap-3">
                    <Link href="/" className='nav-link text-white'>Home</Link>
                    <Link href="/" className='nav-link text-white'>Link</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>Action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/"> mans </NavDropdown.Item>
                        <NavDropdown.Item href="/"> womans </NavDropdown.Item>
                        <NavDropdown.Item href="/"> childrens </NavDropdown.Item>
                    </NavDropdown>
                </NavBar>
                <DinamicBtn />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Nav