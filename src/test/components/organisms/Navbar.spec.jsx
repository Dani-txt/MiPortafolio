import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../../components/organisms/NavBar';

describe('NavBar Component', () => {
    it('renderiza la marca del portafolio', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
        expect(screen.getByText('Mi Portafolio')).toBeTruthy();
    });

    it('renderiza los enlaces de navegación', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
        expect(screen.getByText('Inicio')).toBeTruthy();
        expect(screen.getByText('Proyectos')).toBeTruthy();
        expect(screen.getByText('Noticias')).toBeTruthy();
        expect(screen.getByText('Contacto')).toBeTruthy();
    });

    it('los enlaces tienen las URLs correctas', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );
        expect(screen.getByText('Inicio').closest('a').getAttribute('href')).toBe('/');
        expect(screen.getByText('Proyectos').closest('a').getAttribute('href')).toBe('/projects');
        expect(screen.getByText('Noticias').closest('a').getAttribute('href')).toBe('/noticias');
        expect(screen.getByText('Contacto').closest('a').getAttribute('href')).toBe('/contacto');
    });
});