import React from 'react';
import ServiceCard from '../components/ServiceCard';
import banner from '../img/banner.jpg';

const Services = () => {
  return (
    <main>
        <img src={banner} alt="bannière" class="img-fluid w-100 pb-2" />
        <div class="container-fluid pb-4">
            <h1 class="text-center text-uppercase mt-3">Mon offre de services</h1>
            <p class="text-center">Voici les prestations sur lesquelle je peux intervenir.</p>
            <hr class="border border-primary border-3 opacity-75 mx-auto mb-4" width="20%" />
            <ServiceCard />
        </div>
    </main>
  )
}

export default Services