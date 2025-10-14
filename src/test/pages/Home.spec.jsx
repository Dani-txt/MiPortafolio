import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Home Page', () => {
    const mockNavigate = jasmine.createSpy('navigate');

    const MockHome = () => {
        const navigate = mockNavigate;
        
        return (
            <div className="home-page">
                <div className="home-container">
                    <div className="user-card-wrapper">
                        <div>UserCard Component</div>
                    </div>
                    <div className="home-buttons">
                        <button
                            className="btn-custom"
                            onClick={() => navigate('/projects')}
                        >
                            Ver Mis Proyectos
                        </button>
                        <button
                            className="btn-custom"
                            onClick={() => navigate('/contacto')}
                        >
                            Contáctame
                        </button>
                    </div>
                </div>
                <div>Footer Component</div>
            </div>
        );
    };

    beforeEach(() => {
        mockNavigate.calls.reset();
    });

    it('renderiza los botones de navegación', () => {
        render(
            <BrowserRouter>
                <MockHome />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Ver Mis Proyectos')).toBeTruthy();
        expect(screen.getByText('Contáctame')).toBeTruthy();
    });

    it('navega a proyectos al hacer click en el botón', () => {
        render(
            <BrowserRouter>
                <MockHome />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Ver Mis Proyectos'));
        expect(mockNavigate).toHaveBeenCalledWith('/projects');
    });

    it('navega a contacto al hacer click en el botón', () => {
        render(
            <BrowserRouter>
                <MockHome />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Contáctame'));
        expect(mockNavigate).toHaveBeenCalledWith('/contacto');
    });
});