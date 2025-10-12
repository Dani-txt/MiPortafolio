import React from 'react';
import Image from '../components/atoms/Image';
import Footer from '../components/molecules/Footer';
import '../styles/pages/NotFound.css';

const image = {
    src: '/img/notFound/error.webp',
    alt: 'Página no encontrada',
}

function NotFound() {
    return (
        <div className="background-container">
            <div className="notfound-page">
                <div className="not-found-container transparent-container">
                    <h1>Página no encontrada</h1>
                    <p>¿Te perdiste mi rey?</p>
                
                    <Image src={image.src} alt={image.alt} className="not-found-image" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;