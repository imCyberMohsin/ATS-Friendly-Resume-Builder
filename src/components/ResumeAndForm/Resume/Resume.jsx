import React, { useRef } from 'react'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Resume = ({ formData }) => {
    const pdfRef = useRef();

    const downloadPDF = () => {
        const input = pdfRef.current;

        // Adjust scale and quality
        html2canvas(input, { scale: 3, allowTaint: true, useCORS: true }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // Calculate PDF page dimensions
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // Calculate image dimensions and position
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 0; // Adjust as needed for margins

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

            // Save or download the PDF
            pdf.save('resume.pdf');
        });
    };

    return (
        <>
            <div className="w-full md:w-2/3 flex flex-col items-center justify-center bg-zinc-700 p-8">
                <div className="flex justify-center my-4">
                    <button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Download PDF
                    </button>
                </div>
                <div ref={pdfRef} className="main w-screen sm:w-full bg-white text-black flex flex-col rounded-sm p-8">
                    {/* Personal Details */}
                    <div className="top-header w-full text-center py-2">
                        <h1 className="text-4xl font-bold">{formData.name || 'Mohsin Ansari'}</h1>
                        <h4 className="text-md font-semibold leading-tight">{formData.jobTitle || 'Software Engineer'}</h4>
                        <div className="links flex justify-center items-center gap-3 mt-1">
                            <a href={formData.github || 'https://github.com/imcybermohsin'} target="_blank" rel="noopener noreferrer" className="font-medium text-sm flex items-center gap-1">
                                <RiGithubFill className="text-xl" />
                                GitHub Profile
                            </a>
                            <span>|</span>
                            <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-sm flex items-center gap-1">
                                <RiLinkedinBoxFill className="text-xl" />
                                LinkedIn Profile
                            </a>
                        </div>
                        <div className="contacts flex justify-center items-center gap-3">
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiMailLine className="text-lg" />
                                {formData.email || 'your@gmail.com'}
                            </span>
                            <span>|</span>
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiPhoneLine className="text-lg" />
                                {formData.phone || '91xxxxxxxxxx'}
                            </span>
                            <span>|</span>
                            <span className="font-semibold text-sm flex items-center gap-1">
                                <RiMapPinLine className="text-lg" />
                                {formData.location || 'City, State'}
                            </span>
                        </div>
                        <hr className="border-b-[1px] border-b-black mt-1" />
                    </div>

                    {/* All Sections */}
                    <div>
                        {/* Skills section */}
                        <div className="skills py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">SKILLS</h1>
                            <div className="leading-tight text-sm flex gap-5">
                                <div className="font-semibold pl-1">
                                    <p>• LANGUAGES</p>
                                    <p>• LIBRARIES/FRAMEWORKS</p>
                                    <p>• DATABASES</p>
                                    <p>• DEV TOOLS</p>
                                </div>
                                <div>
                                    <p className="justify-start">{formData.languages || "JavaScript, Python, C++"}</p>
                                    <p className="justify-start">{formData.librariesAndFrameworks || "React, Node.js, Express"}</p>
                                    <p className="justify-start">{formData.databases || "MongoDB, MySQL"}</p>
                                    <p className="justify-start">{formData.devTools || "Git, Docker, AWS"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Education section */}
                        <div className="education py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">EDUCATION</h1>
                            <div>
                                <div className="college flex justify-between">
                                    <p className="text-base leading-tight font-semibold">{formData.collegeName || "Your College Name"}</p>
                                    <p className="text-xs leading-tight">{formData.courseDuration || "January 2024 - December 2024"}</p>
                                </div>
                                <div className="stream flex justify-between">
                                    <p className="text-sm">{formData.courseName || " B.TECH | Computer Science"}</p>
                                    <p className="text-xs">{formData.collegeLocation || "City, State"}</p>
                                </div>
                                <p className="text-sm">{formData.cgpa || "CGPA: 9.1"}</p>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="experience py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">EXPERIENCE</h1>
                            {/* Exp 1 */}
                            <div className="py-1">
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold">{formData.exp1_companyName || "Amazon India"} | <span className="text-xs">{formData.exp1_jobPosition || "Software Developer"}</span></p>
                                    <p className="text-xs">{formData.exp1_jobDuration || "July 2022 - August 2023"}</p>
                                </div>
                                <div className="pl-2 pt-1 text-sm px-12">
                                    <p>• {formData.exp1_jobDesc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia fugit labore minus cum necessitatibus, eum rem quos modi vel!"}</p>
                                </div>
                            </div>
                            {/* Exp 2 */}
                            {(formData.exp2_companyName || formData.exp2_jobPosition || formData.exp2_jobDuration || formData.exp2_jobDesc) && (
                                <div className="py-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-semibold">{formData.exp2_companyName || "Google India"} | <span className="text-xs">{formData.exp2_jobPosition || "UI Designer"}</span></p>
                                        <p className="text-xs">{formData.exp2_jobDuration || "July 2023 - June 2024"}</p>
                                    </div>
                                    <div className="pl-2 pt-1 text-sm px-12">
                                        <p>• {formData.exp2_jobDesc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia fugit labore minus cum necessitatibus, eum rem quos modi vel!"}</p>
                                    </div>
                                </div>
                            )}
                            {/* Exp 3 */}
                            {(formData.exp3_companyName || formData.exp3_jobPosition || formData.exp3_jobDuration || formData.exp3_jobDesc) && (
                                <div className="py-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-semibold">{formData.exp3_companyName || "Google India"} | <span className="text-xs">{formData.exp3_jobPosition || "UI Designer"}</span></p>
                                        <p className="text-xs">{formData.exp3_jobDuration || "July 2023 - June 2024"}</p>
                                    </div>
                                    <div className="pl-2 pt-1 text-sm px-12">
                                        <p>• {formData.exp3_jobDesc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia fugit labore minus cum necessitatibus, eum rem quos modi vel!"}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Projects section */}
                        <div className="projects py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">PROJECTS</h1>
                            {/* Project 1 */}
                            <div className="py-1">
                                <div className="flex justify-between">
                                    <p className="text-sm font-semibold">{formData.p1_projectName || "Project Name 1"} | <a href={formData.p1_projectLiveLink} target="_blank" className="text-xs">LIVE LINK</a></p>
                                    <p className="text-xs">{formData.p1_techStacksUsed || "React, Node.js, MongoDB"}</p>
                                </div>
                                <div className="pl-2 pt-1 text-sm px-12">
                                    <p>• {formData.p1_projectDesc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ratione repellat illo assumenda obcaecati similique autem facilis. Laborum, incidunt sapiente."}</p>
                                </div>
                            </div>
                            {/* Project 2 */}
                            {(formData.p2_projectName || formData.p2_projectLiveLink || formData.p2_techStacksUsed || formData.p2_projectDesc) && (
                                <div className="py-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-semibold">
                                            {formData.p2_projectName} | <a href={formData.p2_projectLiveLink || "Project Name 2"} target="_blank" className="text-xs">LIVE LINK</a>
                                        </p>
                                        <p className="text-xs">{formData.p2_techStacksUsed || "React, Node.js, MongoDB"}</p>
                                    </div>
                                    <div className="pl-2 pt-1 text-sm px-12">
                                        <p>• {formData.p2_projectDesc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus architecto numquam natus a ullam quod consequatur minus quas sapiente?"}</p>
                                    </div>
                                </div>
                            )}
                            {/* Project 3 */}
                            {(formData.p3_projectName || formData.p3_projectLiveLink || formData.p3_techStacksUsed || formData.p3_projectDesc) && (
                                <div className="py-1">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-semibold">
                                            {formData.p3_projectName || "Project Name 3"} |
                                            <a href={formData.p3_projectLiveLink} target="_blank" className="text-xs">LIVE LINK</a>
                                        </p>
                                        <p className="text-xs">{formData.p3_techStacksUsed || "React, Node.js, MongoDB"}</p>
                                    </div>
                                    <div className="pl-2 pt-1 text-sm px-12">
                                        <p>• {formData.p3_projectDesc || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ratione repellat illo assumenda obcaecati similique autem facilis. Laborum, incidunt sapiente."}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Certifications section */}
                        {/* <div className="certifications py-2 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">CERTIFICATIONS</h1>
                            <div className="pl-2 pt-1">
                                <p className="font-sm">• Certification x<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                                <p className="font-sm">• Certification y<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                                <p className="font-sm">• Certification z<a href="#" className="text-xs font-semibold"> - BY ORGANIZATION</a></p>
                            </div>
                        </div> */}

                        {/* Achievements section */}
                        <div className="achievements py-2 pb-3 border-b border-gray-600">
                            <h1 className="text-xl font-semibold">ACHIEVEMENTS</h1>
                            <div className="pl-2 pt-1 text-sm">
                                <p>• {formData.achievement_1 || "Won the XYZ Hackathon in 2023"}</p>
                                {formData.achievement_2 && <p>• {formData.achievement_2}</p>}
                                {formData.achievement_3 && <p>• {formData.achievement_3}</p>}
                            </div>
                        </div>

                        {/* Hobbies Section */}
                        <div className="hobbies py-2 pb-3">
                            <h1 className="text-xl font-semibold">HOBBIES</h1>
                            <div className="pl-2 pt-1 text-sm">
                                <p>• {formData.hobby_1 || "Playing Guitar"}</p>
                                {formData.hobby_2 && <p>• {formData.hobby_2}</p>}
                                {formData.hobby_3 && <p>• {formData.hobby_3}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume