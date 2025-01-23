import React from 'react';
import contact from '../img/contact-bg.jpg';
import FormContact from '../components/FormContact';

const Contact = () => {
  return (
    <main>
        <div className="py-4"
            style={{
                position: "relative",
                backgroundImage: `url(${contact})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 105, 255, 0.5)", // Couleur et opacité
            zIndex: 1, // Superposition sur l'image de fond
            }}
        ></div>

            <div className="col container-fluid bg-white p-4" style={{ maxWidth: "1000px", borderRadius: "10px", zIndex: 2}}>
                <h1 className="text-center text-uppercase mt-3">Me contacter</h1>
                <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="20%" />
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mt-3">Formulaire de contact</h2>
                        <hr className="border border-primary border-2 opacity-75 mx-auto mb-4" />
                        <FormContact />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mt-3">Mes coordonnées</h2>
                        <hr className="border border-primary border-2 opacity-75 mx-auto mb-4" />
                        <address>
                            40 Rue Laurent Diebold, 69009 Lyon, France<br></br>
                            06 20 30 40 50
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.8107525318204!2d4.79798974209146!3d45.778464280136376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65ed6e7eb7%3A0xdf019d761f922e5!2sC%20E%20L%20A%20D!5e0!3m2!1sfr!2sfr!4v1737473658681!5m2!1sfr!2sfr" width="100%" height="400px" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map">
                        </iframe>
                    </div>
                </div>
            </div>  
        </div>
    </main>
  )
}

export default Contact