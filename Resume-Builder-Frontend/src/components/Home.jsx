import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-zinc-900 text-zinc-200 px-6 sm:px-20">
            {/* Hero Section */}
            <section className="bg-hero-pattern bg-cover bg-center text-center py-10">
                <div className="container mx-auto px-6">
                    <div className="bg-zinc-800 bg-opacity-70 p-10 rounded-lg inline-block">
                        <h1 className="text-5xl font-extrabold mb-4">Build Your Professional Resume</h1>
                        <p className="text-xl mb-8 max-w-xl mx-auto">Create a professional resume in minutes with our easy-to-use resume builder. Stand out to employers and land your dream job!</p>
                        <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <div className="container mx-auto px-6 text-center">
                    {/* <h2 className="text-3xl font-bold mb-12">Features</h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-zinc-800 shadow-lg rounded-lg">
                            <div className="text-blue-500 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4a1 1 0 00-.707.293l-9 9a1 1 0 101.414 1.414L12 6.414l8.293 8.293a1 1 0 001.414-1.414l-9-9A1 1 0 0012 4zM12 9a1 1 0 00-.707.293l-3 3a1 1 0 001.414 1.414L12 10.414l2.293 2.293a1 1 0 001.414-1.414l-3-3A1 1 0 0012 9z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
                            <p>Create your resume with a simple, intuitive interface.</p>
                        </div>
                        <div className="p-8 bg-zinc-800 shadow-lg rounded-lg">
                            <div className="text-blue-500 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.707 2.293a1 1 0 00-1.414 0L12 5.586 8.707 2.293a1 1 0 00-1.414 1.414L10.586 7 7.293 10.293a1 1 0 001.414 1.414L12 8.414l3.293 3.293a1 1 0 001.414-1.414L13.414 7l3.293-3.293a1 1 0 000-1.414z"></path>
                                    <path d="M4 9a1 1 0 00-1 1v11a2 2 0 002 2h14a2 2 0 002-2V10a1 1 0 10-2 0v11H5V10a1 1 0 00-1-1z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Professional Templates</h3>
                            <p>Choose from a variety of templates that suit your style.</p>
                        </div>
                        <div className="p-8 bg-zinc-800 shadow-lg rounded-lg">
                            <div className="text-blue-500 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm-9 17.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l10-10a1 1 0 00-1.414-1.414L10 19.586z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Download & Share</h3>
                            <p>Download your resume as a PDF and share it easily.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
