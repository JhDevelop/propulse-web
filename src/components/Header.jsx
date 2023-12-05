
import React from 'react';
import '../pages/Home.css';


export default function Header() {
  return (
    <div className='header-container'>
      <div className="header-page">
        <div className="home-desktop-navigation">
          <nav className="home-centered">
            <div className="home-left">
              <img
                alt="pastedImage"
                src="/external/pastedimage-hxow-200h.png"
                className="home-pasted-image"
              />
              <div className="home-links1"> 
                <span className="Link">Buscador  de Ofertas</span>
                <span className="Link">Precios</span>
              </div>
            </div>
            <div className="home-right">
              <span className="home-sign-in Link">Ingresar</span>
              <div className="home-get-started">
                <span className="home-text05">Iniciar</span>
              </div>
              <div id="open-mobile-menu" className="home-burger-menu">
                <img
                  alt="pastedImage"
                  src="/pastedimage-yxbd.svg"
                  className="home-mobile-menu-button"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

