import React from 'react';
import coder from '../img/coder.jpg';
import vendre from '../img/croissance.jpg';
import google from '../img/google.jpg';
import design from '../img/screens.jpg';
import seo2 from '../img/seo.jpg';
import learn from '../img/technos.png';

const ArticlesBlog = () => {
  return (
    <div class="row justify-content-center">
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={coder} class="card-img-top" alt="code"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Coder son site en HTML/CSS</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 22 août 2022
            </div>
        </div>
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={vendre} class="card-img-top" alt="croissance"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Vendre ses produits sur le web</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 2O août 2022
            </div>
        </div>
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={google} class="card-img-top" alt="google"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Se positionner sur Google</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 01 août 2022
            </div>
        </div>
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={design} class="card-img-top" alt="responsive design"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Coder en responsive design</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 31 juillet 2022
            </div>
        </div>
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={seo2} class="card-img-top" alt="seo"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Techniques de référencement</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 30 juillet 2022
            </div>
        </div>
        <div class="card p-0 m-2" style={{width: "20rem"}}>
            <img src={learn} class="card-img-top" alt="apprendre"/>
            <div class="card-body">
                <h4 class="card-title fw-bold">Apprendre à coder</h4>
                <p class="card-text">Suspendisse potenti. Nam risus magna, mollis non bibendum ac, pharetra at neque.</p>
                <a href="/" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer">
            Publié le 12 juillet 2022
            </div>
        </div>
    </div>
  )
}

export default ArticlesBlog