import React from 'react';
import Image from '../components/atoms/Image';
import Footer from '../components/molecules/Footer';
import '../styles/pages/NotFound.css';

const image = {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLMSjfk8BbBLwEAf2T3zSpK8hhg8bMkHPww&s',
    alt: 'Not Found Image',
}

function NotFound() {
    return (
        <div className="background-container">
            <div className="notfound-page">
                <div className="not-found-container transparent-container">
                    <h1>Página no encontrada</h1>
                    <p>¿Estás seguro de que era aquí?</p>
                
                    <Image src={image.src} alt={image.alt} className="not-found-image" />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default NotFound;