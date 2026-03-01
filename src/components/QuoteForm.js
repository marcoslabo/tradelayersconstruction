'use client';

import { useState } from 'react';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to send');

            setSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please call us directly!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="quote-section" id="quote">
            <div className="section">
                <div className="quote-wrapper">
                    <div className="quote-info">
                        <span className="section-label">Ready to Start?</span>
                        <h2 className="section-title">
                            Get Your <span className="accent-text">Free Quote</span> Today
                        </h2>
                        <p>
                            Fill out the form and we&apos;ll get back to you within 24 hours with an honest,
                            no-pressure estimate. No sales pitch. Just straight answers.
                        </p>
                        <ul className="quote-benefits">
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Free on-site estimate
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Response within 24 hours
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                No hidden fees — ever
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Licensed & insured
                            </li>
                        </ul>
                    </div>

                    <form className="quote-form" onSubmit={handleSubmit}>
                        {submitted ? (
                            <div className="form-success">
                                <div className="form-success-icon">✅</div>
                                <h3>Quote Request Sent!</h3>
                                <p>
                                    We&apos;ll call you within 24 hours. In the meantime, feel free to
                                    call us directly at <strong>(737) 336-0983</strong>.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Smith"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="(737) 336-0983"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectType">Project Type</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a project type...</option>
                                        <option value="wood-fence">Wood Fence</option>
                                        <option value="iron-fence">Iron Fence</option>
                                        <option value="vinyl-fence">Vinyl Fence</option>
                                        <option value="gate">Gate / Gate Opener</option>
                                        <option value="fence-repair">Fence Repair</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Tell Us About Your Project</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        placeholder="Briefly describe what you need — fence type, approximate length, timeline, etc."
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={4}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary form-submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Get My Free Quote →'}
                                </button>
                                {error && (
                                    <p style={{ color: 'var(--error)', textAlign: 'center', marginTop: '12px', fontSize: '0.95rem' }}>
                                        {error}
                                    </p>
                                )}
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
