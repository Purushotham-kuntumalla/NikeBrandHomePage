import React from 'react';
import Hero from './components/Hero';
import About from './components/About'; // Create and import additional components
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
const App = () => {
    return (
        <div className="App">
            
            <Hero />
            <About />
            <Products />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
