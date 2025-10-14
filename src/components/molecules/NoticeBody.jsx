import React from 'react';
import Text from '../atoms/Text';
import '../../styles/molecules/NoticeBody.css';

function NoticeBody({ notice, className = '' }) {
    return (
        <div className={`notice-body ${className}`}>
            <Text variant="h5" type="title" className="notice-title">
                {notice.titulo}
            </Text>
            <Text variant="p" type="highlight" className="notice-category">
                {notice.categoria}
            </Text>
            <Text variant="small" type="body" className="notice-date">
                {new Date(notice.fecha).toLocaleDateString()}
            </Text>
            <Text variant="p" type="body" className="notice-content">
                {notice.contenido}
            </Text>
        </div>
    );
}

export default NoticeBody;