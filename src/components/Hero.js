'use client';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <img src="/hero-fence.png" alt="Premium fence installation by TradeLayer Construction" />
            </div>

            <div className="hero-content">
                <div className="hero-badge">
                    ✦ Austin&apos;s Trusted Fencing Experts
                </div>

                <h1>
                    Your Neighbors Will Ask <span className="highlight">Who Built That Fence.</span>
                </h1>

                <p className="hero-subtitle">
                    Premium fencing installed in days, not weeks. No ghosting. No surprises.
                    Just a fence you&apos;ll be proud of for years to come.
                </p>

                <div className="hero-actions">
                    <a href="#quote" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Get Your Free Quote →
                    </a>
                    <a href="tel:+15125551234" className="btn btn-secondary">
                        📞 Call Now
                    </a>
                </div>

                <div className="hero-trust">
                    <div className="trust-item">
                        <span className="trust-stars">★★★★★</span>
                        <span>5.0 on Google</span>
                    </div>
                    <div className="trust-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>Licensed & Insured</span>
                    </div>
                    <div className="trust-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span>Family-Owned</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
