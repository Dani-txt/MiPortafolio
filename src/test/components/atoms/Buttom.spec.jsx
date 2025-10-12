import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
        it('renderiza el botón correctamente', () => {
        render(<Button>Haz click</Button>);
        expect(screen.getByText('Haz click')).toBeTruthy();
    });

    it('aplica la variante primary correctamente', () => {
        render(<Button variant="primary">Botón Primary</Button>);
        const button = screen.getByText('Botón Primary');
        expect(button).toHaveClass('btn-primary');
    });

    it('aplica la variante outline correctamente', () => {
        render(<Button variant="outline">Botón Outline</Button>);
        const button = screen.getByText('Botón Outline');
        expect(button).toHaveClass('btn-outline');
    });

    it('maneja el evento onClick', () => {
        const handleClick = jasmine.createSpy('handleClick');
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalled();
    });
});