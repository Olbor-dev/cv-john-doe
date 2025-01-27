import React from 'react';
import heroBg from '../img/hero-bg.jpg';
import johnDoe from '../img/john-doe-about.jpg';

const Accueil = () => {
    /* défilement jusqu'a "A propos" */
    const handleScrollToSection = () => {
        const section = document.getElementById('apropos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <main>
        <section className="pb-3">
            <div className="py-4"
                style={{
                    position: "relative",
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
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
                >
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center" style={{zIndex: 2}}>
                    <h1 className="p-2">Bonjour, je suis John Doe</h1>
                    <h2 className="p-2">Développeur web full stack</h2>
                    <button type="button" className="btn btn-primary" onClick={handleScrollToSection}>En savoir plus</button>
                </div>
            </div>
        </section>
        <section className="container" id="apropos">
            <div className="shadow p-3 mb-5 bg-body-tertiary row">
                <div className="col-md-6">
                    <h2>A propos</h2>
                    <hr className="border border-primary border-3 opacity-75" />
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                     Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                    <p>Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div className="col-md-6">
                    <img src={johnDoe} alt="Portrait John Doe" className="img-fluid w-100" />
                    <h3 className="mt-3">Mes compétences</h3>
                    <h5 className="mt-3">HTML 5</h5>
                    <div className="progress" role="progressbar" aria-label="HTML 5" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-danger" style={{width: "90%"}}>90%</div>
                    </div>
                    <h5 className="mt-3">CSS 3</h5>
                    <div className="progress" role="progressbar" aria-label="CSS 3" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-info" style={{width: "80%"}}>80%</div>
                    </div>
                    <h5 className="mt-3">Javascript</h5>
                    <div className="progress" role="progressbar" aria-label="Javascript" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-warning" style={{width: "70%"}}>70%</div>
                    </div>
                    <h5 className="mt-3">PHP</h5>
                    <div className="progress" role="progressbar" aria-label="PHP" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-success" style={{width: "60%"}}>60%</div>
                    </div>
                    <h5 className="mt-3">React</h5>
                    <div className="progress" role="progressbar" aria-label="React" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{width: "50%"}}>50%</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Accueil;