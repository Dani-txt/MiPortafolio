import React from 'react';
import NoticeBody from '../molecules/NoticeBody';
import '../../styles/organisms/NoticeCard.css';

function NoticeCard({ notice, className = '' }) {
    return (
        <div className={`notice-card ${className}`}>
            <div className="card-body">
                <NoticeBody notice={notice} />
            </div>
        </div>
    );
}

export default NoticeCard;