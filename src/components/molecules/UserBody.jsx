import React from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/UserBody.css';

function UserBody({ user, className = '' }) {
    return (
        <div className={`user-body ${className}`}>
            <Text variant="h1" type="display" className="user-name">
                {user.name}.
            </Text>
            <div className="user-info">
                <Text variant="h2" type="title" className="user-title">
                {user.titulo[0]}
                <br />
                <br />
                {user.titulo[1]}
            </Text>
            </div>
            <div className="habilidades-section">
                <Text variant="h5" type="highlight">
                    Habilidades Técnicas
                </Text>
                <div className="habilidades-list">
                    {user.habilidades.map((habilidad, index) => (
                        <span key={index} className="habilidad-tag">
                            {habilidad}
                        </span>
                    ))}
                </div>
            </div>
            <div className="social-links">
                {user.redes.map((red, index) => (
                <a
                    key={index}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={red.nombre}
                >
                    <i className={`bi bi-${red.icono}`}></i>
                    </a>
                ))}
                </div>
        </div>
    );
}

export default UserBody;