import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticeBody from '../../../components/molecules/NoticeBody';

describe('NoticeBody Component', () => {
    const mockNotice = {
        titulo: 'Título de la noticia',
        categoria: 'Tecnología',
        fecha: '2023-10-10',
        contenido: 'Contenido de la noticia'
    };

    it('renderiza el título de la noticia', () => {
        render(<NoticeBody notice={mockNotice} />);
        expect(screen.getByText('Título de la noticia')).toBeTruthy();
    });

    it('renderiza la categoría de la noticia', () => {
        render(<NoticeBody notice={mockNotice} />);
        expect(screen.getByText('Tecnología')).toBeTruthy();
    });

    it('renderiza la fecha de la noticia', () => {
        render(<NoticeBody notice={mockNotice} />);
        // La fecha se formatea, así que comprobamos que aparece el año
        expect(screen.getByText(/2023/)).toBeTruthy();
    });

    it('renderiza el contenido de la noticia', () => {
        render(<NoticeBody notice={mockNotice} />);
        expect(screen.getByText('Contenido de la noticia')).toBeTruthy();
    });
});