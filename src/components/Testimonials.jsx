import React from 'react';
import '../components/Testimonials.css'; // Import the CSS file for styling

const Testimonials = () => {
    // Sample fake testimonials data
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "These shoes are amazing! They're so comfortable and stylish. I've been getting compliments everywhere I go.",
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "I absolutely love my new sneakers! They're perfect for running and look great with any outfit.",
        },
        {
            id: 3,
            name: "Mike Johnson",
            comment: "The customer service was excellent, and the quality of the shoes exceeded my expectations. Highly recommend!",
        }
    ];

    return (
        <section className="testimonials-section" id='testimonials-section'>
            <div className="container-1">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p className="testimonial-comment">{testimonial.comment}</p>
                            <p className="testimonial-name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
