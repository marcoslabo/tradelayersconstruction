'use client';

import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How much does a new fence cost?',
            answer: 'Every project is different. Pricing depends on the fence type (wood, iron, vinyl), length, terrain, and any gates or custom features. We provide free on-site estimates so you get an accurate, honest quote — no guesswork.',
        },
        {
            question: 'How long does a typical fence installation take?',
            answer: 'Most residential fence projects are completed in 1-3 days. Larger or more complex projects (iron fencing, multiple gates, uneven terrain) may take up to 5 days. We\'ll give you a clear timeline before we start.',
        },
        {
            question: 'Do you pull permits?',
            answer: 'Yes. If your city or HOA requires a permit, we handle the entire process for you. We know Austin-area building codes inside and out.',
        },
        {
            question: 'What areas do you serve?',
            answer: 'We serve the greater Austin metro area, including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Bee Cave, Lakeway, and surrounding communities.',
        },
        {
            question: 'Do you offer warranties?',
            answer: 'Absolutely. All TradeLayer installations come with a workmanship warranty. Material warranties vary by product — we\'ll walk you through the details so you know exactly what\'s covered.',
        },
        {
            question: 'Can you remove my old fence?',
            answer: 'Yes! We handle demolition and removal of your old fence as part of the project. Just mention it when you request your quote and we\'ll include it in the estimate.',
        },
        {
            question: 'Do I need to be home during installation?',
            answer: 'Not necessarily. As long as we have access to the work area, you don\'t need to be present. We\'ll coordinate with you beforehand and send photos of the completed work.',
        },
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section section-center" id="faq">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">
                Got Questions? <span className="accent-text">We&apos;ve Got Answers.</span>
            </h2>

            <div className="faq-list">
                {faqs.map((faq, i) => (
                    <div
                        className={`faq-item ${openIndex === i ? 'open' : ''}`}
                        key={i}
                    >
                        <button
                            className="faq-question"
                            onClick={() => toggle(i)}
                            aria-expanded={openIndex === i}
                        >
                            {faq.question}
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="faq-answer-inner">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
