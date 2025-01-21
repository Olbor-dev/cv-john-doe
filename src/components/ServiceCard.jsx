import React from 'react';
import screen from '../img/pc.png';
import dev from '../img/developpement-web.png';
import seo from '../img/seo.png';

const ServiceCard = () => {
  return (
    <div class="row justify-content-center">
        <div class="card m-2" style={{width: "18rem"}}>
            <img src={screen} class="rounded mx-auto d-block mt-4" alt="écran" width="50" />
            <div class="card-body">
                <h5 class="card-title text-uppercase text-center p-3">UX Design</h5>
                <p class="card-text text-center p-2">L'<strong>UX design</strong> est une methode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation à l'internaute.</p>
            </div>
        </div>
        <div class="card m-2" style={{width: "18rem"}}>
            <img src={dev} class="rounded mx-auto d-block mt-4" alt="écran" width="50" />
            <div class="card-body">
                <h5 class="card-title text-uppercase text-center p-3">Développement web</h5>
                <p class="card-text text-center p-2">Le <strong>développement de site web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
            </div>
        </div>
        <div class="card m-2" style={{width: "18rem"}}>
            <img src={seo} class="rounded mx-auto d-block mt-4" alt="écran" width="50" />
            <div class="card-body">
                <h5 class="card-title text-uppercase text-center p-3">Référencement</h5>
                <p class="card-text text-center p-2">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard