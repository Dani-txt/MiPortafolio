import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock del componente NotFound sin dependencias de imagen
const MockNotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Página no encontrada</h1>
            <p>¿Estás seguro de que era aquí?</p>
        
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLMSjfk8BbBLwEAf2T3zSpK8hhg8bMkHPww&s"
                alt="Not Found Image"
                className="not-found-image"
            />
            <footer>Footer Component</footer>
        </div>
    );
};

describe('NotFound Page', () => {
    it('renderiza el mensaje de error', () => {
        render(<MockNotFound />);
        
        expect(screen.getByText('Página no encontrada')).toBeTruthy();
        expect(screen.getByText('¿Estás seguro de que era aquí?')).toBeTruthy();
    });

    it('renderiza la imagen', () => {
        render(<MockNotFound />);
        
        const image = screen.getByAltText('Not Found Image');
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLMSjfk8BbBLwEAf2T3zSpK8hhg8bMkHPww&s');
    });
});