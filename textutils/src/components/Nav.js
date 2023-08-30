import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function ChildComponent(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-3 my-2`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TextUtils</Link> {/* Use Link component */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/light-dark-mode" className={`form-check-label nav-link active`}>
                                    Tesinomials
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to={"https://www.google.com/"} className="dropdown-item">Google</Link></li>
                                    <li><Link to={"https://www.facebook.com/"} className="dropdown-item">FaceBook</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to={"https://www.instagram.com/"} className="dropdown-item">Insta</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
                            <label class="form-check-label" for="flexSwitchCheckDefault" >Change to Dark</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default ChildComponent;