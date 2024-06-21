//? Input & Resume 
import React, { useState } from 'react';
import Form from './Form/Form'
import Resume from './Resume/Resume'

const ResumeAndForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        github: '',
        linkedin: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-row min-h-screen bg-zinc-900 text-zinc-200">
            {/* Left Side - Form */}
            <Form
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            {/* Right Side - Resume */}
            <Resume
                formData={formData}
            />
        </div>
    );
};

export default ResumeAndForm;