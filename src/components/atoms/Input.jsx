import React from "react";
import '../../styles/atoms/Input.css';

function Input({ className = "", type = "text", ...props }) {
    if (type === "textarea") {
        return (
            <textarea 
                className={`form-control textarea ${className}`} 
                {...props} 
            />
        );
    }
    
    return (
        <input 
            type={type}
            className={`form-control ${className}`} 
            {...props} 
        />
    );
}

export { Input };