import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../../../components/atoms/Input';

describe('Input Component', () => {
    it('renderiza input de texto correctamente', () => {
        render(<Input type="text" placeholder="Ingresa texto" />);
        const input = screen.getByPlaceholderText('Ingresa texto');
        expect(input).toBeTruthy();
        expect(input.type).toBe('text');
        expect(input.tagName).toBe('INPUT');
    });

    it('renderiza textarea correctamente', () => {
        render(<Input type="textarea" placeholder="Escribe aquí" />);
        const textarea = screen.getByPlaceholderText('Escribe aquí');
        expect(textarea).toBeTruthy();
        expect(textarea.tagName).toBe('TEXTAREA');
        expect(textarea).toHaveClass('textarea');
    });

    it('aplica clases CSS correctamente para input', () => {
        render(<Input className="custom-input" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('form-control');
        expect(input).toHaveClass('custom-input');
    });

    it('aplica clases CSS correctamente para textarea', () => {
        render(<Input type="textarea" className="custom-textarea" />);
        const textarea = screen.getByRole('textbox');
        expect(textarea).toHaveClass('form-control');
        expect(textarea).toHaveClass('textarea');
        expect(textarea).toHaveClass('custom-textarea');
    });

    it('pasa todas las props correctamente', () => {
        const handleChange = jasmine.createSpy('handleChange');
        render(
            <Input 
                type="email"
                placeholder="Email"
                defaultValue="test@test.com"
                onChange={handleChange}
                required
            />
        );
        
        const input = screen.getByPlaceholderText('Email');
        expect(input.type).toBe('email');
        expect(input.required).toBe(true);
        expect(input.value).toBe('test@test.com');
    });
});