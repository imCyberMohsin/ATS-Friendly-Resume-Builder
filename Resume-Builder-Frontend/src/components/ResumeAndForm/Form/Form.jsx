import React, { useState } from 'react';
import Education from './Education'
import Achivements from './Achivements';
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
        "Education",
        "Skills",
        "Experience",
        "Achievements",
        "Projects",
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
            return <Education />
        }
        else if (page === 2) {
            return <Skills />
        }
        else if (page === 3) {
            return <Experience />
        }
        else if (page === 4) {
            return <Achivements />
        }
        else if (page === 5) {
            return <Projects />
        }
        else {
            return <Hobbies />
        }
    }

    return (
        <>
            <div className="w-full md:w-2/5 bg-zinc-800 p-8">
                {/* <h2 className="text-2xl font-bold mb-6">Create Your Resume</h2> */}
                <h3 className="text-2xl font-bold mb-6 underline underline-offset-4">{formTitle[page]}</h3>
                {pageDisplay()}

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
            </div>
        </>
    )
}

export default Form