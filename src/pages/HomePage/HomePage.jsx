import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import customer1 from '../../Assets/customer1.jpg';
import customer2 from '../../Assets/customer2.jpg';
import customer3 from '../../Assets/customer3.jpg';
import customer4 from '../../Assets/customer4.jpg';
import customer5 from '../../Assets/customer5.jpg';
import customer6 from '../../Assets/customer6.jpg';
import customer7 from '../../Assets/customer7.jpeg';
import customer8 from '../../Assets/customer8.jpeg';
import customer9 from '../../Assets/customer9.jpg';
import mail from '../../Assets/mail-send.png';
import instagram from '../../Assets/instagram.png';
import facebook from '../../Assets/facebook.png';
import tiktok from '../../Assets/tiktok.png';
import owners from '../../Assets/owners.jpg';
import logo from '../../Assets/logo.png'

export default function HomePage() {
    return (
        <div>
            <section>
                <section id="feature" className="section">
                    <button><Link to="/shop">SHOP NOW</Link></button>
                </section>
                <section className="section" id="our-story">
                    <div className="story-content">
                        <img id="owners" src={owners} alt="" />
                        <div id='our-story-content'>
                            <h2 id="our-story-title">OUR STORY</h2>
                            <p>Hi, Welcome to Garment of God! We are the Adomako's and we're so grateful that you're here. In 2020, we stared this small business with purpose to spead the gospel through fashion. As beleivers, we want to not only spead the gospel through what we say, but rather how we show up in the world also.</p>
                        </div>
                    </div>
                </section>
                <section id="selfie-container" className="section">
                    <h2>HOW OTHERS STYLE IT</h2>
                    <div className="collage">
                        <img src={customer1} alt="" />
                        <img src={customer2} alt="" />
                        <img src={customer3} alt="" />
                        <img src={customer4} alt="" />
                        <img src={customer5} alt="" />
                        <img src={customer6} alt="" />
                        <img src={customer7} alt="" />
                        <img src={customer8} alt="" />
                        <img src={customer9} alt="" />
                    </div>
                </section>
                <section id="lastslide" class="section"></section>
                <footer>
                    <div class="footer-content">
                        <div class="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div class="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/shop">Shop</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <img src={mail} alt="" /><br /> garmentofgod@outlook.com
                        </div>
                        <div class="footer-social">
                            <h3>Follow Us</h3>
                            <ul>
                                <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                                <li><a href="#"><img src={tiktok} alt="TikTok" /></a></li>
                                <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 Garment of God. All rights reserved.</p>
                    </div>
                </footer>

            </section>

        </div>
    );
}

