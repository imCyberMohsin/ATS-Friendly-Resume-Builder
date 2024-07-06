import React from 'react'

const Education = ({ formData, handleChange, handleSubmit }) => {
    // collegeName: '',
    // courseName: '',
    // courseDuration: '',
    // cgpa: '',
    // collegeLocation: ''
    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="collegeName" className="block text-sm font-semibold">College Name</label>
                    <input type="text" id="collegeName" name="collegeName"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Eg: NSHM College'
                        value={formData.collegeName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="courseName" className="block text-sm font-semibold">Course Name</label>
                    <input type="text" id="courseName" name="courseName"
                        placeholder='Eg: BCA'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.courseName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="courseDuration" className="block text-sm font-semibold">Course Duration</label>
                    <input type="text" id="courseDuration" name="courseDuration"
                        placeholder='June 2023 - June 2024'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.courseDuration}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="cgpa" className="block text-sm font-semibold">CGPA</label>
                    <input type="text" id="cgpa" name="cgpa"
                        placeholder='9.1'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.cgpa}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="collegeLocation" className="block text-sm font-semibold">College Location</label>
                    <input type="text" id="collegeLocation" name="collegeLocation"
                        placeholder='City, State'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.collegeLocation}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Education