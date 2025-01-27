import React from 'react';
import coder from '../img/coder.jpg';
import vendre from '../img/croissance.jpg';
import google from '../img/google.jpg';
import design from '../img/screens.jpg';
import seo2 from '../img/seo.jpg';
import learn from '../img/technos.png';

const ArticlesBlog = () => {
  return (
    <div className="row justify-content-center">
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={coder} className="card-img-top" alt="code"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Coder son site en HTML/CSS</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 22 août 2022
            </div>
        </div>
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={vendre} className="card-img-top" alt="croissance"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Vendre ses produits sur le web</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 2O août 2022
            </div>
        </div>
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={google} className="card-img-top" alt="google"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Se positionner sur Google</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 01 août 2022
            </div>
        </div>
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={design} className="card-img-top" alt="responsive design"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Coder en responsive design</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 31 juillet 2022
            </div>
        </div>
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={seo2} className="card-img-top" alt="seo"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Techniques de référencement</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 30 juillet 2022
            </div>
        </div>
        <div className="card p-0 m-2" style={{width: "20rem"}}>
            <img src={learn} className="card-img-top" alt="apprendre"/>
            <div className="card-body">
                <h4 className="card-title fw-bold">Apprendre à coder</h4>
                <p className="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer">
            Publié le 12 juillet 2022
            </div>
        </div>
    </div>
  )
}

export default ArticlesBlog