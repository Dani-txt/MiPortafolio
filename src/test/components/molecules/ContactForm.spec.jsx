import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from '../../../components/molecules/ContactForm';

describe('ContactForm Component', () => {
    const mockInputs = [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre',
            placeholder: 'Ingresa tu nombre'
        },
        {
            id: 'email', 
            type: 'email',
            label: 'Correo',
            placeholder: 'tuemail@ejemplo.com'
        }
    ];

    it('renderiza todos los inputs', () => {
        render(<ContactForm inputs={mockInputs} />);
        
        // Usar getByPlaceholderText que es más directo
        expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeTruthy();
        expect(screen.getByPlaceholderText('tuemail@ejemplo.com')).toBeTruthy();
    });

    it('renderiza los labels correctamente', () => {
        render(<ContactForm inputs={mockInputs} />);
        
        // Verificar que los labels se rendericen
        expect(screen.getByText('Nombre')).toBeTruthy();
        expect(screen.getByText('Correo')).toBeTruthy();
    });

    it('renderiza placeholders correctamente', () => {
        render(<ContactForm inputs={mockInputs} />);
        
        expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeTruthy();
        expect(screen.getByPlaceholderText('tuemail@ejemplo.com')).toBeTruthy();
    });

    it('asocia correctamente labels con inputs usando htmlFor', () => {
        render(<ContactForm inputs={mockInputs} />);
        
        const nameLabel = screen.getByText('Nombre');
        const emailLabel = screen.getByText('Correo');
        
        // Verificar que los labels tengan el htmlFor correcto
        expect(nameLabel.getAttribute('for')).toBe('name');
        expect(emailLabel.getAttribute('for')).toBe('email');
        
        // Verificar que los inputs tengan los ids correctos
        expect(screen.getByPlaceholderText('Ingresa tu nombre').id).toBe('name');
        expect(screen.getByPlaceholderText('tuemail@ejemplo.com').id).toBe('email');
    });
});