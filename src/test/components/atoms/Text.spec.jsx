import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
    it('renderiza el texto correctamente', () => {
        render(<Text>Hola Mundo</Text>);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
    });

    it('aplica la variante h1 correctamente', () => {
        render(<Text variant="h1">Título</Text>);
        const heading = screen.getByText('Título');
        expect(heading.tagName).toBe('H1');
    });

    it('aplica el tipo title correctamente', () => {
        render(<Text type="title">Título</Text>);
        const title = screen.getByText('Título');
        expect(title).toHaveClass('text-title');
    });

    it('aplica el tipo body correctamente', () => {
        render(<Text type="body">Texto body</Text>);
        const body = screen.getByText('Texto body');
        expect(body).toHaveClass('text-body');
    });
});