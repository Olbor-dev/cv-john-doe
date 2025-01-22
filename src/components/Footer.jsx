import React from 'react';
import github from '../img/github.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div class="footer-block">
            <div class="address">
                <h5><strong>John Doe</strong></h5>
                <address>
                    40 Rue Laure Diebold<br></br>
                    69009 Lyon, France<br></br>
                    Téléphone : 06 20 30 40 50
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
            <div class="pages">
                <h5>Liens utiles</h5>
                <ul class="pages__style__links">
                    <li class="">
                        <a class="pages__link" href="/accueil">Accueil</a>
                    </li>
                    <li class="">
                        <a class="pages__link" href="/services">Services</a>
                    </li>
                    <li class="">
                        <a class="pages__link" href="/contact">Me contacter</a>
                    </li>
                    <li class="">
                        <a class="pages__link" href="/mentions">Mentions légales</a>
                    </li>
                </ul>
            </div>
            <div class="realisations">
                <h5>Mes dernières réalisations</h5>
                <ul class="realisations__style__links">
                    <li class="">
                        <a class="realisations__link" href="/realisations">Fresh food</a>
                    </li>
                    <li class="">
                        <a class="realisations__link" href="/realisations">Restaurant Akira</a>
                    </li>
                    <li class="">
                        <a class="realisations__link" href="/realisations">Espace bien-être</a>
                    </li>
                </ul>
            </div>
            <div class="articles">
            <h5>Mes dernièrs articles</h5>
                <ul class="articles__style__links">
                    <li class="">
                        <a class="articles__link" href="/blog">Coder son site en HTML/CSS</a>
                    </li>
                    <li class="">
                        <a class="articles__link" href="/blog">Vendre ses produits sur le web</a>
                    </li>
                    <li class="">
                        <a class="articles__link" href="/blog">Se positionner sur Google</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
