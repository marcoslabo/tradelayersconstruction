export default function PainSection() {
    return (
        <section className="pain-section" id="pain">
            <div className="section section-center">
                <span className="section-label">Sound Familiar?</span>
                <h2 className="section-title">
                    Tired of Contractors Who <span className="accent-text">Don't Show Up?</span>
                </h2>
                <p className="section-subtitle">
                    We&apos;ve heard the horror stories. That&apos;s exactly why TradeLayer does things differently.
                </p>

                <div className="pain-grid">
                    <div className="pain-card">
                        <span className="pain-icon">👻</span>
                        <h4>The Ghoster</h4>
                        <p>
                            They take your deposit, promise &quot;next week,&quot; then vanish. No calls back. 
                            No updates. Just silence and an empty yard.
                        </p>
                    </div>

                    <div className="pain-card">
                        <span className="pain-icon">💸</span>
                        <h4>The Cheap Job</h4>
                        <p>
                            That &quot;great deal&quot; fence starts leaning after 6 months. Posts rot. Panels warp. 
                            Now you&apos;re paying twice to fix someone else&apos;s mess.
                        </p>
                    </div>

                    <div className="pain-card">
                        <span className="pain-icon">🕰️</span>
                        <h4>The Endless Project</h4>
                        <p>
                            What was supposed to take a week stretches into a month. Your yard looks like a 
                            construction zone and the crew only shows up &quot;when they can.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
