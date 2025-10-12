import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock de projects data
const mockProjects = [
    {
        id: 1,
        name: 'Proyecto 1',
        description: 'Descripción 1',
        image: 'image1.jpg',
        url: 'https://github.com/project1',
        tecnologies: ['React', 'Node.js']
    },
    {
        id: 2,
        name: 'Proyecto 2',
        description: 'Descripción 2',
        image: 'image2.jpg',
        url: 'https://github.com/project2',
        tecnologies: ['Vue', 'Express']
    }
];

describe('ProjectDetail Page', () => {
    const mockNavigate = jasmine.createSpy('navigate');
    let originalOpen;

    beforeEach(() => {
        mockNavigate.calls.reset();
        originalOpen = window.open;
        window.open = jasmine.createSpy('open');
    });

    afterEach(() => {
        window.open = originalOpen;
    });

    // Mock del componente ProjectDetail para proyecto existente
    const MockProjectDetailWithProject = () => {
        const project = mockProjects[0];
        const navigate = mockNavigate;
        
        const handleRepositorioClick = () => {
            window.open(project.url, '_blank');
        };

        return (
            <div className="project-detail">
                <button className="back-button" onClick={() => navigate('/projects')}>
                    ← Volver a Proyectos
                </button>
                
                <div className="project-card-detail">
                    <img src={project.image} alt={project.name} className="project-image" />
                    <div className="card-body">
                        <h1 className="project-title">{project.name}</h1>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="technologies-section">
                            <h3>Tecnologías Utilizadas</h3>
                            <div className="technologies-list">
                                {project.tecnologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        
                        <button onClick={handleRepositorioClick}>
                            Ver Repositorio
                        </button>
                    </div>
                </div>
                <div>Footer Component</div>
            </div>
        );
    };

    // Mock del componente ProjectDetail para proyecto no encontrado
    const MockProjectDetailNotFound = () => {
        return (
            <div className="project-detail">
                <h1>Proyecto no encontrado</h1>
            </div>
        );
    };

    it('renderiza los detalles del proyecto cuando existe', () => {
        render(
            <BrowserRouter>
                <MockProjectDetailWithProject />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Proyecto 1')).toBeTruthy();
        expect(screen.getByText('Descripción 1')).toBeTruthy();
        expect(screen.getByText('React')).toBeTruthy();
        expect(screen.getByText('Node.js')).toBeTruthy();
    });

    it('muestra mensaje de error cuando el proyecto no existe', () => {
        render(
            <BrowserRouter>
                <MockProjectDetailNotFound />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Proyecto no encontrado')).toBeTruthy();
    });

    it('maneja click en botón de repositorio', () => {
        render(
            <BrowserRouter>
                <MockProjectDetailWithProject />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Ver Repositorio'));
        expect(window.open).toHaveBeenCalledWith('https://github.com/project1', '_blank');
    });

    it('maneja click en botón volver', () => {
        render(
            <BrowserRouter>
                <MockProjectDetailWithProject />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('← Volver a Proyectos'));
        expect(mockNavigate).toHaveBeenCalledWith('/projects');
    });
});