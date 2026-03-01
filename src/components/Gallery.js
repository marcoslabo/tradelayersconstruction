export default function Gallery() {
    const images = [
        { src: '/gallery-3-wood-fence-backyard.jpg', alt: 'Horizontal cedar wood fence with landscaped backyard' },
        { src: '/gallery-4-horizontal-cedar.jpg', alt: 'Horizontal cedar privacy fence with garden' },
        { src: '/gallery-2-cable-railing.png', alt: 'Modern cable railing on deck stairs' },
        { src: '/gallery-5-iron-railing-interior.jpg', alt: 'Wrought iron interior staircase railing' },
        { src: '/gallery-1-chain-link.jpg', alt: 'Chain link fence installation with fresh sod' },
    ];

    return (
        <section className="section section-center" id="gallery">
            <span className="section-label">Our Work Speaks</span>
            <h2 className="section-title">
                Real Projects. <span className="accent-text">Real Results.</span>
            </h2>
            <p className="section-subtitle">
                Every fence you see here was built by TradeLayer Construction. No stock photos — just our craftsmanship.
            </p>

            <div className="gallery-grid">
                {images.map((img, i) => (
                    <div className="gallery-item" key={i}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    );
}
