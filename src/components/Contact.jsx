import React, { useState } from 'react';
import '../components/Contact.css'
// Import the CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission logic here
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact-section" id='contact-section'>
            <div className="container-2">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
