import React from 'react';
import github from '../img/github.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer class="bg-secondary">
        <div class="container p-4 text-center row">
            <div class="col">
                <h5>John Doe</h5>
                <address>
                    <p>40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                </address>
                <div class="d-flex flex-row justify-content-between">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                </div>
            </div>
            <div class="col">
                <h5>Liens utiles</h5>
                <ul>
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
                        <Link class="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Me contacter</Link>
                    </li>
                </ul>
            </div>
            <div class="col">
            colonne 3
            </div>
            <div class="col">
            colonne 4
            </div>
        </div>
    </footer>
  )
}

export default Footer;
