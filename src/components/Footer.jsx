import React from 'react';
import github from '../img/github.png';

export const Footer = () => {
  return (
    <footer class="bg-secondary">
        <div class="row">
            <div class="col">
                <h5>John Doe</h5>
                <address>
                    <p>40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                </address>
                <div class="d-flex flex-row justify-content-between">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <img src={github} width="30px" alt="github" />
                    </a>
                </div>
            </div>
            <div class="col">
            colonne 2
            </div>
            <div class="col">
            colonne 3
            </div>
            <div class="col">
            colonne 4
            </div>
        </div>
    </footer>
  )
}
