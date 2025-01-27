import React from 'react';
import fresh from '../img/fresh-food.jpg';
import akira from '../img/restaurant-japonais.jpg';
import espace from '../img/espace-bien-etre.jpg';

const ProtfolioCard = () => {
  return (
    <div className="row justify-content-center">
        <div className="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={fresh} className="card-img-top" alt="fresh food"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Fresh food</h4>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                <a href="/" className="btn btn-outline-primary">Voir</a>
            </div>
            <div className="card-footer">
            Site réalisé avec PHP et MySQL
            </div>
        </div>
        <div className="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={akira} className="card-img-top" alt="fresh food"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Restaurant Akira</h4>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <a href="/" className="btn btn-outline-primary">Voir</a>
            </div>
            <div className="card-footer">
            Site réalisé avec WordPress
            </div>
        </div>
        <div className="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={espace} className="card-img-top" alt="fresh food"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Espace bien-être</h4>
                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                <a href="/" className="btn btn-outline-primary">Voir</a>
            </div>
            <div className="card-footer">
            Site réalisé avec HTML et CSS
            </div>
        </div>                
    </div>
  )
}

export default ProtfolioCard