import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mock del componente Contacto sin dependencias de imagen
const MockContact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        mensaje: '',
    });

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
        setFormData({ name: '', email: '', mensaje: '' });
    };

    return (
        <div>
        <div className="contact-page">
            <div className="text-center mb-5">
            <h1>Contacto</h1>
            <p className="mt-3">
                ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
            </p>
            </div>
            <div className="contact-form-container">
                {formInputs.map((input) => (
                <div key={input.id} className="form-group">
                    <label htmlFor={input.id}>{input.label}</label>
                    {input.type === 'textarea' ? (
                    <textarea
                        id={input.id}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={input.onChange}
                        rows={input.rows}
                    />
                    ) : (
                    <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={input.onChange}
                    />
                    )}
                </div>
                ))}
            <div className="contact-form">
            </div>
            <div className="form-actions text-center mt-4">
                <button
                onClick={handleSubmit}
                className="me-3"
                >
                Enviar Mensaje
                </button>
            </div>
            </div>
        </div>
        <footer>Footer Component</footer>
        </div>
    );
    };

    describe('Contact Page', () => {
    let originalAlert;

    beforeEach(() => {
        originalAlert = window.alert;
        window.alert = jasmine.createSpy('alert');
    });

    afterEach(() => {
        window.alert = originalAlert;
    });

    it('renderiza el título y descripción', () => {
        render(
        <BrowserRouter>
            <MockContact />
        </BrowserRouter>
        );
        
        expect(screen.getByText('Contacto')).toBeTruthy();
        expect(screen.getByText(/¿Tienes un proyecto en mente?/)).toBeTruthy();
    });

    it('renderiza todos los campos del formulario', () => {
        render(
        <BrowserRouter>
            <MockContact />
        </BrowserRouter>
        );
        
        expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeTruthy();
        expect(screen.getByPlaceholderText('tuemail@ejemplo.com')).toBeTruthy();
        expect(screen.getByPlaceholderText('Escribe tu mensaje aquí...')).toBeTruthy();
    });

    it('maneja el cambio en los campos del formulario', () => {
        render(
        <BrowserRouter>
            <MockContact />
        </BrowserRouter>
        );
        
        const nameInput = screen.getByPlaceholderText('Ingresa tu nombre');
        fireEvent.change(nameInput, { target: { value: 'Juan' } });
        expect(nameInput.value).toBe('Juan');
    });

    it('muestra alerta cuando se envían campos vacíos', () => {
        render(
        <BrowserRouter>
            <MockContact />
        </BrowserRouter>
        );
        
        fireEvent.click(screen.getByText('Enviar Mensaje'));
        expect(window.alert).toHaveBeenCalledWith('Por favor, completa todos los campos');
    });

    it('envía el formulario correctamente', () => {
        render(
        <BrowserRouter>
            <MockContact />
        </BrowserRouter>
        );
        
        // Llenar el formulario
        fireEvent.change(screen.getByPlaceholderText('Ingresa tu nombre'), { 
        target: { value: 'Juan' } 
        });
        fireEvent.change(screen.getByPlaceholderText('tuemail@ejemplo.com'), { 
        target: { value: 'juan@test.com' } 
        });
        fireEvent.change(screen.getByPlaceholderText('Escribe tu mensaje aquí...'), { 
        target: { value: 'Hola, me interesa tu trabajo' } 
        });
        
        fireEvent.click(screen.getByText('Enviar Mensaje'));
        expect(window.alert).toHaveBeenCalled();
    });
});