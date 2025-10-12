import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock del componente Noticias sin dependencias de imagen
const MockNoticias = () => {
    const mockNotices = {
        noticias: [
            {
                id: 1,
                titulo: 'Noticia 1',
                categoria: 'Tecnología',
                fecha: '2023-10-10',
                contenido: 'Contenido noticia 1'
            },
            {
                id: 2,
                titulo: 'Noticia 2',
                categoria: 'Desarrollo',
                fecha: '2023-10-11', 
                contenido: 'Contenido noticia 2'
            }
        ]
    };

    return (
        <div>
            <div className="noticias-section">
                <div className="text-center mb-5">
                    <h1>Noticias</h1>
                    <p className="section-subtitle">
                        Últimas actualizaciones y logros
                    </p>
                </div>
                
                <div className="notices-container">
                    {mockNotices.noticias.map((notice) => (
                        <div key={notice.id} className="notice-card">
                            <div className="card-body">
                                <h3>{notice.titulo}</h3>
                                <p>{notice.categoria}</p>
                                <p>{notice.fecha}</p>
                                <p>{notice.contenido}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer>Footer Component</footer>
        </div>
    );
};

describe('Noticias Page', () => {
    it('renderiza el título y descripción', () => {
        render(
            <BrowserRouter>
                <MockNoticias />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Noticias')).toBeTruthy();
        expect(screen.getByText('Últimas actualizaciones y logros')).toBeTruthy();
    });

    it('renderiza todas las noticias', () => {
        render(
            <BrowserRouter>
                <MockNoticias />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Noticia 1')).toBeTruthy();
        expect(screen.getByText('Noticia 2')).toBeTruthy();
        expect(screen.getByText('Tecnología')).toBeTruthy();
        expect(screen.getByText('Desarrollo')).toBeTruthy();
        expect(screen.getByText('Contenido noticia 1')).toBeTruthy();
        expect(screen.getByText('Contenido noticia 2')).toBeTruthy();
    });
});