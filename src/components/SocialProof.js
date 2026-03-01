export default function SocialProof() {
    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '10+', label: 'Years Experience' },
        { number: '5.0', label: 'Google Rating' },
        { number: '100%', label: 'Satisfaction' },
    ];

    const testimonials = [
        {
            text: "Best contractor experience I've ever had. They showed up on time, finished in 2 days, and my fence looks absolutely incredible. My neighbors keep asking for their number.",
            author: 'Sarah M.',
            role: 'Homeowner — Cedar Park, TX',
        },
        {
            text: "After getting ghosted by two other companies, TradeLayer was a breath of fresh air. Honest quote, fast work, beautiful results. I wish I'd called them first.",
            author: 'James R.',
            role: 'Homeowner — Round Rock, TX',
        },
        {
            text: "We needed a privacy fence for our backyard ASAP. TradeLayer had it done in a day and a half. The quality is outstanding — solid cedar, perfectly level, no gaps. Worth every penny.",
            author: 'Maria L.',
            role: 'Homeowner — Austin, TX',
        },
    ];

    return (
        <section className="section section-center" id="social-proof">
            <span className="section-label">Don&apos;t Take Our Word For It</span>
            <h2 className="section-title">
                Hundreds of Happy Homeowners <span className="accent-text">Can&apos;t Be Wrong</span>
            </h2>

            <div className="stats-bar">
                {stats.map((stat) => (
                    <div className="stat-item" key={stat.label}>
                        <span className="stat-number">{stat.number}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>

            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div className="testimonial-card" key={t.author}>
                        <div className="testimonial-stars">★★★★★</div>
                        <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                        <p className="testimonial-author">{t.author}</p>
                        <p className="testimonial-role">{t.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
