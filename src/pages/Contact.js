import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        setError(null);

        // Simulate form submission
        try {
            setStatus('Submitting...');
            // Here you would typically send the form data to your API
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate success or failure
                    Math.random() > 0.5 ? resolve() : reject(new Error('Submission failed'));
                }, 2000);
            });
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            {status && <p className="status-message">{status}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Contact;
