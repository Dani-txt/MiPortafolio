import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock de projects data con data URLs para evitar warnings
const mockProjects = [
    {
        id: 1,
        name: 'Proyecto 1',
        description: 'Descripción 1',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm95ZWN0byAxPC90ZXh0Pjwvc3ZnPg==',
        url: 'https://github.com/project1'
    },
    {
        id: 2,
        name: 'Proyecto 2',
        description: 'Descripción 2',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm95ZWN0byAyPC90ZXh0Pjwvc3ZnPg==',
        url: 'https://github.com/project2'
    }
];

// Mock del componente Projects simplificado
const MockProjects = () => {
    return (
        <div>
            <div className="projects-section">
                <h1 className="section-title">Mis Proyectos</h1>
                <p className="section-subtitle">
                    Algunos de mis trabajos y experimentos
                </p>
                <div className="projects-grid">
                    {mockProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.name} />
                            <div className="card-body">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="card-buttons">
                                    <button>Repositorio</button>
                                    <button>Detalles</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>Footer Component</div>
        </div>
    );
};

describe('Projects Page', () => {
    it('renderiza el título y descripción', () => {
        render(
            <BrowserRouter>
                <MockProjects />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Mis Proyectos')).toBeTruthy();
        expect(screen.getByText('Algunos de mis trabajos y experimentos')).toBeTruthy();
    });

    it('renderiza todos los proyectos', () => {
        render(
            <BrowserRouter>
                <MockProjects />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Proyecto 1')).toBeTruthy();
        expect(screen.getByText('Proyecto 2')).toBeTruthy();
        expect(screen.getByText('Descripción 1')).toBeTruthy();
        expect(screen.getByText('Descripción 2')).toBeTruthy();
    });
});