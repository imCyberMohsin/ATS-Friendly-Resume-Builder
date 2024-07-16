import React from 'react'

const Hobbies = ({ formData, handleChange, handleSubmit }) => {
    // hobby_1: '',
    // hobby_2: '',
    // hobby_3: '',
    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="hobby_1" className="block text-sm font-semibold">Hobby 1</label>
                    <input type="text" id="hobby_1" name="hobby_1"
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        placeholder='Exploring Trending Tech'
                        value={formData.hobby_1}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="hobby_2" className="block text-sm font-semibold">Hobby 2</label>
                    <input type="text" id="hobby_2" name="hobby_2"
                        placeholder='Coding, To solve problems'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.hobby_2}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="hobby_3" className="block text-sm font-semibold">Hobby 3</label>
                    <input type="text" id="hobby_3" name="hobby_3"
                        placeholder='Watching Tech Movies'
                        className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                        value={formData.hobby_3}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default Hobbies