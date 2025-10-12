import React from 'react';
import { render, screen} from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('CardBody Component', () => {
    const mockProps = {
        title: 'Test Title',
        description: 'Test Description'
    };

    it('renderiza título y descripción correctamente', () => {
        render(<CardBody {...mockProps} />);
        expect(screen.getByText('Test Title')).toBeTruthy();
        expect(screen.getByText('Test Description')).toBeTruthy();
    });

    it('aplica clases CSS correctamente', () => {
        render(<CardBody {...mockProps} className="extra-class" />);
        const cardBody = screen.getByText('Test Title').closest('.card-body-content');
        expect(cardBody).toHaveClass('extra-class');
    });
});