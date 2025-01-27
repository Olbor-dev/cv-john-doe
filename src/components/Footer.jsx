import React, { useState, useEffect } from 'react';
import github from '../img/github.png';
import '../css/footer.css';
import twitter from '../img/twitter.png';
import insta from '../img/instagram.png';

const Footer = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 300); // Affiche le bouton après 300px de défilement
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
                    <li>
                        <a className="pages__link" href="/accueil">Accueil</a>
                    </li>
                    <li>
                        <a className="pages__link" href="/services">Services</a>
                    </li>
                    <li>
                        <a className="pages__link" href="/contact">Me contacter</a>
                    </li>
                    <li>
                        <a className="pages__link" href="/mentions">Mentions légales</a>
                    </li>
                </ul>
            </div>
            <div className="realisations">
                <h5>Mes dernières réalisations</h5>
                <ul className="realisations__style__links">
                    <li>
                        <a className="realisations__link" href="/realisations">Fresh food</a>
                    </li>
                    <li>
                        <a className="realisations__link" href="/realisations">Restaurant Akira</a>
                    </li>
                    <li>
                        <a className="realisations__link" href="/realisations">Espace bien-être</a>
                    </li>
                </ul>
            </div>
            <div className="articles">
            <h5>Mes dernièrs articles</h5>
                <ul className="articles__style__links">
                    <li>
                        <a className="articles__link" href="/blog">Coder son site en HTML/CSS</a>
                    </li>
                    <li>
                        <a className="articles__link" href="/blog">Vendre ses produits sur le web</a>
                    </li>
                    <li>
                        <a className="articles__link" href="/blog">Se positionner sur Google</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <span>Site créé par Olivier Bordage</span>

            {showButton && (
                <button 
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Remonter
                </button>
            )}
        </div>
    </footer>
  )
}

export default Footer;
