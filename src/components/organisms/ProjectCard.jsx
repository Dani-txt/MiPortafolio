import React from 'react';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';
import '../../styles/organisms/ProjectCard.css';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleRepositorioClick = () => {
    window.open(project.url, '_blank');
  };

  const handleDetailsClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="project-card">
      <Image src={project.image} alt={project.name} className="card-img-top" />
      <div className="card-body">
        <CardBody
          title={project.name}
          description={project.description}
        />
        <div className="card-buttons">
          <Button variant="primary" onClick={handleRepositorioClick}>
            Repositorio
          </Button>
          <Button variant="outline" onClick={handleDetailsClick}>
            Detalles
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;