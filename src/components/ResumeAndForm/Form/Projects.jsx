import React from 'react'

const Projects = ({ formData, handleChange, handleSubmit }) => {
    // p1_projectName: '',
    // p1_projectLiveLink: '',
    // p1_projectRepoLink: '',
    // p1_techStacksUsed: '',
    // p1_projectDesc: '',
    // p2_projectName: '',
    // p2_projectLiveLink: '',
    // p2_projectRepoLink: '',
    // p2_techStacksUsed: '',
    // p2_projectDesc: '',
    // p3_projectName: '',
    // p3_projectLiveLink: '',
    // p3_projectRepoLink: '',
    // p3_techStacksUsed: '',
    // p3_projectDesc: '',
    return (
        <>
            <div className='h-screen overflow-y-auto'>
                {/* Project 1 */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="p1_projectName" className="block text-sm font-semibold">Project Name</label>
                        <input type="text" id="p1_projectName" name="p1_projectName"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            placeholder='E-commerce Website'
                            value={formData.p1_projectName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p1_projectLiveLink" className="block text-sm font-semibold">Project Live Link</label>
                        <input type="text" id="p1_projectLiveLink" name="p1_projectLiveLink"
                            placeholder='https://portfolio.com'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p1_projectLiveLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p1_projectRepoLink" className="block text-sm font-semibold">Github Repo Link</label>
                        <input type="text" id="p1_projectRepoLink" name="p1_projectRepoLink"
                            placeholder='https://github.com/repo'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p1_projectRepoLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p1_techStacksUsed" className="block text-sm font-semibold">Project Description</label>
                        <input type="text" id="p1_techStacksUsed" name="p1_techStacksUsed"
                            placeholder='HTML, CSS, JS'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p1_techStacksUsed}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p1_projectDesc" className="block text-sm font-semibold">Project Description</label>
                        <input type="text" id="p1_projectDesc" name="p1_projectDesc"
                            placeholder='Project Description'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p1_projectDesc}
                            onChange={handleChange}
                        />
                    </div>
                </form>

                <div className='my-10'><hr /></div>

                {/* Project 2 */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="p2_projectName" className="block text-sm font-semibold">Project Name</label>
                        <input type="text" id="p2_projectName" name="p2_projectName"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            placeholder='E-commerce Website'
                            value={formData.p2_projectName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p2_projectLiveLink" className="block text-sm font-semibold">Project Live Link</label>
                        <input type="text" id="p2_projectLiveLink" name="p2_projectLiveLink"
                            placeholder='https://portfolio.com'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p2_projectLiveLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p2_projectRepoLink" className="block text-sm font-semibold">Github Repo Link</label>
                        <input type="text" id="p2_projectRepoLink" name="p2_projectRepoLink"
                            placeholder='https://github.com/repo'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p2_projectRepoLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p2_techStacksUsed" className="block text-sm font-semibold">Tech Stacks Used</label>
                        <input type="text" id="p2_techStacksUsed" name="p2_techStacksUsed"
                            placeholder='HTML, CSS, JS'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p2_techStacksUsed}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p2_projectDesc" className="block text-sm font-semibold">Project Description</label>
                        <input type="text" id="p2_projectDesc" name="p2_projectDesc"
                            placeholder='Project Description'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p2_projectDesc}
                            onChange={handleChange}
                        />
                    </div>
                </form>

                <div className='my-10'><hr /></div>

                {/* Project 3 */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="p3_projectName" className="block text-sm font-semibold">Project Name</label>
                        <input type="text" id="p3_projectName" name="p3_projectName"
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            placeholder='E-commerce Website'
                            value={formData.p3_projectName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p3_projectLiveLink" className="block text-sm font-semibold">Project Live Link</label>
                        <input type="text" id="p3_projectLiveLink" name="p3_projectLiveLink"
                            placeholder='https://portfolio.com'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p3_projectLiveLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p3_projectRepoLink" className="block text-sm font-semibold">Github Repo Link</label>
                        <input type="text" id="p3_projectRepoLink" name="p3_projectRepoLink"
                            placeholder='https://github.com/repo'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p3_projectRepoLink}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p3_techStacksUsed" className="block text-sm font-semibold">Tech Stacks Used</label>
                        <input type="text" id="p3_techStacksUsed" name="p3_techStacksUsed"
                            placeholder='HTML, CSS, JS'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p3_techStacksUsed}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="p3_projectDesc" className="block text-sm font-semibold">Project Description</label>
                        <input type="text" id="p3_projectDesc" name="p3_projectDesc"
                            placeholder='Project Description'
                            className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                            value={formData.p3_projectDesc}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Projects