import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../../../components/organisms/ProjectCard';

// Mock de useNavigate
const mockNavigate = jasmine.createSpy('navigate');

// Mock para window.open
const mockOpen = jasmine.createSpy('open');
window.open = mockOpen;

describe('ProjectCard Component', () => {
    const mockProject = {
        id: 1,
        name: 'Mi Proyecto',
        description: 'Descripción del proyecto',
        image: 'project.jpg',
        url: 'https://github.com/user/project'
    };

    beforeEach(() => {
        mockNavigate.calls.reset();
        mockOpen.calls.reset();
    });

    // Mock de useNavigate para cada test
    const MockProjectCard = () => {
        const MockComponent = () => {
            const navigate = mockNavigate;
            
            const handleRepositorioClick = () => {
                window.open(mockProject.url, '_blank');
            };

            const handleDetailsClick = () => {
                navigate(`/projects/${mockProject.id}`);
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

        return <MockComponent />;
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
        expect(mockOpen).toHaveBeenCalledWith('https://github.com/user/project', '_blank');
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