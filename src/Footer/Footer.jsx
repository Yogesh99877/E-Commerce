import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>

            {/* Back to top */}
            <div className="backTop">
                Back to top
            </div>

            {/* Main Footer */}
            <div className="footerMain">

                <div className="footerColumn">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>

                <div className="footerColumn">
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

                <div className="footerColumn">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>
                </div>

                <div className="footerColumn">
                    <h3>Let Us Help You</h3>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>
                </div>

            </div>

            {/* Bottom section */}
            <div className="footerBottom">

                <h2>amazon</h2>

                <div className="footerOptions">
                    <button>🌐 English</button>
                    <button>🇮🇳 India</button>
                </div>

            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>Conditions of Use &nbsp;&nbsp; Privacy Notice &nbsp;&nbsp; Your Ads Privacy Choices</p>
                <p>© 2026 Amazon Clone. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;