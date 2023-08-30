import React from 'react'
import logo from '../img/logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <input type="checkbox" id="check" />
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <br />
                <div className="links">
                    <a className="navlinks" href="#ourServices">Our Services</a>
                    <a className="navlinks" href="#ourMenu">Our Menu</a>
                    <a className="navlinks" href="#ourTeam">Our Team</a>
                    <a className="navlinks" href="#testiomials">Testimonials</a>
                    <a className="navlinks" href="#visitUs">Visit Us</a>
                    <a className="navlinks" href="#aboutUs">About Us</a>
                </div>
                <div className="navBtn">
                    <label htmlFor="check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}
