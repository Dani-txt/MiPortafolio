import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/molecules/Footer';
import User from '../../../data/user';

// Mock de user para las redes
jest.mock('../../../data/user', () => ({
    redes: [
        { nombre: 'GitHub', url: 'https://github.com/test', icono: 'github' },
        { nombre: 'Email', url: 'mailto:test@example.com', icono: 'email' },
        { nombre: 'LinkedIn', url: 'https://linkedin.com/in/test', icono: 'linkedin' }
    ]
}));

describe('Footer Component', () => {
    it('renderiza todos los enlaces de redes sociales', () => {
        render(<Footer />);
        User.redes.forEach(red => {
            expect(screen.getByText(red.nombre)).toBeTruthy();
        });
    });

    it('renderiza los enlaces con los href correctos', () => {
        render(<Footer />);
        User.redes.forEach(red => {
            const link = screen.getByText(red.nombre).closest('a');
            expect(link.getAttribute('href')).toBe(red.url);
        });
    });

    it('aplica clases CSS correctamente', () => {
        render(<Footer className="custom-footer" />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toHaveClass('custom-footer');
        expect(footer).toHaveClass('footer');
    });
});