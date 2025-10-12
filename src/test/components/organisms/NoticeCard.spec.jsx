import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticeCard from '../../../components/organisms/NoticeCard';

describe('NoticeCard Component', () => {
    const mockNotice = {
        id: 1,
        titulo: 'Nuevo Proyecto',
        categoria: 'Desarrollo',
        fecha: '2023-10-10',
        contenido: 'Contenido de la noticia'
    };

    it('renderiza el NoticeBody con la noticia correcta', () => {
        render(<NoticeCard notice={mockNotice} />);
        expect(screen.getByText('Nuevo Proyecto')).toBeTruthy();
        expect(screen.getByText('Desarrollo')).toBeTruthy();
        expect(screen.getByText(/2023/)).toBeTruthy();
        expect(screen.getByText('Contenido de la noticia')).toBeTruthy();
    });

    it('aplica clases CSS correctamente', () => {
        render(<NoticeCard notice={mockNotice} className="custom-notice" />);
        const noticeCard = screen.getByText('Nuevo Proyecto').closest('.notice-card');
        expect(noticeCard).toHaveClass('custom-notice');
    });
});