//? Input & Resume 
import React, { useState } from 'react';
import Form from './Form/Form'
import Resume from './Resume/Resume'

const ResumeAndForm = () => {
    const [formData, setFormData] = useState({
        // Personal Details
        name: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        github: '',
        linkedin: '',

        // Education
        collegeName: '',
        courseName: '',
        courseDuration: '',
        cgpa: '',
        collegeLocation: '',

        // Experience
        exp1_companyName: '',
        exp1_jobPosition: '',
        exp1_jobDesc: '',
        exp1_jobDuration: '',
        exp2_companyName: '',
        exp2_jobPosition: '',
        exp2_jobDesc: '',
        exp2_jobDuration: '',
        exp3_companyName: '',
        exp3_jobPosition: '',
        exp3_jobDesc: '',
        exp3_jobDuration: '',

        // Projects
        p1_projectName: '',
        p1_projectLiveLink: '',
        p1_projectRepoLink: '',
        p1_techStacksUsed: '',
        p1_projectDesc: '',
        p2_projectName: '',
        p2_projectLiveLink: '',
        p2_projectRepoLink: '',
        p2_techStacksUsed: '',
        p2_projectDesc: '',
        p3_projectName: '',
        p3_projectLiveLink: '',
        p3_projectRepoLink: '',
        p3_techStacksUsed: '',
        p3_projectDesc: '',

        // Skills
        languages: '',
        librariesAndFrameworks: '',
        databases: '',
        devTools: '',

        // Achievements
        achievement_1: '',
        achievement_2: '',
        achievement_3: '',

        // Hobbies
        hobby_1: '',
        hobby_2: '',
        hobby_3: '',
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
        <div className="flex flex-col sm:flex-row  min-h-screen w-full bg-zinc-900 text-zinc-200">
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