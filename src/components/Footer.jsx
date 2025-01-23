import React from 'react';
import github from '../img/github.png';
import '../css/footer.css';
import twitter from '../img/twitter.png';
import insta from '../img/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-block">
            <div className="john-doe-info">
                <h5 className="john-doe-info__title">John Doe</h5>
                <address>
                    40 Rue Laure Diebold<br></br>
                    69009 Lyon, France<br></br>
                    Téléphone : 06 20 30 40 50
                </address>
                <div className="john-doe-info__social">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                        <img src={twitter} width="30px" alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img src={insta} width="30px" alt="instagram" />
                    </a>
                </div>
            </div>
            <div className="pages">
                <h5>Liens utiles</h5>
                <ul className="pages__style__links">
                    <li className="">
                        <a className="pages__link" href="/accueil">Accueil</a>
                    </li>
                    <li className="">
                        <a className="pages__link" href="/services">Services</a>
                    </li>
                    <li className="">
                        <a className="pages__link" href="/contact">Me contacter</a>
                    </li>
                    <li className="">
                        <a className="pages__link" href="/mentions">Mentions légales</a>
                    </li>
                </ul>
            </div>
            <div className="realisations">
                <h5>Mes dernières réalisations</h5>
                <ul className="realisations__style__links">
                    <li className="">
                        <a className="realisations__link" href="/realisations">Fresh food</a>
                    </li>
                    <li className="">
                        <a className="realisations__link" href="/realisations">Restaurant Akira</a>
                    </li>
                    <li className="">
                        <a className="realisations__link" href="/realisations">Espace bien-être</a>
                    </li>
                </ul>
            </div>
            <div className="articles">
            <h5>Mes dernièrs articles</h5>
                <ul className="articles__style__links">
                    <li className="">
                        <a className="articles__link" href="/blog">Coder son site en HTML/CSS</a>
                    </li>
                    <li className="">
                        <a className="articles__link" href="/blog">Vendre ses produits sur le web</a>
                    </li>
                    <li className="">
                        <a className="articles__link" href="/blog">Se positionner sur Google</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
