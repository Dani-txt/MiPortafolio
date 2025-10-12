import React from 'react';
import projects from '../data/project';
import ProjectCard from '../components/organisms/ProjectCard';
import Text from '../components/atoms/Text';
import Footer from '../components/molecules/Footer';
import '../styles/pages/Projects.css';

function Projects() {
  return (
    <div className="background-container">
      <div className="projects-page">
        <div className="text-center mb-5">
          <Text variant="h1" type="title" className="section-title">
            Mis Proyectos
          </Text>
          <Text variant="p" type="subtitle" className="section-subtitle">
            Algunos de mis trabajos y experimentos
          </Text>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="transparent-container">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;