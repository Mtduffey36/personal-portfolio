import React from "react";

const Portfolio = () => {
    const projects = [
        {
            title: 'Mood Sync',
            image: './assets/images/mood-sync.JPG',
            live: '#',
            repo: '#'
        },
        {
            title: 'Hair & Co.',
            image: './assets/images/hairCo.png',
            live: '#',
            repo: '#'
        },
    ];

    return (
        <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-dark-gray p-4 rounded">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4"/>
                    <h3 className="mt-4 text-xl">{project.title}</h3>
                    <div className="mt-2">
                        <a href={project.live} className="text-dark-green">Live Demo</a> | <a href={project.demo} className="text-dark-green">GitHub Repo</a>
                    </div>
                </div>
            ))}
        </section>
    );
};

module.exports = Portfolio;