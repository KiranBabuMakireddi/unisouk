import { useRef, useEffect } from "react";
import {Logos} from '../data/logos'
const logos = Logos

export default function TrustedLogos() {
  const marqueeRef = useRef(null);

  // Clone the logo set to simulate infinite scroll
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee && marquee.children.length === logos.length) {
      for (let i = 0; i < logos.length; i++) {
        marquee.appendChild(marquee.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <section
      className="py-10 bg-white overflow-hidden"
      aria-label="Trusted by top leading companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-6">
          Trusted by top-leading companies
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex animate-marquee whitespace-nowrap space-x-10"
            role="list"
            aria-label="Company logos"
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center" role="listitem">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
