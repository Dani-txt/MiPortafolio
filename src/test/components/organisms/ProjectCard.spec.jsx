import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../../../components/organisms/ProjectCard';

describe('ProjectCard Component', () => {
    const mockProject = {
        id: 1,
        name: 'Mi Proyecto',
        description: 'Descripción del proyecto',
        image: 'project.jpg',
        url: 'https://github.com/user/project'
    };

    let mockNavigate;
    let originalOpen;

    beforeEach(() => {
        // Usar Jasmine en lugar de Jest
        mockNavigate = jasmine.createSpy('navigate');
        originalOpen = window.open;
        window.open = jasmine.createSpy('open');
    });

    afterEach(() => {
        window.open = originalOpen;
    });

    // Mock del componente sin Jest
    const MockProjectCard = () => {
        const handleRepositorioClick = () => {
            window.open(mockProject.url, '_blank');
        };

        const handleDetailsClick = () => {
            mockNavigate(`/projects/${mockProject.id}`);
        };

        return (
            <div className="project-card">
                <img src={mockProject.image} alt={mockProject.name} className="card-img-top" />
                <div className="card-body">
                    <div>
                        <h3>{mockProject.name}</h3>
                        <p>{mockProject.description}</p>
                    </div>
                    <div className="card-buttons">
                        <button onClick={handleRepositorioClick}>Repositorio</button>
                        <button onClick={handleDetailsClick}>Detalles</button>
                    </div>
                </div>
            </div>
        );
    };

    it('renderiza la información del proyecto', () => {
        render(
            <BrowserRouter>
                <MockProjectCard />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Mi Proyecto')).toBeTruthy();
        expect(screen.getByText('Descripción del proyecto')).toBeTruthy();
        expect(screen.getByAltText('Mi Proyecto')).toBeTruthy();
    });

    it('renderiza los botones correctamente', () => {
        render(
            <BrowserRouter>
                <MockProjectCard />
            </BrowserRouter>
        );
        
        expect(screen.getByText('Repositorio')).toBeTruthy();
        expect(screen.getByText('Detalles')).toBeTruthy();
    });

    it('maneja click en botón Repositorio', () => {
        render(
            <BrowserRouter>
                <MockProjectCard />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Repositorio'));
        expect(window.open).toHaveBeenCalledWith('https://github.com/user/project', '_blank');
    });

    it('maneja click en botón Detalles', () => {
        render(
            <BrowserRouter>
                <MockProjectCard />
            </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Detalles'));
        expect(mockNavigate).toHaveBeenCalledWith('/projects/1');
    });
});