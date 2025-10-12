import React from 'react';
import { render, screen } from '@testing-library/react';
import UserBody from '../../../components/molecules/UserBody';

describe('UserBody Component', () => {
    const mockUser = {
        name: 'Juan Pérez',
        titulo: ['Desarrollador Full Stack', 'React Specialist'],
        edad: 30,
        habilidades: ['JavaScript', 'React', 'Node.js'],
        redes: [
            { nombre: 'GitHub', url: 'https://github.com/juan', icono: 'github' },
            { nombre: 'LinkedIn', url: 'https://linkedin.com/in/juan', icono: 'linkedin' }
        ]
    };

    it('renderiza el nombre del usuario', () => {
        render(<UserBody user={mockUser} />);
        // Usamos una expresión regular para buscar el nombre que contiene "Juan Pérez"
        expect(screen.getByText(/Juan Pérez/)).toBeTruthy();
    });

    it('renderiza los títulos del usuario', () => {
        render(<UserBody user={mockUser} />);
        expect(screen.getByText('Desarrollador Full Stack • React Specialist')).toBeTruthy();
    });

    it('renderiza la edad del usuario', () => {
        render(<UserBody user={mockUser} />);
        // Buscamos el texto que contiene "30" y "años" (pueden estar en nodos separados)
        expect(screen.getByText(/30/)).toBeTruthy();
        expect(screen.getByText(/años/)).toBeTruthy();
    });

    it('renderiza todas las habilidades', () => {
        render(<UserBody user={mockUser} />);
        mockUser.habilidades.forEach(habilidad => {
            expect(screen.getByText(habilidad)).toBeTruthy();
        });
    });

    it('renderiza todos los enlaces sociales', () => {
        render(<UserBody user={mockUser} />);
        mockUser.redes.forEach(red => {
            const link = screen.getByLabelText(red.nombre);
            expect(link).toBeTruthy();
            expect(link.getAttribute('href')).toBe(red.url);
        });
    });

    it('aplica clases CSS correctamente', () => {
        render(<UserBody user={mockUser} className="custom-user" />);
        const userBody = screen.getByText(/Hola, mi nombre es/).closest('.user-body');
        expect(userBody).toHaveClass('custom-user');
    });
});