import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-zinc-900 text-center border-t">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-white uppercase">Company</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline hover:text-blue-500 duration-200 transition-all">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Brand
                                        Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-white uppercase">Help center</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Discord
                                        Server</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#"
                                        className="hover:underline hover:text-blue-500 duration-200 transition-all">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Contact
                                        Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-white uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Privacy
                                        Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#"
                                        className="hover:underline hover:text-blue-500 duration-200 transition-all">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Terms &amp;
                                        Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-bold text-white uppercase">Download</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline hover:text-blue-500 duration-200 transition-all">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-4  md:flex flex-col md:items-center md:justify-center border-t">
                        <div className="px-4 py-2 md:flex flex-col md:items-center md:justify-center">
                            <span className="text-gray-400 sm:text-center text-sm font-medium">© 2024 <a href="#">Mohsin Ansari. </a>All Rights Reserved.</span>
                            <p className="w-full text-gray-400 mt-2 font-semibold text-sm">Designed and Developed <span className="whitespace-nowrap">with <i className="fa-solid fa-heart text-blue-500 cursor-pointer"></i> by <a target="_blank" href="https://www.linkedin.com/in/mohsin-ansari127/" className="text-blue-500 underline underline-offset-2">Mohsin Ansari</a></span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer