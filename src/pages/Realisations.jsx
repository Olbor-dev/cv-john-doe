import React from 'react';
import ProtfolioCard from '../components/ProtfolioCard';
import banner from '../img/banner.jpg';

const Realisations = () => {
  return (
    <main>
        <img src={banner} alt="bannière" className="img-fluid w-100 pb-2" />
        <div className="container-fluid pb-4">
            <h1 className="text-center text-uppercase mt-3">Portfolio</h1>
            <p className="text-center">Voici quelque-unes de mes réalisation.</p>
            <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="20%" />
            <ProtfolioCard />
        </div>
    </main>
  )
}

export default Realisations