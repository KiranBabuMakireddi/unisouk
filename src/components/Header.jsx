import { useState, lazy, Suspense } from "react";
import Button from "./Button";

const Menu = lazy(() => import("lucide-react").then(m => ({ default: m.Menu })));
const X = lazy(() => import("lucide-react").then(m => ({ default: m.X })));
const Search = lazy(() => import("lucide-react").then(m => ({ default: m.Search })));

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#", current: true },
    { label: "Features", href: "#features" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="max-w-full mx-5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-900" aria-label="nullBrains homepage">
              nullBrains<span className="text-indigo-600">.</span>
            </a>
          </div>

          {/* Center Nav */}
          <nav
            role="navigation"
            className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  item.current ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Suspense fallback={null}>
              <button aria-label="Search" className="text-gray-600 hover:text-indigo-600">
                <Search size={18} />
              </button>
            </Suspense>
          </nav>

          {/* Right Auth */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#signin" className="text-sm text-gray-700 hover:text-indigo-600">
              Sign In
            </a>
            <Button href="#signup" variant="primary" aria-label="Sign Up">
              Sign Up
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <Suspense fallback={null}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-3" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={`block text-sm font-medium ${
                item.current ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <Suspense fallback={null}>
              <button aria-label="Search" className="text-gray-600 hover:text-indigo-600">
                <Search size={18} />
              </button>
            </Suspense>
            <a href="#signin" className="text-sm text-gray-800 hover:text-indigo-600">
              Sign In
            </a>
            <Button href="#signup" variant="primary" aria-label="Sign Up">
              Sign Up
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
