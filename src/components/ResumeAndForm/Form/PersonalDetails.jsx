import React from 'react'

const PersonalDetails = ({ formData, handleChange, handleSubmit }) => {
    return (
        // name: '',
        // jobTitle: '',
        // email: '',
        // phone: '',
        // location: '',
        // github: '',
        // linkedin: '',
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                    <input type="text" id="name" name="name"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Eg: Mohsin Ansari'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="jobTitle" className="block text-sm font-semibold">Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle"
                    placeholder='Eg: Web Developer'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                    <input type="email" id="email" name="email"
                    placeholder='your@gmail.com'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold">Phone</label>
                    <input type="tel" id="phone" name="phone"
                        placeholder='+91 xxxxxxxxxx'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-semibold">Location</label>
                    <input type="text" id="location" name="location"
                    placeholder='City, State'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="github" className="block text-sm font-semibold">GitHub</label>
                    <input type="url" id="github" name="github"
                    placeholder='https://github.com/username'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.github}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="linkedin" className="block text-sm font-semibold">LinkedIn</label>
                    <input type="url" id="linkedin" name="linkedin"
                    placeholder='https://linkedin.com/username'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.linkedin}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default PersonalDetails