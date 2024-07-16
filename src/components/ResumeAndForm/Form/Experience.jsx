import React from 'react'

const Experience = ({ formData, handleChange, handleSubmit }) => {
    // exp1_companyName: '',
    // exp1_jobPosition: '',
    // exp1_jobDesc: '',
    // exp1_jobDuration: '',
    // exp2_companyName: '',
    // exp2_jobPosition: '',
    // exp2_jobDesc: '',
    // exp2_jobDuration: '',
    // exp3_companyName: '',
    // exp3_jobPosition: '',
    // exp3_jobDesc: '',
    // exp3_jobDuration: '',
    return (
        <div className='h-screen overflow-y-auto'>
            {/* Experience 1 */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exp1_companyName" className="block text-sm font-semibold">Company Name</label>
                    <input type="text" id="exp1_companyName" name="exp1_companyName"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Eg: Amazon'
                        value={formData.exp1_companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp1_jobPosition" className="block text-sm font-semibold">Job Position</label>
                    <input type="text" id="exp1_jobPosition" name="exp1_jobPosition"
                        placeholder='Eg: Software Developer'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp1_jobPosition}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp1_jobDesc" className="block text-sm font-semibold">Job Description</label>
                    <input type="text" id="exp1_jobDesc" name="exp1_jobDesc"
                        placeholder='About The Job'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp1_jobDesc}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp1_jobDuration" className="block text-sm font-semibold">Job Duration</label>
                    <input type="text" id="exp1_jobDuration" name="exp1_jobDuration"
                        placeholder='Eg: June 2023 - June 2024'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp1_jobDuration}
                        onChange={handleChange}
                    />
                </div>
            </form>

            <div className='my-10'><hr /></div>

            {/* Experience 2 */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exp2_companyName" className="block text-sm font-semibold">Company Name</label>
                    <input type="text" id="exp2_companyName" name="exp2_companyName"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Eg: Amazon'
                        value={formData.exp2_companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp2_jobPosition" className="block text-sm font-semibold">Job Position</label>
                    <input type="text" id="exp2_jobPosition" name="exp2_jobPosition"
                        placeholder='Eg: Software Developer'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp2_jobPosition}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp2_jobDesc" className="block text-sm font-semibold">Job Description</label>
                    <input type="text" id="exp2_jobDesc" name="exp2_jobDesc"
                        placeholder='About The Job'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp2_jobDesc}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp2_jobDuration" className="block text-sm font-semibold">Job Duration</label>
                    <input type="text" id="exp2_jobDuration" name="exp2_jobDuration"
                        placeholder='Eg: June 2023 - June 2024'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp2_jobDuration}
                        onChange={handleChange}
                    />
                </div>
            </form>

            <div className='my-10'><hr /></div>

            {/* Experience 3 */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="exp3_companyName" className="block text-sm font-semibold">Company Name</label>
                    <input type="text" id="exp3_companyName" name="exp3_companyName"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Eg: Amazon'
                        value={formData.exp3_companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp3_jobPosition" className="block text-sm font-semibold">Job Position</label>
                    <input type="text" id="exp3_jobPosition" name="exp3_jobPosition"
                        placeholder='Eg: Software Developer'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp3_jobPosition}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp3_jobDesc" className="block text-sm font-semibold">Job Description</label>
                    <input type="text" id="exp3_jobDesc" name="exp3_jobDesc"
                        placeholder='About The Job'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp3_jobDesc}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="exp3_jobDuration" className="block text-sm font-semibold">Job Duration</label>
                    <input type="text" id="exp3_jobDuration" name="exp3_jobDuration"
                        placeholder='Eg: June 2023 - June 2024'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.exp3_jobDuration}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default Experience