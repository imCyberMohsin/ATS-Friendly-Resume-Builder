import React from 'react'

const Skills = ({ formData, handleChange, handleSubmit }) => {
    // languages: '',
    // librariesAndFrameworks: '',
    // databases: '',
    // devTools: '',
    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="languages" className="block text-sm font-semibold">Languages</label>
                    <input type="text" id="languages" name="languages"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Java, C++, Python'
                        value={formData.languages}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="librariesAndFrameworks" className="block text-sm font-semibold">Libraries & Frameworks</label>
                    <input type="text" id="librariesAndFrameworks" name="librariesAndFrameworks"
                        placeholder='React.js, Node.js, Express.js'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.librariesAndFrameworks}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="databases" className="block text-sm font-semibold">Databases</label>
                    <input type="text" id="databases" name="databases"
                        placeholder='MongoDB, mySQL'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.databases}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="devTools" className="block text-sm font-semibold">Dev Tools</label>
                    <input type="text" id="devTools" name="devTools"
                        placeholder='Git, Docker, AWS'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.devTools}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Skills