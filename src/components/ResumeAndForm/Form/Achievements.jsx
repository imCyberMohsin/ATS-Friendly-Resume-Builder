import React from 'react'

const Achievements = ({ formData, handleChange, handleSubmit }) => {
    // achievement_1: '',
    // achievement_2: '',
    // achievement_3: '',
return (
    <>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="achievement_1" className="block text-sm font-semibold">Achievement 1</label>
                <input type="text" id="achievement_1" name="achievement_1"
                    className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                    placeholder='5-star Hackerrank rating in Python'
                    value={formData.achievement_1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="achievement_2" className="block text-sm font-semibold">Achievement 2</label>
                <input type="text" id="achievement_2" name="achievement_2"
                    placeholder='Leetcode Top 15%'
                    className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                    value={formData.achievement_2}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="achievement_3" className="block text-sm font-semibold">Achievement 3</label>
                <input type="text" id="achievement_3" name="achievement_3"
                    placeholder='CodeChef 4-star Coder'
                    className="w-full p-2 mt-1 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:border-blue-500"
                    value={formData.achievement_3}
                    onChange={handleChange}
                />
            </div>
        </form>
    </>
)
}

export default Achievements