export default function Services() {
    const services = [
        {
            title: 'Wood Fences',
            description: 'Classic cedar & pine fences that boost curb appeal and stand up to Texas weather.',
            image: '/wood-fence.png',
        },
        {
            title: 'Iron Fences',
            description: 'Elegant wrought iron that adds security and serious property value.',
            image: '/iron-fence.png',
        },
        {
            title: 'Vinyl Fences',
            description: 'Zero-maintenance perfection. No painting, no staining, no stress.',
            image: '/vinyl-fence.png',
        },
        {
            title: 'Custom Gates',
            description: 'Driveway gates, garden gates, and automatic openers built to impress.',
            image: '/hero-fence.png',
        },
    ];

    return (
        <section className="section section-center" id="services">
            <span className="section-label">What We Build</span>
            <h2 className="section-title">
                Fences That Make Your Property <span className="accent-text">Look Like a Million Bucks</span>
            </h2>
            <p className="section-subtitle">
                Every project is built with premium materials, expert craftsmanship, and the kind of attention
                to detail you won&apos;t find anywhere else.
            </p>

            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.title}>
                        <img src={service.image} alt={service.title} loading="lazy" />
                        <div className="service-card-overlay">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
