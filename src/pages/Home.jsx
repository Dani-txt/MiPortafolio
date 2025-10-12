import React from 'react';
import UserCard from '../components/organisms/UserCard';
import Footer from '../components/molecules/Footer';
import user from '../data/user';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/Home.css';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="background-container">
      <div className="home-page">
        <div className="home-container">
          <div className="user-card-wrapper">
            <UserCard user={user} />
          </div>
          <div className="home-buttons">
            <button
              className="btn-custom"
              onClick={() => navigate('/projects')}
            >
              Ver Mis Proyectos
            </button>
            <button
              className="btn-custom"
              onClick={() => navigate('/contacto')}
            >
              Contáctame
            </button>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
      
  );
}

export default Home;