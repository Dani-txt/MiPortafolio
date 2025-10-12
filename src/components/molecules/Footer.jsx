import React from 'react';
import Text from '../atoms/Text';
import User from '../../data/user';
import '../../styles/molecules/Footer.css';

function Footer({ className = "" }) {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                {User.redes.map((red, index) => (
                    <a
                        key={index}
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <Text variant="p" type="highlight">
                            {red.nombre}
                        </Text>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;