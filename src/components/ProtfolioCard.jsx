import React from 'react';
import fresh from '../img/fresh-food.jpg';
import akira from '../img/restaurant-japonais.jpg';
import espace from '../img/espace-bien-etre.jpg';

const ProtfolioCard = () => {
  return (
    <div class="row justify-content-center">
        <div class="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={fresh} class="card-img-top" alt="fresh food"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Fresh food</h4>
                <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                <a href="/" class="btn btn-outline-primary">Voir</a>
            </div>
            <div class="card-footer">
            Site réalisé avec PHP et MySQL
            </div>
        </div>
        <div class="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={akira} class="card-img-top" alt="fresh food"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Restaurant Akira</h4>
                <p class="card-text">Réalisation d'un site vitrine.</p>
                <a href="/" class="btn btn-outline-primary">Voir</a>
            </div>
            <div class="card-footer">
            Site réalisé avec WordPress
            </div>
        </div>
        <div class="card text-center p-0 m-2" style={{width: "20rem"}}>
            <img src={espace} class="card-img-top" alt="fresh food"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Espace bien-être</h4>
                <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                <a href="/" class="btn btn-outline-primary">Voir</a>
            </div>
            <div class="card-footer">
            Site réalisé avec HTML et CSS
            </div>
        </div>                
    </div>
  )
}

export default ProtfolioCard