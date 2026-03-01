'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <img
                    src="/logo.png"
                    alt="TradeLayer Construction"
                    className="navbar-logo"
                />

                <ul className="navbar-links">
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a></li>
                    <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a></li>
                    <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}>Gallery</a></li>
                    <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a></li>
                </ul>

                <div className="navbar-cta">
                    <a href="tel:+17373360983" className="navbar-phone">
                        (737) 336-0983
                    </a>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => scrollTo('quote')}
                    >
                        Free Quote
                    </button>
                </div>

                <button className="mobile-menu-btn" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
