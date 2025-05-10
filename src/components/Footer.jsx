import React, { Suspense } from "react";

// Lazy load Lucide icons
const Facebook = React.lazy(() => import("lucide-react").then(m => ({ default: m.Facebook })));
const Instagram = React.lazy(() => import("lucide-react").then(m => ({ default: m.Instagram })));
const Twitter = React.lazy(() => import("lucide-react").then(m => ({ default: m.Twitter })));
const Github = React.lazy(() => import("lucide-react").then(m => ({ default: m.Github })));
const Dribbble = React.lazy(() => import("lucide-react").then(m => ({ default: m.Dribbble })));

const navLinks = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Team", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Terms", href: "#" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "Twitter", href: "https://twitter.com", Icon: Twitter },
  { name: "GitHub", href: "https://github.com", Icon: Github },
  { name: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <nav aria-label="Footer Navigation" className="mb-4">
          <ul className="flex justify-center flex-wrap gap-5 text-sm text-gray-600">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-4 flex justify-center gap-5">
          {socialLinks.map(({ name, href, Icon }) => (
            <Suspense key={name} fallback={<span className="w-5 h-5" />}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            </Suspense>
          ))}
        </div>

        <p className="text-xs text-gray-500">
          © 2025 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
