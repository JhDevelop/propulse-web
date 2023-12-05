import React from "react";

import './PricePage.css';

export default function PricePage() {
    return (
        <div className="precios-container">
            <title>Precios - Active Online Software Page</title>
            <meta
                property="og:title"
                content="Precios - Active Online Software Page"
            />
            <div className="precios-divhead"></div>
            <div className="precios-container03">
                <section className="precios-features">
                    <div className="precios-title">
                        <span className="precios-text06">Nuestros Servicios Incluyen</span>
                    </div>
                    <div className="precios-cards">
                        <div className="precios-container04">
                            <div className="precios-schedule card">
                                <img
                                    alt="pastedImage"
                                    src="/pastedimage-fii6m-200h.png"
                                    className="precios-icon2"
                                />
                                <span className="precios-text07">
                                    <br></br>
                                    <span>Resultados Precisos y Rápidos</span>
                                </span>
                                <span className="precios-text10">
                                    Encuentra candidatos que coincidan perfectamente con tus
                                    requisitos en cuestión de segundos.
                                </span>
                            </div>
                            <div className="precios-publish card">
                                <img
                                    alt="pastedImage"
                                    src="/pastedimage-mimg-200h.png"
                                    className="precios-icon3"
                                />
                                <span className="precios-text11">
                                    Publicación Sencilla de Ofertas
                                </span>
                                <span className="precios-text12">
                                    Anuncia tus oportunidades laborales en minutos y llega a los
                                    candidatos ideales.
                                </span>
                            </div>
                        </div>
                        <div className="precios-container05">
                            <div className="card precios-analyze">
                                <img
                                    alt="pastedImage"
                                    src="/pastedimage-l6p-200h.png"
                                    className="precios-icon4"
                                />
                                <span className="precios-text13">
                                    Navegación Intuitiva y Diseño Amigable
                                </span>
                                <span className="precios-text14">
                                    <span>
                                        Una interfaz amigable y fácil de usar para que encuentres lo
                                        que necesitas rápidamente.
                                    </span>
                                    <br></br>
                                </span>
                            </div>
                            <div className="card">
                                <img
                                    alt="pastedImage"
                                    src="/pastedimage-vyi5-200h.png"
                                    className="precios-icon5"
                                />
                                <span className="precios-text17">
                                    Búsqueda de Talento sin Complicaciones
                                </span>
                                <span className="precios-text18">
                                    Simplificamos el proceso de selección, conectando empresas con
                                    candidatos calificados en segundos.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="precios-pricing">
                    <div className="precios-container06">
                        <div className="precios-pricing-card">
                            <span className="precios-text19">Free</span>
                            <div className="precios-container07">
                                <span className="precios-text20">
                                    <span>$</span>
                                    <span></span>
                                </span>
                                <span className="precios-text23">0</span>
                            </div>
                            <div className="precios-container08">
                                <span className="precios-text24">✔</span>
                            </div>
                            <button className="precios-button button">Learn More</button>
                        </div>
                        <div className="precios-pricing-card1">
                            <span className="precios-text25">basic</span>
                            <div className="precios-container09">
                                <span className="precios-text26">
                                    <span>$</span>
                                    <span></span>
                                </span>
                                <span className="precios-text29">199</span>
                                <span className="precios-text30">
                                    <span>/ monthly</span>
                                </span>
                            </div>
                            <span className="precios-text32">
                                Billed annualy or $160 month-to-month.
                            </span>
                            <div className="precios-container10">
                                <span className="precios-text33">✔</span>
                            </div>
                            <button className="precios-button1 button">Learn More</button>
                        </div>
                        <div className="precios-pricing-card2">
                            <span className="precios-text34">Pro</span>
                            <div className="precios-container11">
                                <span className="precios-text35">
                                    <span>$</span>
                                    <span></span>
                                </span>
                                <span className="precios-text38">299</span>
                                <span className="precios-text39">
                                    <span>/ monthly</span>
                                </span>
                            </div>
                            <span className="precios-text41">
                                Billed annualy or $250 month-to-month.
                            </span>
                            <div className="precios-container12">
                                <span className="precios-text42">
                                    ✔
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </div>
                            <button className="precios-button2 button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="precios-footer">
                <div className="precios-bottom">
                    <img
                        alt="pastedImage"
                        src="/external/pastedimage-lzla-200h-200h.png"
                        className="precios-pasted-image1"
                    />
                    <span className="precios-text43">Copyright © Active - 2022</span>
                </div>
            </footer>
        </div>
    );
}