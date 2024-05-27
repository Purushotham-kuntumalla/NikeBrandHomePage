import React from 'react';
import '../components/hero.css'
const Hero = () => {
    return (
        <>  
            <nav className='navigation'>
                <li> <a className='nav-links' href="#container">Home</a> </li>
                <li> <a className='nav-links' href="#about-section">About</a> </li>
                <li> <a className='nav-links' href="#products-section">Products</a> </li>
                <li> <a className='nav-links' href="#testimonials-section">Reviews</a> </li>
                <li> <a className='nav-links' href="#contact-section">Contact</a> </li>
            </nav>
<main className="container" id="container">
    <div className="hero-content">
        <div className="hero-headding">
            <h1>YOUR FEET 
DESERVE
THE BEST</h1>
        </div>
        <div className="hero-para">
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>
        <div className="hero-buttons">
            <button className="btn">Shop</button>
            <button className="btn">Catogery</button>
        </div>
       
    </div>
    <div className="hero-image">
        <img className="image-shoe" src="images/shoe_image-removebg.png" alt="" />
    </div>
</main>
</>
        
    )
};

export default Hero;