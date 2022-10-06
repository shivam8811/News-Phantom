import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import App from '../App';

const Navbar = () => {
    const location = useLocation();
    const checkLocation = (pathName) => {
        return location.pathname === `/${pathName}` ? "active bg-dark" : "bg-danger";
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className={`navbar-brand text-light p-2 rounded-pill ${location.pathname === "/" ? "active bg-secondary" : "bg-danger"}`} to="/">NewsPhantom</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-tabs bg-danger rounded">
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("business")}`} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("health")}`} aria-current="page" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("science")}`} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("technology")}`} to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("entertainment")}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link text-light ${checkLocation("sports")}`} to="/sports">Sports</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
