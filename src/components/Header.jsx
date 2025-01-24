import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body text-uppercase" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand text-white" href="/">
                    <img src="/apple-touch-icon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" /> 
                    <span> John Doe</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/accueil">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/realisations">Réalisations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Me contacter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
