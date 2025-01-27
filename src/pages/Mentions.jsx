import React from 'react';
import { Helmet } from 'react-helmet';

const Mentions = () => {
  return (
    <div>
        <Helmet>
            <meta name="robots" content="noindex" />
        </Helmet>
    
        <main>
            <div className="container-fluid pb-4">
                <h1 className="text-center text-uppercase mt-3">Mentions légales</h1>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="20%" />    
            </div>
            <div className="container mb-5">
            <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h5>Olivier Bordage</h5>
                            <p>24 rue Jules Ferry<br></br>82700 Montech</p>
                            <p>06 00 00 00 00</p>
                            <a href="mailto:olbor.dev@gmail.com">olbor.dev@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <h5>alwaysdata</h5>
                            <a href="https://alwaaysdata.com" target="_blank" rel="noreferrer">https://alwaysdata.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Site développé par Olivier Bordage, étudiant du CEF.</p>
                            <p>Les images libres de droits sont issue de <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>.</p>
                            <p>Les iconnes libres de droit sont issue de <a href="https://flaticon.com" target="_blank" rel="noreferrer">Flaticon</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Mentions