import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../../../components/organisms/UserCard';

describe('UserCard Component', () => {
    const mockUser = {
        name: 'Juan Pérez',
        foto: 'profile.jpg',
        titulo: ['Desarrollador Full Stack'],
        edad: 30,
        habilidades: ['JavaScript', 'React'],
        redes: [
            { nombre: 'GitHub', url: 'https://github.com/juan', icono: 'github' }
        ]
    };

    it('renderiza la imagen del usuario', () => {
        render(<UserCard user={mockUser} />);
        const image = screen.getByAltText(`Foto de ${mockUser.name}`);
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe('profile.jpg');
    });

    it('renderiza el UserBody con la información del usuario', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByText(/Juan Pérez/)).toBeTruthy();
        expect(screen.getByText('Desarrollador Full Stack')).toBeTruthy();
        expect(screen.getByText(/30/)).toBeTruthy();
    });

    it('aplica clases CSS correctamente', () => {
        render(<UserCard user={mockUser} className="custom-card" />);
        const userCard = screen.getByAltText(`Foto de ${mockUser.name}`).closest('.user-card');
        expect(userCard).toHaveClass('custom-card');
    });
});