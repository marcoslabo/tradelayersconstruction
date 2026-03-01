export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <img src="/logo.png" alt="TradeLayer Construction" />
                    <p>
                        Austin&apos;s trusted fencing professionals. Premium craftsmanship, honest pricing,
                        and results you can be proud of.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">Wood Fences</a></li>
                        <li><a href="#services">Iron Fences</a></li>
                        <li><a href="#services">Vinyl Fences</a></li>
                        <li><a href="#services">Custom Gates</a></li>
                        <li><a href="#services">Fence Repair</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#social-proof">Reviews</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#how-it-works">Process</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:+17373360983">(737) 336-0983</a></li>
                        <li><a href="mailto:info@tradelayerconstruction.com">info@tradelayer.com</a></li>
                        <li><a href="#quote">Get a Free Quote</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2026 TradeLayer Construction. All rights reserved.</span>
                <span>Proudly serving Austin & Central Texas</span>
            </div>
        </footer>
    );
}
