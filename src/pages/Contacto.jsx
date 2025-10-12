import React, { useState } from 'react';
import Text from '../components/atoms/Text.jsx';
import ContactForm from '../components/molecules/ContactForm.jsx';
import Button from '../components/atoms/Button.jsx';
import Footer from '../components/molecules/Footer.jsx';
import '../styles/pages/Contacto.css';
import '../styles/global.css';

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        mensaje: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const formInputs = [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre',
            placeholder: 'Ingresa tu nombre',
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
        },
        {
            id: 'email',
            type: 'email',
            label: 'Correo',
            placeholder: 'tuemail@ejemplo.com',
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value }),
        },
        {
            id: 'mensaje',
            type: 'textarea',
            label: 'Mensaje',
            placeholder: 'Escribe tu mensaje aquí...',
            rows: 5,
            value: formData.mensaje,
            onChange: (e) => setFormData({ ...formData, mensaje: e.target.value }),
        },
    ];

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.mensaje) {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        const message = `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.mensaje}`;
        alert(`Mensaje enviado:\n\n${message}`);
        setFormData(initialFormData);
    };

    return (
        <div className="background-container">
            <div className="contact-page">
                <div className="text-center mb-5">
                    <Text variant="h1" type="title">Contacto</Text>
                    <Text variant="p" type="body" className="mt-3">
                        ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
                    </Text>
                </div>
                <div className="contact-form-container transparent-container">
                    <ContactForm inputs={formInputs} />
                    <div className="form-actions text-center mt-4">
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            className="me-3"
                        >
                            Enviar Mensaje
                        </Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;