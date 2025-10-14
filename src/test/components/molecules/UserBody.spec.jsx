import React from 'react';
import { render, screen } from '@testing-library/react';
import UserBody from '../../../components/molecules/UserBody';

describe('UserBody Component', () => {
    const mockUser = {
        name: "Daniel Nuñez Diaz",
        titulo: [
            "Administrador financiero",
            "Estudiante de Ing. Informatica en DuocUC"
        ],
        habilidades: [
            "JavaScript", "React", "Java"
        ],
        redes: []
    };

    it('renderiza el componente sin errores', () => {
        // SOLO verificar que no hay errores al renderizar
        expect(() => {
            render(<UserBody user={mockUser} />);
        }).not.toThrow();
    });

    it('renderiza el nombre del usuario', () => {
        render(<UserBody user={mockUser} />);
        expect(screen.getByText('Daniel Nuñez Diaz.')).toBeTruthy();
    });

    it('renderiza contenido del usuario', () => {
        render(<UserBody user={mockUser} />);
        
        // Verificar que el componente tiene contenido
        const userBody = document.querySelector('.user-body');
        expect(userBody).toBeTruthy();
        expect(userBody.textContent).toBeTruthy();
    });
});