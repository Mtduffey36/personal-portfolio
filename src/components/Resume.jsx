import React from "react";

const Resume = () => {
    const proficiencies = ["JavaScript", "React", "Node.js", "CSS", "HTML", "MongoDB"];

    return (
        <section className="p-4">
            <a href="./assets/docs/MduffResume.pdf" download className="text-dark-green">Download My Resume</a>
            <h2 className="mt-4 text-xl">Proficiencies</h2>
            <ul className="mt-2">
                {proficiencies.map((skill, index) => {
                    <li key={index} className="mt-1">{skill}</li>
                })}
            </ul>
        </section>
    );
};

export default Resume;