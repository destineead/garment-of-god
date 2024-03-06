import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div>
            <section>
                <section id="feature" className="section">
                <button><Link to="/shop">SHOP NOW</Link></button>
                </section>
                <section className="section">
                    <h2 id="our-story-title">OUR STORY</h2>
                    <p id='our-story-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section id="best-sellers" className="section">
                    <div id='bs-bg-image'/>
                    <p id='bs-content'><span>SHOP BEST SELLERS</span><br/>
                        Discover your next must-have.<br/><br/>
                            <button><Link to="/shop">SHOP NOW</Link></button>
                    </p>
                </section>
                <section id="selfie" className="section">
                    <h2>HOW OTHERS STYLE IT</h2>
                </section>
                <section id="mission" className="section">
                    <div className="mission-content">
                        <h2>Why people love to shop Garment of God</h2>
                    </div>
                    <div id='mission-bg-image'/>
                </section>
                <section id="contact" className="section">
                    <h2>Contact Us</h2>
                    <p> email, facebook, tiktok, instagram</p>
                </section>
            </section>
        </div>
    );
}
