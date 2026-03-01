'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
