import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/project.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import Footer from '../components/molecules/Footer.jsx';
import '../styles/pages/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  const handleRepositorioClick = () => {
    if (project && project.url) {
      window.open(project.url, '_blank');
    }
  };

  if (!project) {
    return (
      <div className="background-container">
        <div className="project-detail-page">
          <Text variant="h1">Proyecto no encontrado</Text>
        </div>
      </div>
    );
  }

  return (
    <div className="background-container">
      <div className="project-detail-page">
        <button className="back-button transparent-container" onClick={() => navigate('/projects')}>
          ← Volver a Proyectos
        </button>
        
        <div className="project-card-detail transparent-container">
          <Image src={project.image} alt={project.name} className="project-image" />
          <div className="card-body">
            <Text variant="h1" className="project-title">{project.name}</Text>
            <Text variant="p" className="project-description">{project.description}</Text>
            
            <div className="technologies-section transparent-container">
              <Text variant="h3">Tecnologías Utilizadas</Text>
              <div className="technologies-list">
                {project.tecnologies && project.tecnologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <Button variant="primary" onClick={handleRepositorioClick} className="mt-3">
              Ver Repositorio
            </Button>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default ProjectDetail;