import React from 'react';
import Image from '../atoms/Image';
import UserBody from '../molecules/UserBody';
import '../../styles/organisms/UserCard.css';

function UserCard({ user, className = '' }) {
    return (
        <div className={`user-card ${className}`}>
            <div className="user-image-container">
                <Image
                    src={user.foto}
                    alt={`Foto de ${user.name}`}
                    className="user-image"
                />
            </div>
            <div className="user-card-content">
                <UserBody user={user} />
            </div>
        </div>
    );
}

export default UserCard;