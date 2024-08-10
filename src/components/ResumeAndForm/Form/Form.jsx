import React, { useState } from 'react';
import Education from './Education'
import Achievements from './Achievements';
import Experience from './Experience'
import Hobbies from './Hobbies'
import Skills from './Skills'
import Projects from './Projects'
import PersonalDetails from './PersonalDetails'
// import Form from './Form'

const Form = ({ formData, handleChange, handleSubmit }) => {
    const [page, setPage] = useState(0)
    const formTitle = [
        "Personal Details",
        "Skills",
        "Education",
        "Experience",
        "Projects",
        "Achievements",
        "Hobbies"
    ]

    const pageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else if (page === 1) {
            return <Skills
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else if (page === 2) {
            return <Education
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else if (page === 3) {
            return <Experience
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else if (page === 4) {
            return <Projects
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else if (page === 5) {
            return <Achievements
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
        else {
            return <Hobbies
                formData={formData}
                formTitle={formTitle}
                page={page}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        }
    }

    // const handleDownload = () => {
    //     console.log("Downloading resume...");
    // };

    return (
        <>
            <div className="w-full md:w-2/5 bg-zinc-800 p-8">
                {/* Progress Bar */}
                <div className="progressBar bg-gray-200 h-2 rounded-md my-2">
                    <div
                        style={{
                            width: page === 0 ? "0%" : page === 1 ? "20%" : page === 2 ? "40%" : page === 3 ? "60%" : page === 4 ? "80%" : page === 5 ? "90%" : "100%",
                            transition: "width 0.5s ease"
                        }}
                        className="bg-blue-500 h-2 rounded-md"
                    >
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex my-5 gap-5'>
                    <button
                        disabled={page === 0}
                        type="submit"
                        onClick={() => setPage((currentPage) => currentPage - 1)}
                        className={`w-full text-white p-2 rounded-lg font-semibold transition ${page === 0 ? 'bg-blue-600 opacity-50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        Prev
                    </button>
                    <button
                        disabled={page > 5}
                        type="submit"
                        onClick={() => setPage((currentPage) => currentPage + 1)}
                        className={`w-full text-white p-2 rounded-lg font-semibold transition ${page > 5 ? 'bg-blue-600 opacity-50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        Next
                    </button>
                </div>

                {/* <h2 className="text-2xl font-bold mb-6">Create Your Resume</h2> */}
                <h3 className="text-2xl font-bold mb-6 underline underline-offset-4">{formTitle[page]}</h3>
                {pageDisplay()}

                {/* Download Button */}
                {/* {page === formTitle.length - 1 && (
                    <button
                        // disabled={page > 5}
                        type="submit"
                        onClick={() => handleDownload()}
                        className={`w-full text-white p-2 my-5 rounded-lg font-semibold transition bg-blue-600 hover:bg-blue-700`}
                    >
                        Download
                    </button>
                )} */}
            </div>
        </>
    )
}

export default Form