import React from "react";
import { Input } from "../atoms/Input";
import '../../styles/molecules/ContactForm.css';

function ContactForm({inputs = []}) {
    return (
        <form className="contact-form">
            {inputs.map((input, index) => (
                <div key={input.id || index} className="form-group">
                    {input.label && (
                        <label htmlFor={input.id} className="form-label">
                            {input.label}
                        </label>
                    )}
                    <Input {...input} />
                    {input.error && <span className="text-danger">{input.error}</span>}
                </div>
            ))}
        </form>
    )
}

export default ContactForm;