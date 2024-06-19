//? Input & Resume 
import React, { useState } from 'react';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';

const Resume = () => {
    const [resumeData, setResumeData] = useState({
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
        setResumeData({
            ...resumeData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-row min-h-screen bg-zinc-900 text-zinc-200">
            {/* Left Side - Form */}
            <div className="w-full md:w-2/5 bg-zinc-800 p-8">
                {/* <h2 className="text-2xl font-bold mb-6">Create Your Resume</h2> */}
                <h3 className="text-2xl font-bold mb-6 underline underline-offset-4">Header Section</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                        <input type="text" id="name" name="name"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobTitle" className="block text-sm font-semibold">Job Title</label>
                        <input type="text" id="jobTitle" name="jobTitle"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.jobTitle}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                        <input type="email" id="email" name="email"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                        <input type="tel" id="phone" name="phone"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-semibold">Location</label>
                        <input type="text" id="location" name="location"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="github" className="block text-sm font-semibold">GitHub</label>
                        <input type="url" id="github" name="github"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.github}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="linkedin" className="block text-sm font-semibold">LinkedIn</label>
                        <input type="url" id="linkedin" name="linkedin"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={resumeData.linkedin}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
                </form>
            </div>

            {/* Right Side - Resume */}
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-zinc-700 p-8">
                <div className="main w-full bg-white text-black flex flex-col rounded-sm p-8">
                    {/* Top Header Section */}
                    <div className="top-header w-full text-center py-2 mb-4">
                        <h1 className="text-4xl font-bold">{resumeData.name || 'Your Name'}</h1>
                        <h4 className="text-md font-semibold leading-tight">{resumeData.jobTitle || 'Software Engineer'}</h4>
                        <div className="links flex justify-center items-center gap-3 mt-2">
                            <a href={resumeData.github || 'https://github.com/imcybermohsin'} target="_blank" rel="noopener noreferrer" className="font-medium text-sm flex items-center gap-1">
                                <RiGithubFill className="text-xl" />
                                GitHub Profile
                            </a>
                            <span>|</span>
                            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-sm flex items-center gap-1">
                                <RiLinkedinBoxFill className="text-xl" />
                                LinkedIn Profile
                            </a>
                        </div>
                        <div className="contacts flex justify-center items-center gap-3 mt-2">
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiMailLine className="text-lg" />
                                {resumeData.email || 'your@gmail.com'}
                            </span>
                            <span>|</span>
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiPhoneLine className="text-lg" />
                                {resumeData.phone || '91xxxxxxxxxx'}
                            </span>
                            <span>|</span>
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiMapPinLine className="text-lg" />
                                {resumeData.location || 'City, State'}
                            </span>
                        </div>
                        <hr className="border-b-[1px] border-b-black my-2" />
                    </div>

                    {/* All Sections */}
                    <div>
                        {/* Skills section */}
                        <div className="skills py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">SKILLS</h1>
                            <div className="leading-tight text-sm flex gap-5">
                                <div className="font-semibold pl-1">
                                    <p>• LANGUAGES</p>
                                    <p>• LIBRARIES/FRAMEWORKS</p>
                                    <p>• DATABASES</p>
                                    <p>• TOOLS/PLATFORMS</p>
                                </div>
                                <div>
                                    <p className="justify-start">JavaScript, Python, C++</p>
                                    <p className="justify-start">React, Node.js, Express</p>
                                    <p className="justify-start">MongoDB, MySQL</p>
                                    <p className="justify-start">Git, Docker, AWS</p>
                                </div>
                            </div>
                        </div>

                        {/* Education section */}
                        <div className="education py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">EDUCATION</h1>
                            <div>
                                <div className="college flex justify-between">
                                    <p className="text-base leading-tight font-semibold">Your College Name</p>
                                    <p className="text-xs leading-tight">January 2024 - December 2024</p>
                                </div>
                                <div className="stream flex justify-between">
                                    <p className="text-sm">Bachelor of Computer Applications | Computer Science</p>
                                    <p className="text-xs">City, State</p>
                                </div>
                                <p className="text-sm">CGPA: 9.1</p>
                            </div>
                        </div>

                        {/* Experience section */}
                        <div className="experience py-2">
                            <h1 className="text-xl font-semibold">EXPERIENCE</h1>
                            <div className="py-1">
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold">Company Name | <span className="text-xs">Job Role</span></p>
                                    <p className="text-xs">January 2024 - December 2024</p>
                                </div>
                                <div className="pl-2 pt-1 text-sm">
                                    <p>• Developed and maintained web applications using JavaScript and React.</p>
                                    <p>• Implemented RESTful APIs with Node.js and Express.</p>
                                    <p>• Collaborated with cross-functional teams to deliver high-quality software.</p>
                                </div>
                            </div>
                        </div>

                        {/* Projects section */}
                        <div className="projects py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">PROJECTS</h1>
                            <div className="py-1">
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold">Project Name | <a href="#" className="text-xs">LINK</a></p>
                                    <p className="text-xs">React, Node.js, MongoDB</p>
                                </div>
                                <div className="pl-2 pt-1 text-sm">
                                    <p>• Built a full-stack web application for managing tasks and deadlines.</p>
                                    <p>• Integrated third-party APIs for enhanced functionality.</p>
                                    <p>• Deployed the application using AWS and Docker.</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications section */}
                        <div className="certifications py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">CERTIFICATIONS</h1>
                            <div className="pl-2 pt-1">
                                <p className="font-sm">• Certification x<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                                <p className="font-sm">• Certification y<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                                <p className="font-sm">• Certification z<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                            </div>
                        </div>

                        {/* Achievements section */}
                        <div className="achievements py-2 pb-3 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">ACHIEVEMENTS</h1>
                            <div className="pl-2 pt-1 text-sm">
                                <p>• Won the XYZ Hackathon in 2023</p>
                                <p>• Published research paper on AI in ABC Journal</p>
                                <p>• Achieved top 5% in coding competition</p>
                            </div>
                        </div>

                        {/* Hobbies Section */}
                        <div className="hobbies py-2 pb-3">
                            <h1 className="text-xl font-semibold">HOBBIES</h1>
                            <div className="pl-2 pt-1 text-sm">
                                <p>• Playing Guitar</p>
                                <p>• Reading Sci-fi Novels</p>
                                <p>• Traveling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;