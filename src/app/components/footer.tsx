import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container mx-auto px-4 footer-top">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="footer-heading mb-2">FinFable</h3>
            <p className="text-sm text-white/90">
              Make financial planning engaging through storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors" aria-label="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors" aria-label="About">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="transition-colors" aria-label="Blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="transition-colors" aria-label="Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="footer-heading mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                {/* Internal route: points to an internal Next.js page at /privacy-policy */}
                <Link href="/privacy-policy" className="transition-colors" aria-label="Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {/* Internal route: points to an internal Next.js page at /terms-of-service */}
                <Link href="/terms-of-service" className="transition-colors" aria-label="Terms of Service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="footer-heading mb-2">Connect</h4>
            <ul className="space-y-2">
              <li>
                {/* Internal link - uses Next.js router for internal navigation */}
                <Link href="/contact" className="transition-colors" aria-label="Contact Us">
                  Contact Us
                </Link>
              </li>
              <li>
                {/* External link to X (Twitter) - opens in a new tab and is not handled by Next.js router */}
                <a
                  href="https://x.com/isotopes123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="X (Twitter)"
                >
                  X
                </a>
              </li>
              <li>
                {/* External link to LinkedIn profile */}
                <a
                  href="https://www.linkedin.com/in/ruchi-bhilare-87738826b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-12 text-center">
          <div className="footer-divider" />
          <p className="text-sm mt-6 text-white/80">&copy; 2025 FinFable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
