import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempErrors = {};
        if (!name) tempErrors.name = "Name is required";
        if (!email || !/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is required";
        if (!message) tempErrors.message = "Message is required";
        setErrors(tempErrors);
    };

    return (
        <section className="p-4">
            <form onSubmit={handleSubmit} className="bg-dark-gray p-4 rounded">
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                    type="text"
                    id="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded bg-dark-green text-white"
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>
                <div className="mt-4">
                    <label htmlFor="message">Message:</label>\
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 rounded bg-dark-green text-white"
                    />
                    {errors.message && <span className="text-red-500">{errors.message}</span>}
                </div>
                <button type="submit" className="mt-4 p-2 bg-dark-green text-white rounded">Send</button>
            </form>
        </section>
    );
};

export default Contact;