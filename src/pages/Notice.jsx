import React from 'react';
import notices from '../data/noticias.json';
import NoticeCard from '../components/organisms/NoticeCard';
import Text from '../components/atoms/Text';
import Footer from '../components/molecules/Footer';
import '../styles/pages/Notice.css';

function Noticias() {
    return (
        <div className="background-container">
            <div className="noticias-page">
                <div className="text-center mb-5">
                    <Text variant="h1" type="title">Noticias</Text>
                    <Text variant="p" type="subtitle" className="section-subtitle">
                        Últimas actualizaciones y logros
                    </Text>
                </div>
                
                <div className="notices-container">
                    {notices.noticias.map((notice) => (
                        <div key={notice.id} className="transparent-container" style={{marginBottom: '2rem', padding: '1.5rem'}}>
                            <NoticeCard notice={notice} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Noticias;