import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/Image';

describe('Image Component', () => {
    it('renderiza la imagen con src y alt correctos', () => {
        render(<Image src="test.jpg" alt="Test image" />);
        const image = screen.getByAltText('Test image');
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe('test.jpg');
    });

    it('aplica clases CSS correctamente', () => {
        render(<Image src="test.jpg" alt="Test" className="custom-class" />);
        const image = screen.getByAltText('Test');
        expect(image).toHaveClass('custom-class');
        expect(image).toHaveClass('custom-image');
    });
});