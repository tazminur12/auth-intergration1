import React from 'react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative text-white text-center py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('./hero-image.jpg')" }}
            >
                <div className="absolute inset-0 bg-opacity-60"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">Hi, I'm a Developer</h1>
                    <p className="text-xl mb-6">A passionate Web Developer creating modern websites and applications</p>
                    <a
                        href="#projects"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        View My Work
                    </a>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        I'm a web developer with a passion for creating clean, user-friendly, and scalable web applications. I specialize in frontend technologies such as React, HTML, CSS, and JavaScript, as well as backend development with Node.js and Python.
                    </p>
                    <p className="text-lg text-gray-600">
                        My goal is to turn ideas into functional websites and applications, providing users with seamless and interactive experiences. I’m always learning and staying up to date with the latest web development trends.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-blue-50 py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">My Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>React</li>
                                <li>HTML5, CSS3</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend Development</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Python</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Git</li>
                                <li>Docker</li>
                                <li>Figma</li>
                                <li>Webpack</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://i.ibb.co.com/WpMvrWYk/1-07-Q32-Tqocy-Udjm-BDc-Fa-Hzw.png" alt="Project 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project One</h3>
                            <p className="text-gray-600">A web application built with React and Node.js.</p>
                            <a href="#" className="text-blue-600 hover:underline mt-2">View Project</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://i.ibb.co.com/bg2bLZkR/Portfolio-Desk.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Two</h3>
                            <p className="text-gray-600">A portfolio website showcasing my work and skills.</p>
                            <a href="#" className="text-blue-600 hover:underline mt-2">View Project</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <img src="https://i.ibb.co.com/23wkzJz9/images-q-tbn-ANd9-Gc-Ryjups3-r-AUGy-MA0-IIi-Ykz5q8m-L-Tu-W3-MIz-U4s-x-I4fa-Odt7v6-Q04nzu-CFSZEvuh-DJ.png" alt="Project 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Three</h3>
                            <p className="text-gray-600">An e-commerce platform built with React, Redux, and Node.js.</p>
                            <a href="#" className="text-blue-600 hover:underline mt-2">View Project</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-blue-600 text-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
                    <p className="text-lg mb-6">I would love to hear about your project and how I can help. Get in touch with me!</p>
                    <a href="mailto:tanim@example.com" className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300">
                        Contact Me
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
