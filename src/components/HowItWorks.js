export default function HowItWorks() {
    const steps = [
        {
            number: '1',
            title: 'Call or Text',
            description: 'Tell us what you need. We\'ll give you an honest estimate within 24 hours — no pressure, no games.',
            emoji: '📞',
        },
        {
            number: '2',
            title: 'We Measure & Plan',
            description: 'Our crew comes out, measures everything, and locks in your design. You approve — we order materials.',
            emoji: '📐',
        },
        {
            number: '3',
            title: 'We Build It. Fast.',
            description: 'Most projects done in 1-3 days. You sit back, relax, and enjoy your brand-new fence.',
            emoji: '🔨',
        },
    ];

    return (
        <section className="section section-center" id="how-it-works">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">
                Three Steps to Your <span className="accent-text">Dream Fence</span>
            </h2>
            <p className="section-subtitle">
                We handle everything from start to finish. You just pick the style you love.
            </p>

            <div className="steps-grid">
                {steps.map((step) => (
                    <div className="step-card" key={step.number}>
                        <div className="step-number">{step.number}</div>
                        <h4>{step.emoji} {step.title}</h4>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
