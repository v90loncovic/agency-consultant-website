import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/getting-started", label: "Getting Started" },
    { href: "/contact", label: "Support" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-semibold">
              GoLive
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              We help ambitious brands transform their digital presence and achieve measurable growth.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} GoLive Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
