import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body text-uppercase" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand text-white" href="#/Page-top">
                    <img src="/apple-touch-icon.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" /> 
                    <span> John Doe</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/accueil">Accueil</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/services">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/realisations">Réalisations</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/Blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/Contact">Me contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
