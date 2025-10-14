import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/molecules/Footer';

describe('Footer Component', () => {
    it('renderiza enlaces de redes sociales', () => {
        render(<Footer />);
        
        // Verificar que existe al menos un enlace
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
        
        // Verificar que los enlaces tienen estructura correcta
        links.forEach(link => {
            expect(link.getAttribute('href')).toBeTruthy();
            expect(link.getAttribute('target')).toBe('_blank');
            expect(link.getAttribute('rel')).toBe('noopener noreferrer');
        });
    });

    it('aplica clases CSS correctamente', () => {
        render(<Footer className="custom-footer" />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toHaveClass('custom-footer');
        expect(footer).toHaveClass('footer');
    });

    it('renderiza contenido dentro del footer', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeTruthy();
        expect(footer.textContent).toBeTruthy();
    });
});