export default function WhyUs() {
    const reasons = [
        {
            icon: '🤝',
            title: 'We Show Up. Every Time.',
            description: 'No ghosting. No excuses. When we say we\'ll be there, we\'re there. Our reputation depends on it — and we take that seriously.',
        },
        {
            icon: '🏗️',
            title: 'Built to Last',
            description: 'We use premium-grade materials — solid cedar, powder-coated iron, commercial vinyl. Your fence won\'t just look good, it\'ll look good for decades.',
        },
        {
            icon: '⚡',
            title: 'Done in Days, Not Weeks',
            description: 'While other crews take weeks, most of our projects are completed in 1-3 days. We work fast without cutting corners.',
        },
        {
            icon: '💯',
            title: 'Honest, Upfront Pricing',
            description: 'The price we quote is the price you pay. No hidden fees. No surprise upcharges. No "oh, we didn\'t account for that."',
        },
    ];

    return (
        <section className="pain-section" id="why-us">
            <div className="section section-center">
                <span className="section-label">The TradeLayer Difference</span>
                <h2 className="section-title">
                    Why Austin Homeowners <span className="accent-text">Trust TradeLayer</span>
                </h2>
                <p className="section-subtitle">
                    We don&apos;t just build fences. We build peace of mind.
                </p>

                <div className="why-grid">
                    {reasons.map((reason) => (
                        <div className="why-card" key={reason.title}>
                            <div className="why-icon">{reason.icon}</div>
                            <div>
                                <h4>{reason.title}</h4>
                                <p>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
